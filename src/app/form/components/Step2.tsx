"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { step2Schema } from "../../lib/validationSchemas";
import { z } from "zod";

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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register("street")}
          placeholder="Street Address"
          className="input"
        />
        <p className="text-red-500 text-sm">{errors.street?.message}</p>
      </div>
      <div>
        <input {...register("city")} placeholder="City" className="input" />
        <p className="text-red-500 text-sm">{errors.city?.message}</p>
      </div>
      <div>
        <input {...register("zip")} placeholder="Zip Code" className="input" />
        <p className="text-red-500 text-sm">{errors.zip?.message}</p>
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
