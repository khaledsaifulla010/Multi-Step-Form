"use client";

type Props = {
  data: Record<string, string>;
  onBack: () => void;
  onSubmit: () => void;
};

export default function Summary({ data, onBack, onSubmit }: Props) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Review Your Information</h2>
      <ul className="list-disc pl-4">
        {Object.entries(data).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
      <div className="flex justify-between">
        <button onClick={onBack} className="btn btn-secondary">
          Back
        </button>
        <button onClick={onSubmit} className="btn btn-primary">
          Submit
        </button>
      </div>
    </div>
  );
}
