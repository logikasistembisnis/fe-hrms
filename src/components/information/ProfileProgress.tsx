import React from "react";

interface ProfileProgressProps {
  text: string;
  value: string;
  percentage: number;
}

export default function ProfileProgress({ text, value, percentage }: ProfileProgressProps) {
  return (
    <div className="flex items-center gap-4">
      {/* Title */}
      <div className="text-sm font-bold text-gray-700 uppercase tracking-wide w-30 text-center flex flex-col">
        <p>{text}</p>
        <p>{value}</p>
      </div>

      {/* Diagram */}
      <div className="relative w-20 h-20">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            className="text-gray-200"
            strokeWidth="8"
            stroke="currentColor"
            fill="transparent"
            r="32"
            cx="40"
            cy="40"
          />
          <circle
            className="text-blue-500"
            strokeWidth="8"
            strokeDasharray="201"
            strokeDashoffset={201 - (percentage / 100) * 201}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="32"
            cx="40"
            cy="40"
          />
        </svg>

        <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-blue-600">
          {percentage}%
        </span>
      </div>
    </div>
  );
}
