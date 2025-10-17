"use client";
import React from "react";

// Define the expected props for this component
interface CircleProgressProps {
    percentage: number;
}

export default function CircleProgress({ percentage }: CircleProgressProps) {
    // Calculate the offset for the circle
    const radius = 36; //radius lingkaran
    const circumference = 2 * Math.PI * radius; //keliling lingkaran
    const offset = circumference - (percentage / 100) * circumference; //panjang bagian lingkaran yang belum diisi

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
