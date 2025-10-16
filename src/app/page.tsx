import { CardMenu } from "@/components/CardMenu";

export default function Home() {
    const menus = [
        { title: "Organization Design", imageSrc: "/menu/org-design.jpg" },
        { title: "Learning Management", imageSrc: "/menu/learning.jpg" },
        { title: "Performance Management", imageSrc: "/menu/performance.png" },
        { title: "Career Management", imageSrc: "/menu/career.jpg" },
        { title: "Employee Self-Service", imageSrc: "/menu/self-service.jpg" },
        { title: "Recruitment & Selection", imageSrc: "/menu/recruitment.jpg" },
        { title: "Total Rewards", imageSrc: "/menu/rewards.jpg" },
        { title: "Industrial Relationship", imageSrc: "/menu/industrial.png" },
    ];

    return (
        <main className="min-h-screen flex flex-col bg-[#f9fbff]">
            <section className="flex-1 px-10 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
                    {menus.map((menu) => (
                        <CardMenu key={menu.title} {...menu} />
                    ))}
                </div>
            </section>
        </main>
    )
}