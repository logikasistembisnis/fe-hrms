"use client";
import React from "react";

interface CircleProgressProps {
    percentage: number;
}

export default function CircleProgress({ percentage }: CircleProgressProps) {
    const radius = 36;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;

    return (
        <div className="relative w-24 h-24">
            <svg className="w-full h-full transform -rotate-90">
                <circle
                    stroke="#ccc"
                    strokeWidth="8"
                    fill="transparent"
                    r={radius}
                    cx="48"
                    cy="48"
                />
                <circle
                    stroke="#00A6FF"
                    strokeWidth="8"
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                    fill="transparent"
                    r={radius}
                    cx="48"
                    cy="48"
                />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-lg font-bold text-blue-500">
                {percentage}%
            </span>
        </div>
    );
}
