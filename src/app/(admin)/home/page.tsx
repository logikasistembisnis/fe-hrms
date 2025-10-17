"use client";
import { CardMenu } from "@/components/CardMenu";
import { useRouter } from "next/navigation";

export default function AdminHomePage() {
    const router = useRouter();

    // Define the menu items
    const menus = [
        { title: "DESAIN ORGANISASI", imageSrc: "/menu/org-design.jpg", path: "/desain-organisasi" },
        { title: "LAYANAN MANDIRI", imageSrc: "/menu/learning.jpg", path: "/layanan-mandiri" },
        { title: "REKRUTMEN", imageSrc: "/menu/performance.png", path: "/rekrutmen" },
        { title: "ASSESMEN", imageSrc: "/menu/career.jpg", path: "/assesmen" },
        { title: "KOMPENSASI DAN BENEFIT", imageSrc: "/menu/self-service.jpg", path: "/kompensasi-benefit" },
        { title: "HUBUNGAN INDUSTRIAL", imageSrc: "/menu/recruitment.jpg", path: "/hubungan-industrial" },
        { title: "MASTER ADMIN", imageSrc: "/menu/rewards.jpg", path: "/master-admin" },
        { title: "MANAJEMEN KINERJA", imageSrc: "/menu/industrial.png", path: "/manajemen-kinerja" },
    ];

    return (
        <section className="flex-1 py-5 bg-[#f9fbff]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-8">
                {/* Render the menu items */}
                {menus.map((menu) => (
                    <CardMenu 
                    key={menu.title}
                    onClick={() => router.push(menu.path)} 
                    {...menu} />
                ))}
            </div>
        </section>
    )
}