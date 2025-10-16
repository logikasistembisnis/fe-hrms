"use client";

import { useState } from "react";
import "@/app/globals.css";
import { Sidebar } from "@/components/Sidebar";

export default function LayoutInformation({
  children,
}: {
  children: React.ReactNode;
}) {
  
  // State to control the sidebar
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen flex py-4 bg-white">
      {/* SIDEBAR + CONTENT */}
      <div className="flex flex-1 relative transition-all duration-300">
        {/* SIDEBAR */}
        <div
          className={`relative transition-all duration-300 ${
            isSidebarOpen ? "w-64" : "w-0"
          }`}
        >
          <div
            className={`h-full bg-[#F5FAFF] shadow-sm overflow-hidden ${
              isSidebarOpen ? "opacity-100" : "opacity-0"
            } transition-opacity duration-300`}
          >
            <Sidebar />
          </div>

          {/* TOGGLE BUTTON */}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`absolute top-1/2 -translate-y-1/2 ${
              isSidebarOpen ? "right-[-18px]" : "-right-4"
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

        {/* CONTENT */}
        <main
          className={`flex-1 px-6 py-3 transition-all duration-300 ${
            isSidebarOpen ? "ml-0" : "ml-2"
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
