"use client";
import Image from "next/image";

interface MenuCardProps {
    title: string;
    imageSrc: string;
    path: string;
    onClick: () => void;
}

export function MenuCard({ title, imageSrc, onClick }: MenuCardProps) {
    return (
        <div
            onClick={onClick}
            className="flex flex-col items-center justify-center w-40 h-40 border border-blue-200 rounded-lg bg-[#eef8ff] cursor-pointer hover:shadow-md hover:border-blue-400 transition-all duration-200 p-3"
        >
            {/* Image */}
            <div className="relative w-32 h-24 mb-3">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-contain"
                />
            </div>

            {/* Text */}
            <span className="text-sm font-medium text-gray-700 text-center">
                {title}
            </span>
        </div>
    );
}