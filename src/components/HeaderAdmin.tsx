"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export function HeaderAdmin() {
    const router = useRouter();
    const pathname = usePathname();

    const menuItems = [
        { label: "Home", path: "/home" },
        { label: "Desain Organisasi", path: "/desain-organisasi" },
        { label: "Kompensasi & Benefit", path: "/kompensasi-benefit" },
        { label: "Layanan Mandiri", path: "/layanan-mandiri" },
        { label: "Hubungan Industrial", path: "/hubungan-industrial" },
        { label: "Rekrutmen", path: "/rekrutmen" },
        { label: "Master Admin", path: "/master-admin" },
        { label: "Assesmen", path: "/assesmen" },
        { label: "Manajemen Kinerja", path: "/manajemen-kinerja" },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <header className="bg-[#eef8ff] px-8 py-3 flex items-center justify-between shadow-sm">
            {/* Navigation */}
            <nav className="flex gap-11 text-sm">
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
