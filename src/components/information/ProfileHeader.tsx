import Image from "next/image";
import React from "react";

// Define the expected props for this component
interface ProfileHeaderProps {
  name: string;
}

export default function ProfileHeader({ name }: ProfileHeaderProps) {
  return (
    <div className="flex items-center gap-4">
      {/* Profile picture (avatar) */}
      <Image
        src="/avatar.jpg"
        width={100}
        height={100}
        alt="Profile"
        className="w-16 h-16 rounded-full object-cover"
      />
      {/* Greeting text */}
      <div>
        <p className="text-sm">
          Halo {name}, senang bisa bertemu dengan Anda.
        </p>
        <p className="text-sm">
          Apa kabar hari ini? Semoga selalu sehat ya, semangat!
        </p>
        <p className="text-sm">
          Yuk cek lagi kelengkapan data kamu :)
        </p>
      </div>
    </div>
  );
}
