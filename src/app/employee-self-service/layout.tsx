"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import "@/app/globals.css";
import { Sidebar } from "@/components/SidebarEmployee";

export default function LayoutEmployee({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get the current pathname
  const pathname = usePathname();
  // State to control the sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  // State to track if the component is mounted
  const [isClient, setIsClient] = useState(false);

  // Set isClient to true when the component mounts
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Routes without sidebar
  const basePath = "/employee-self-service";

  // Show the sidebar if the component is mounted and the current route is not the base path
  const showSidebar = isClient && pathname.startsWith(`${basePath}/`) && pathname !== basePath; 

  return (
    <div className={`min-h-screen flex bg-white transition-all duration-300 ${
        showSidebar ? "py-4" : ""
      }`}>
      {/* SIDEBAR + CONTENT */}
      <div className="flex flex-1 relative transition-all duration-300">
        {/* SIDEBAR */}
        {showSidebar && (
          <div
            className={`relative transition-all duration-300 ${isSidebarOpen ? "w-64" : "w-0"
              }`}
          >
            <div
              className={`h-full bg-[#eef8ff] shadow-sm overflow-hidden ${isSidebarOpen ? "opacity-100" : "opacity-0"
                } transition-opacity duration-300`}
            >
              <Sidebar />
            </div>

            {/* TOGGLE BUTTON */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className={`absolute top-1/2 -translate-y-1/2 ${isSidebarOpen ? "right-[-18px]" : "-right-4"
                } w-0 h-0 border-y-[35px] border-y-transparent 
                       border-l-[17px] border-l-blue-200 
                       hover:border-l-blue-600 transition-all duration-300`}
              style={{
                transform: isSidebarOpen
                  ? "translateY(-50%)"
                  : "translateY(-50%) rotate(180deg)",
              }}
              aria-label="Toggle Sidebar"
            ></button>
          </div>
        )}

        {/* CONTENT */}
        <main
          className={`flex-1 transition-all duration-300 ${
            showSidebar
              ? `${isSidebarOpen ? "px-6 py-3 ml-0" : "px-6 py-3 ml-2"}`
              : ""
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
