"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step2Schema } from "../../lib/validationSchemas";
import { z } from "zod";
import { GrFormNextLink } from "react-icons/gr";
import { IoMdArrowRoundBack } from "react-icons/io";
import { RiUserLocationFill } from "react-icons/ri";
type Step2Data = z.infer<typeof step2Schema>;

type Props = {
  onNext: (data: Step2Data) => void;
  onBack: () => void;
  defaultValues: Step2Data;
};

export default function Step2({ onNext, onBack, defaultValues }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step2Data>({
    resolver: zodResolver(step2Schema),
    defaultValues,
  });

  const onSubmit = (data: Step2Data) => onNext(data);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6 mt-8 text-gray-800 dark:text-gray-100 flex items-center  justify-center gap-2">
        <RiUserLocationFill /> Your Address Details <RiUserLocationFill />
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register("street")}
            placeholder="Street Address"
            className="input border w-full p-2 rounded-xl"
          />
          <p className="text-red-500 text-sm">{errors.street?.message}</p>
        </div>
        <div>
          <input
            {...register("city")}
            placeholder="City"
            className="input border w-full p-2 rounded-xl"
          />
          <p className="text-red-500 text-sm">{errors.city?.message}</p>
        </div>
        <div>
          <input
            {...register("zip")}
            placeholder="Zip Code"
            className="input border w-full p-2 rounded-xl"
          />
          <p className="text-red-500 text-sm">{errors.zip?.message}</p>
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
            className=" bg-blue-500 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-blue-800 dark:text-white font-bold py-2 px-6 rounded-md transition-all duration-300 flex items-center gap-1 cursor-pointer justify-center"
          >
            Next <GrFormNextLink className="text-xl" />
          </button>
        </div>
      </form>
    </div>
  );
}
