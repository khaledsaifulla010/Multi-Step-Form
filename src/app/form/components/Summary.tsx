"use client";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoIosDoneAll } from "react-icons/io";
import { RiFocus3Fill } from "react-icons/ri";
type Props = {
  data: Record<string, string>;
  onBack: () => void;
  onSubmit: () => void;
};

export default function Summary({ data, onBack, onSubmit }: Props) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-center text-gray-800 dark:text-gray-100 flex items-center justify-center gap-2">
        Review Your Information <RiFocus3Fill />
      </h2>

      <div className="border border-gray-300 dark:border-gray-600 rounded-lg p-6 bg-gray-50 dark:bg-gray-700">
        <ul className="space-y-3">
          {Object.entries(data).map(([key, value]) => (
            <li key={key} className="flex items-start gap-2">
              <span className="font-medium capitalize text-gray-700 dark:text-gray-200">
                {key.replace(/([A-Z])/g, " $1")}:
              </span>
              <span className="text-gray-900 dark:text-gray-100 break-all">
                {value}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex justify-between">
        <button
          onClick={onBack}
          className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500 text-gray-800 dark:text-white font-semibold py-2 px-6 rounded-md transition-all duration-300 flex items-center gap-1 cursor-pointer"
        >
          <IoMdArrowRoundBack className="text-xl" /> Back
        </button>

        <button
          onClick={() => {
            onSubmit();
            window.location.reload();
          }}
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-md transition-all duration-300 flex items-center gap-1 cursor-pointer"
        >
          Submit <IoIosDoneAll className="text-3xl" />
        </button>
      </div>
    </div>
  );
}
