"use client";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

interface CardMenuProps {
    title: string;
    imageSrc: string;
    path: string;
    onClick?: () => void;
}

export function CardMenu({ title, imageSrc, onClick }: CardMenuProps) {
    return (
        <div
            onClick={onClick}
            className="bg-[#eef8ff] hover:bg-gray-400 rounded-2xl shadow-md p-5 flex flex-col items-center hover:shadow-lg transition duration-300">
            <div className="relative w-full h-40 rounded-lg overflow-hidden">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover"
                    quality={100}
                />
            </div>
            <button className="mt-4 w-full bg-white text-blue-600 font-semibold text-sm py-2 rounded-full flex items-center justify-center relative border-2 border-gray-400">
                <span>{title}</span>
                <span className="absolute right-3 bg-gray-400 rounded-full p-1 flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-white" />
                </span>
            </button>
        </div>
    )
}