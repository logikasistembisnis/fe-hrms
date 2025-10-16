"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { usePathname } from "next/navigation";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {

    // Get the current pathname
    const pathname = usePathname();

    // Is the current page the sign-up page?
    const isSignUpPage = pathname === "/sign-up";

    return (
        <div className="min-h-screen bg-white px-8 py-4 flex flex-col">
            {/* Render the header if not on the sign-up page */}
            {!isSignUpPage && <Header />}

            {/* Render the children */}
            <main className="flex-1">
                {children}
            </main>

            {/* Render the footer if not on the sign-up page */}
            {!isSignUpPage && <Footer />}
        </div>
    );
}
