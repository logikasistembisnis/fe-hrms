"use client";
import React from "react";

interface CutiIjinTabsProps {
    active: "cuti" | "ijin";
    onChange: (value: "cuti" | "ijin") => void;
}

export default function CutiIjinTabs({ active, onChange }: CutiIjinTabsProps) {
    return (
        <div className="flex justify-end mt-4 gap-3">
            <button
                onClick={() => onChange("cuti")}
                className={`px-8 py-2 font-semibold rounded-lg border transition-all ${active === "cuti"
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-blue-600 border-blue-600 hover:bg-blue-100"
                    }`}
            >
                Cuti
            </button>
            <button
                onClick={() => onChange("ijin")}
                className={`px-8 py-2 font-semibold rounded-lg border transition-all ${active === "ijin"
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white text-blue-600 border-blue-600 hover:bg-blue-100"
                    }`}
            >
                Ijin
            </button>
        </div>
    );
}
