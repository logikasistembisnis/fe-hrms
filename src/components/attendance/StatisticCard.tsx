"use client";

interface StatisticCardProps {
    title: string;
    value: string;
    percentage: number;
    color?: string;
    highlight?: boolean;
}

export default function StatisticCard({
    title,
    value,
    percentage,
    color = "#3B82F6",
    highlight = false,
}: StatisticCardProps) {
    const radius = 32;
    const circumference = 2 * Math.PI * radius;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
        <div className="flex flex-col items-center justify-center text-center space-y-2">
            {/* Judul */}
            <p
                className={`text-sm font-bold uppercase tracking-wide ${highlight ? "text-red-500" : "text-gray-600"
                    }`}
            >
                {title}
            </p>

            {/* Nilai */}
            <p className={`text-sm font-bold ${highlight ? "text-red-500" : "text-black"}`}>{value}</p>

            {/* Diagram */}
            <div className="relative w-28 h-28">
                <svg
                    className="w-full h-full transform -rotate-90"
                    viewBox="0 0 80 80"
                >
                    <circle
                        className="text-gray-300"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r={radius}
                        cx="40"
                        cy="40"
                    />
                    <circle
                        stroke={color}
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        fill="transparent"
                        r={radius}
                        cx="40"
                        cy="40"
                    />
                </svg>

                {/* Persentase */}
                <span className={`absolute inset-0 flex items-center justify-center text-lg font-bold ${highlight ? "text-red-500" : "text-blue-600"
                    }`}>
                    {percentage}%
                </span>
            </div>
        </div>
    );
}