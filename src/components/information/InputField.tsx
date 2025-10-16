import React from "react";

interface InputFieldProps {
  label: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputField({ label, type = "text", value, onChange }: InputFieldProps) {
  return (
    <div className="flex flex-col">
      <label className="text-xs font-medium mb-1 text-gray-700">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  );
}
