import { useState } from "react";

export const useMultiStepForm = () => {
  const [step, setStep] = useState(0);
  const next = () => setStep((prev) => prev + 1);
  const prev = () => setStep((prev) => prev - 1);
  const isLast = step === 3;
  const isFirst = step === 0;

  return { step, next, prev, isLast, isFirst };
};
