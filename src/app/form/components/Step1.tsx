"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step1Schema } from "../../lib/validationSchemas";
import { z } from "zod";
import { GrFormNextLink } from "react-icons/gr";
import { GrContactInfo } from "react-icons/gr";
type Step1Data = z.infer<typeof step1Schema>;

type Props = {
  onNext: (data: Step1Data) => void;
  defaultValues: Step1Data;
};

export default function Step1({ onNext, defaultValues }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Step1Data>({
    resolver: zodResolver(step1Schema),
    defaultValues,
  });

  const onSubmit = (data: Step1Data) => onNext(data);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6 mt-8 text-gray-800 dark:text-gray-100 flex items-center  justify-center gap-2">
        <GrContactInfo /> Your Personal Information <GrContactInfo />
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            {...register("fullName")}
            placeholder="Full Name"
            className="input border w-full p-2 rounded-xl"
          />
          <p className="text-red-500 text-sm">{errors.fullName?.message}</p>
        </div>
        <div>
          <input
            {...register("email")}
            placeholder="Email"
            className="input border w-full p-2 rounded-xl"
          />
          <p className="text-red-500 text-sm">{errors.email?.message}</p>
        </div>
        <div>
          <input
            {...register("phone")}
            placeholder="Phone"
            className="input border w-full p-2 rounded-xl"
          />
          <p className="text-red-500 text-sm">{errors.phone?.message}</p>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-blue-800 dark:text-white font-bold py-2 px-6 rounded-md transition-all duration-300 flex items-center gap-1 cursor-pointer justify-center"
        >
          Next <GrFormNextLink className="text-xl" />
        </button>
      </form>
    </div>
  );
}
