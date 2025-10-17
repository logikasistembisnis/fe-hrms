"use client";
import { useState, useEffect } from "react";
import CircleProgress from "./CircleProgress";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../attendance/calender-custom.css";

// Define the expected props for this component
interface CutiIjinCardProps {
    type: "cuti" | "ijin";
}

export default function CutiIjinCard({ type }: CutiIjinCardProps) {
    // Define the state for the selected date and list of cuti and ijin options
    const isCuti = type === "cuti";
    // menu cuti & ijin
    const cutiList = [
        "CUTI TAHUNAN",
        "CUTI SAKIT TANPA SURAT DOKTER",
        "CUTI SAKIT DENGAN SURAT DOKTER",
        "CUTI MENIKAH",
        "CUTI ANAK KANDUNG MENIKAH",
        "CUTI KHITANAN ANAK",
        "CUTI ORANG TUA MENINGGAL",
        "CUTI PASANGAN MENINGGAL",
        "CUTI ANAK MENINGGAL",
        "CUTI ORANG SERUMAH MENINGGAL",
        "CUTI HAID HARI PERTAMA",
        "CUTI IBADAH HAJI",
        "CUTI BESAR",
        "CUTI BERSAMA",
        "CUTI SETENGAH HARI",
        "CUTI BELAJAR",
    ];

    const ijinList = [
        "IJIN DATANG TERLAMBAT",
        "IJIN MENIKAHKAN ANAK",
        "IJIN KEGUGURAN",
        "IJIN MEMBAPTISKAN ANAK",
        "IJIN TUGAS NEGARA",
    ];

    // get list
    const list = isCuti ? cutiList : ijinList;
    //  default selected first item
    const [selectedItem, setSelectedItem] = useState<string>(list[0]);
    // get start date dan end date
    const [selectedRange, setSelectedRange] = useState<[Date | null, Date | null]>([
        null,
        null,
    ]);

    // reset selected item & date
    useEffect(() => {
        setSelectedItem(list[0]);
        setSelectedRange([null, null]);
    }, [type]);

    return (
        <div className="mt-5 flex justify-between items-start p-6">
            {/* Column 1 */}
            <div className="flex flex-col items-center w-1/4">
                <h3 className="font-bold mb-2">
                    {isCuti ? "SISA CUTI KAMU" : "JUMLAH IJIN KAMU"}
                </h3>
                <p className="font-bold text-lg">{isCuti ? "7/10" : "7/22"}</p>
                <CircleProgress percentage={isCuti ? 70 : 30} />
                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
                    {isCuti ? "AJUKAN CUTI" : "AJUKAN IJIN"}
                </button>
            </div>

            {/* Column 2 */}
            <div className="w-1/4">
                <h3 className="font-bold mb-2">{isCuti ? "CUTI" : "IJIN"}</h3>
                <div className="max-h-40 overflow-y-auto text-sm space-y-1">
                    {(isCuti ? cutiList : ijinList).map((item) => (
                        <p
                            key={item}
                            onClick={() => setSelectedItem(item)}
                            className={`cursor-pointer ${selectedItem === item
                                ? "text-black font-semibold"
                                : "text-gray-700"
                                }`}
                        >
                            {item}
                        </p>
                    ))}
                </div>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col items-center w-1/4">
                <h3 className="font-bold mb-2">TANGGAL</h3>
                <div className="shadow-md">
                    <Calendar
                        onChange={(value) => setSelectedRange(value as [Date, Date])}
                        value={selectedRange}
                        selectRange={true}
                        locale="id-ID"
                        className="custom-calendar"
                    />
                </div>
                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
                    KIRIM PENGAJUAN
                </button>
            </div>

            {/* Column 4 */}
            <div className="flex flex-col items-center w-1/4">
                <h3 className="font-bold mb-2">DOKUMEN</h3>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">
                    UPLOAD PDF OR JPG
                </button>
            </div>
        </div>
    );
}
