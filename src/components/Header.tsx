"use client";

import Image from "next/image";
import { useState } from "react";

export function Header() {
  const [active, setActive] = useState("Employee Self-Service");

  const menuItems = [
    "Home",
    "Organization Design",
    "Employee Self-Service",
    "Recruitment & Selection",
    "Learning Management",
    "Performance Management",
    "Career Management",
    "Total Rewards",
    "Industrial Relationship",
  ];

  return (
    <header className="bg-[#f5faff] px-8 py-3 flex items-center justify-between shadow-sm">
      {/* Navigation */}
      <nav className="flex gap-6 text-sm">
        {/* Logo */}
      <Image src="/logo2.png" alt="People Partner Logo" width={100} height={100} />
        {menuItems.map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`transition-colors ${
              active === item
                ? "font-semibold text-black"
                : "text-[#56A0FF] hover:text-black"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
}
