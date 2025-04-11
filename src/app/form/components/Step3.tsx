"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step3Schema } from "../../lib/validationSchemas";
import { z } from "zod";

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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register("username")}
          placeholder="Username"
          className="input"
        />
        <p className="text-red-500 text-sm">{errors.username?.message}</p>
      </div>
      <div>
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
          className="input"
        />
        <p className="text-red-500 text-sm">{errors.password?.message}</p>
      </div>
      <div>
        <input
          {...register("confirmPassword")}
          type="password"
          placeholder="Confirm Password"
          className="input"
        />
        <p className="text-red-500 text-sm">
          {errors.confirmPassword?.message}
        </p>
      </div>
      <div className="flex justify-between">
        <button type="button" onClick={onBack} className="btn btn-secondary">
          Back
        </button>
        <button type="submit" className="btn btn-primary">
          Next
        </button>
      </div>
    </form>
  );
}
