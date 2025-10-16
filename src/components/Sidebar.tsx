"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

export function Sidebar() {
  const [activeMain, setActiveMain] = useState("Employee Self-Service");
  const [activeSub, setActiveSub] = useState("Personal Information");

  const mainMenus = [
    "Employee Self-Service",
    "Organization Design",
    "Recruitment & Selection",
    "Learning Management",
    "Performance Management",
    "Talent Management",
    "Total Rewards",
    "Industrial Relationship",
  ];

  const subMenus = [
    "Personal Information",
    "Time & Attendance",
    "Payroll & Compensation",
    "Benefit Management",
    "Training & Development",
    "Companies Policies & Doc.",
    "Shift Management",
    "Help & Support",
  ];

  return (
    <aside className="w-64 bg-[#eef8ff] p-4">
      {/* Employee Self-Service Section */}
      <div className="mb-6">
        <h2 className="font-bold text-black mb-2">Employee Self-Service</h2>
        <ul className="space-y-1 pl-3 border-l-2 border-gray-300">
          {subMenus.map((item) => (
            <li
              key={item}
              onClick={() => setActiveSub(item)}
              className={`pl-3 cursor-pointer text-sm ${
                activeSub === item
                  ? "font-semibold text-black"
                  : "text-gray-500 hover:text-black"
              }`}
            >
              {activeSub === item && (
                <ChevronRight className="inline-block w-3 h-3 mr-1 text-black" />
              )}
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Other Main Menus */}
      <ul className="space-y-2 text-sm text-gray-400">
        {mainMenus
          .filter((m) => m !== "Employee Self-Service")
          .map((menu) => (
            <li
              key={menu}
              onClick={() => setActiveMain(menu)}
              className="cursor-not-allowed select-none"
            >
              {menu}
            </li>
          ))}
      </ul>
    </aside>
  );
}
