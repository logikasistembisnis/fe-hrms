"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeaderAdmin } from "@/components/HeaderAdmin";
import { usePathname } from "next/navigation";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Get the current pathname
    const pathname = usePathname();

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

    // deteksi jika path adalah salah satu root di atas → hide semuanya
    const hideHeaderFooter = noHeaderFooterRoutes.includes(pathname);

    // deteksi jika path adalah subroute dari salah satu (misal /employee-self-service/...)
    const isSubRoute = noHeaderFooterRoutes.some(
        (route) => pathname.startsWith(`${route}/`) && pathname !== route
    );

    const isHome = pathname === "/";

    // sisanya berarti route lain → pakai header admin
    const useAdminHeader = !hideHeaderFooter && !isSubRoute && !isHome;

    return (
        <div
            className={`min-h-screen flex flex-col bg-white ${hideHeaderFooter ? "" : "px-8 py-4"
                }`}
        >
            {/* Header */}
            {!hideHeaderFooter && (
                <>
                    {isSubRoute || isHome ? <Header /> : <HeaderAdmin />}
                </>
            )}

            {/* Main content */}
            <main className="flex-1">{children}</main>

            {/* Footer */}
            {!hideHeaderFooter && <Footer />}
        </div>
    );
}
