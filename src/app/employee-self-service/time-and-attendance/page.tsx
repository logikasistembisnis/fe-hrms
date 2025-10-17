"use client";
import ProfileHeader from "@/components/information/ProfileHeader";
import { MenuCard } from "@/components/attendance/MenuCard";
import { useRouter } from "next/navigation";
import StatisticCard from "@/components/attendance/StatisticCard";

export default function TimeAttendance() {
    const router = useRouter();
    const menu = [
        { title: "Data Kehadiranmu", imageSrc: "/attendance/kehadiran.svg", path: "/employee-self-service/time-and-attendance/data-kehadiran" },
        { title: "Data Kehadiran Tim Kamu", imageSrc: "/attendance/tim.svg", path: "/employee-self-service/time-and-attendance/data-kehadiran-tim" },
        { title: "Cuti & Ijin", imageSrc: "/attendance/ijin.svg", path: "/employee-self-service/time-and-attendance/cuti-ijin" },
        { title: "Daftar Persetujuan", imageSrc: "/attendance/persetujuan.svg", path: "/employee-self-service/time-and-attendance/daftar-persetujuan" },
    ];
    const stats = [
        { title: "% Keterlambatan", value: "7/21", percentage: 33, highlight: true, color: "#EF4444" },
        { title: "Kehadiranmu", value: "7/21", percentage: 33 },
        { title: "Sisa Cuti Kamu", value: "7/10", percentage: 70 },
        { title: "Persetujuan", value: "7/10", percentage: 70 },
    ];

    return (
        <div className="w-full px-4">
            <ProfileHeader name="Rangga" text="Apa yang mau Kamu lakukan hari ini?" />
            <div className="flex gap-12 justify-center mt-10">
                {menu.map((item) =>
                    <MenuCard
                        key={item.title}
                        onClick={() => router.push(item.path)}
                        {...item}
                    />
                )}
            </div>
            {/* Statistik cards */}
            <div className="mt-8 flex justify-center">
                <div className="border border-blue-200 rounded-lg p-6 flex justify-center gap-10 flex-wrap">
                {stats.map((stat) => (
                    <StatisticCard key={stat.title} {...stat} />
                ))}
            </div>
            </div>
        </div>
    );
}