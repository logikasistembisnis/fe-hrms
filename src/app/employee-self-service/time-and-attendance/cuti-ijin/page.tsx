"use client";
import { useState } from "react";
import ProfileHeader from "@/components/information/ProfileHeader";
import CutiIjinTabs from "@/components/attendance/CutiIjinTab";
import CutiIjinCard from "@/components/attendance/CutiIjinCard";

export default function CutiIjinPage() {
  const [activeTab, setActiveTab] = useState<"cuti" | "ijin">("cuti");

  return (
    <div className="w-full px-6">
      <ProfileHeader
        name="Rangga"
        text="Silahkan proses cuti dan ijin Kamu disini. Good Luck!"
      />

      <CutiIjinTabs active={activeTab} onChange={setActiveTab} />

      <CutiIjinCard type={activeTab} />
    </div>
  );
}
