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

    // Effect to check if the component is mounted
    useEffect(() => {
        setIsClient(true);
    }, []);

    // Check if the current page is the sign-up page
    const isSignUpPage = isClient ? pathname === "/sign-up" : false;


    return (
        <div className={`min-h-screen flex flex-col bg-white ${isSignUpPage ? "" : "px-8 py-4"
            }`}
        >
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
