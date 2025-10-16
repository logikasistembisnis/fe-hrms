import { CardMenu } from "@/components/CardMenu";

export default function Home() {
    // Define the menu items
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
        <section className="flex-1 py-5 bg-[#f9fbff]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-8">
                {/* Render the menu items */}
                {menus.map((menu) => (
                    <CardMenu key={menu.title} {...menu} />
                ))}
            </div>
        </section>
    )
}