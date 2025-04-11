"use client";

import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Summary from "./components/Summary";
import { useMultiStepForm } from "./hooks/useMultiStepForm";
import { useState } from "react";

export default function FormPage() {
  const { step, next, prev } = useMultiStepForm();
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phone: "",
    street: "",
    city: "",
    zip: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const update = (values: any) => {
    setData((prev) => ({ ...prev, ...values }));
    next();
  };

  const handleFinalSubmit = () => {
    console.log("Submitted data:", data);
  };

  const steps = [
    <Step1 key={0} defaultValues={data} onNext={update} />,
    <Step2 key={1} defaultValues={data} onNext={update} onBack={prev} />,
    <Step3 key={2} defaultValues={data} onNext={update} onBack={prev} />,
    <Summary key={3} data={data} onBack={prev} onSubmit={handleFinalSubmit} />,
  ];

  return (
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white flex items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-300 dark:border-gray-700">
        <h1 className="text-4xl font-bold text-center mb-6">Multi-Step Form</h1>
        {steps[step]}
      </div>
    </main>
  );
}
