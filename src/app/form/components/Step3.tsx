"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step3Schema } from "../../lib/validationSchemas";
import { z } from "zod";
import { IoMdArrowRoundBack } from "react-icons/io";
import { GrFormNextLink } from "react-icons/gr";
import { MdOutlineManageAccounts } from "react-icons/md";
type Step3Data = z.infer<typeof step3Schema>;

type Props = {
  onNext: (data: Step3Data) => void;
  onBack: () => void;
  defaultValues: Step3Data;
};

export default function Step3({ onNext, onBack, defaultValues }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step3Data>({
    resolver: zodResolver(step3Schema),
    defaultValues,
  });

  const onSubmit = (data: Step3Data) => onNext(data);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6 mt-8 text-gray-800 dark:text-gray-100 flex items-center  justify-center gap-2">
        <MdOutlineManageAccounts /> Your Account Setup{" "}
        <MdOutlineManageAccounts />
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register("username")}
            placeholder="Username"
            className="input border w-full p-2 rounded-xl"
          />
          <p className="text-red-500 text-sm">{errors.username?.message}</p>
        </div>
        <div>
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="input border w-full p-2 rounded-xl"
          />
          <p className="text-red-500 text-sm">{errors.password?.message}</p>
        </div>
        <div>
          <input
            {...register("confirmPassword")}
            type="password"
            placeholder="Confirm Password"
            className="input border w-full p-2 rounded-xl"
          />
          <p className="text-red-500 text-sm">
            {errors.confirmPassword?.message}
          </p>
        </div>
        <div className="flex justify-between ">
          <button
            onClick={onBack}
            className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-white font-semibold py-2 px-6 rounded-md transition-all duration-300 flex items-center gap-1 cursor-pointer"
          >
            <IoMdArrowRoundBack className="text-xl" /> Back
          </button>
          <button
            type="submit"
            className=" bg-blue-500 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-blue-800 dark:text-white font-bold py-2 px-6 rounded-md transition-all duration-300 flex items-center gap-1 cursor-pointer justify-center "
          >
            Next <GrFormNextLink className="text-xl" />
          </button>
        </div>
      </form>
    </div>
  );
}
