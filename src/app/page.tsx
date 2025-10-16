"use client";
import { CardMenu } from "@/components/CardMenu";
import { useRouter, usePathname } from "next/navigation";

export default function Home() {
    const router = useRouter();
    const pathname = usePathname();

    // Define the menu items
    const menus = [
        { title: "Organization Design", imageSrc: "/menu/org-design.jpg", path: "/organization-design" },
        { title: "Learning Management", imageSrc: "/menu/learning.jpg", path: "/learning-management" },
        { title: "Performance Management", imageSrc: "/menu/performance.png", path: "/performance-management" },
        { title: "Career Management", imageSrc: "/menu/career.jpg", path: "/career-management" },
        { title: "Employee Self-Service", imageSrc: "/menu/self-service.jpg", path: "/employee-self-service" },
        { title: "Recruitment & Selection", imageSrc: "/menu/recruitment.jpg", path: "/recruitment-selection" },
        { title: "Total Rewards", imageSrc: "/menu/rewards.jpg", path: "/total-rewards" },
        { title: "Industrial Relationship", imageSrc: "/menu/industrial.png", path: "/industrial-relationship" },
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