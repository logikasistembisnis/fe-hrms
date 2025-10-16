"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Organization Design", path: "/organization-design" },
    { label: "Employee Self-Service", path: "/employee-self-service" },
    { label: "Recruitment & Selection", path: "/recruitment-selection" },
    { label: "Learning Management", path: "/learning-management" },
    { label: "Performance Management", path: "/performance-management" },
    { label: "Career Management", path: "/career-management" },
    { label: "Total Rewards", path: "/total-rewards" },
    { label: "Industrial Relationship", path: "/industrial-relationship" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="bg-[#eef8ff] px-8 py-3 flex items-center justify-between shadow-sm">
      {/* Navigation */}
      <nav className="flex gap-6 text-sm">
        {/* Logo */}
        <Image
          src="/logo2.png"
          alt="People Partner Logo"
          width={100}
          height={100}
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />
        {menuItems.map((item) => (
          <button
            key={item.label}
            onClick={() => router.push(item.path)}
            className={`transition-colors ${isActive(item.path)
                ? "font-semibold text-black"
                : "text-[#56A0FF] hover:text-black"
              }`}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
