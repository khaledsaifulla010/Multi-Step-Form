"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step1Schema } from "../../lib/validationSchemas";
import { z } from "zod";

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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register("fullName")}
          placeholder="Full Name"
          className="input"
        />
        <p className="text-red-500 text-sm">{errors.fullName?.message}</p>
      </div>
      <div>
        <input {...register("email")} placeholder="Email" className="input" />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>
      </div>
      <div>
        <input {...register("phone")} placeholder="Phone" className="input" />
        <p className="text-red-500 text-sm">{errors.phone?.message}</p>
      </div>
      <button type="submit" className="btn btn-primary">
        Next
      </button>
    </form>
  );
}
