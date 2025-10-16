"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useRouter } from "next/navigation";

export default function EmployeeSelfServicePage() {
    // Initialize the Next.js router
    const router = useRouter();
    // Define the menu items
    const menuItems = [
        "Personal Information",
        "Time & Attendance",
        "Payroll & Compensation",
        "Benefits Management",
        "Training & Development",
        "Companies Policies & Doc.",
        "Shift Management",
        "Help & Support",
    ];

    // Split the menu items into two columns
    const leftColumn = menuItems.slice(0, 4);
    const rightColumn = menuItems.slice(4);

    return (
        <main
            className="relative min-h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/bg-employee.png')" }}
        >
            {/* Left Content */}
            <div className="absolute inset-0 bg-black/90 flex flex-col justify-center md:w-1/2 px-8 md:px-16 py-12 text-white">
                {/* Logo */}
                <div className="flex items-center mb-6">
                    <Image
                        src="/logo.png"
                        alt="People Partner Logo"
                        width={100}
                        height={100}
                        className="w-40 h-auto"
                    />
                </div>

                {/* Title */}
                <h2 className="text-4xl font-bold mb-3">EMPLOYEE SELF-SERVICE</h2>

                {/* Description */}
                <p className="text-white/90 leading-snug text-justify text-lg italic mb-5">
                    Imagine a workplace where your needs are just a click away—welcome to
                    our Employee Self Service portal, designed to empower you with instant
                    access to your personal information, benefits, and support whenever
                    you need it.
                </p>

                {/* Menu */}
                <div className="flex gap-12 mb-8">
                    {/* Left column */}
                    <div className="flex flex-col gap-2">
                        {leftColumn.map((item, index) => (
                            <p key={index} className="text-[#56A0FF] text-lg font-medium">
                                {index + 1}. {item}
                            </p>
                        ))}
                    </div>

                    {/* Right column */}
                    <div className="flex flex-col gap-2">
                        {rightColumn.map((item, index) => (
                            <p key={index + 4} className="text-[#56A0FF] text-lg font-medium">
                                {index + 5}. {item}
                            </p>
                        ))}
                    </div>
                </div>

                {/* Start Button */}
                <div className="flex justify-center">
                    <button 
                    onClick={() => router.push("/employee-self-service/personal-information")}
                    className="flex items-center gap-3 text-3xl font-bold text-white cursor-pointer">
                        <div className="flex items-center justify-center w-8 h-8 rounded-full border border-white">
                            <Play className="w-4 h-4 text-white fill-white" />
                        </div>
                        <span>Start</span>
                    </button>
                </div>
            </div>
        </main>
    );
}
