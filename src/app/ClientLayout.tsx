"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Get the current pathname
    const pathname = usePathname();
    // State to track if the component is mounted
    const [isClient, setIsClient] = useState(false);

    // Set isClient to true when the component mounts
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Routes without header and footer
    const noHeaderFooterRoutes = [
        "/sign-up",
        "/organization-design",
        "/employee-self-service",
        "/recruitment-selection",
        "/learning-management",
        "/performance-management",
        "/career-management",
        "/total-rewards",
        "/industrial-relationship",
    ];

    // Check if the current route should hide the header and footer
    const hideHeaderFooter =
        isClient && noHeaderFooterRoutes.includes(pathname);

    return (
        <div
            className={`min-h-screen flex flex-col bg-white ${hideHeaderFooter ? "" : "px-8 py-4"
                }`}
        >
            {/* Header */}
            {!hideHeaderFooter && <Header />}

            {/* Main content */}
            <main className="flex-1">{children}</main>

            {/* Footer */}
            {!hideHeaderFooter && <Footer />}
        </div>
    );
}
