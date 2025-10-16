import React from "react";

interface ProfileSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function ProfileSection({ title, children }: ProfileSectionProps) {
  return (
    <section className="mb-4">
      {title.trim() && <h2 className="font-bold text-lg mb-2">{title}</h2>}
      <div className="flex flex-col gap-2">{children}</div>
    </section>
  );
}
