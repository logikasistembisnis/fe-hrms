"use client";
import { MenuCard } from "@/components/attendance/MenuCard";
import { useRouter } from "next/navigation";

export default function MasterAdmin() {
    const router = useRouter();

    const menu = [
        { title: "Desain Perusahaan", imageSrc: "/admin/desain.png", path: "/master-admin/desain-perusahaan" },
        { title: "Manajemen Pengguna", imageSrc: "/admin/manajemen.png", path: "/master-admin/manajemen-pengguna" },
        { title: "Dasar Kompensasi dan Benefit", imageSrc: "/admin/dasar.png", path: "/master-admin/dasar-kompensasi-benefit" },
    ];

    return (
        <div className="flex flex-col justify-center items-center px-8 py-20">
            <h2 className="text-3xl font-bold mb-8">Halo Good People! Selamat Datang di People Partner System...</h2>
            <h2 className="text-2xl font-bold mb-8">Sebelum dimulai silahkan pilih menu dibawah ini: </h2>
            <div className="flex gap-12 justify-center mt-8">
                {/* Menu cards */}
                {menu.map((item) =>
                    <MenuCard
                        key={item.title}
                        onClick={() => router.push(item.path)}
                        {...item}
                    />
                )}
            </div>
        </div>
    );
}