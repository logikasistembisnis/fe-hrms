"use client";

export default function Form5() {
    const dropdownOptions = [
        "PT. Kamu ada aja",
        "PT. Selalu di hati",
        "PT. Curahan isi kepala",
    ];

    const columns = [
        {
            title: "Tipe Kontrak",
            items: [
                "Executive",
                "PKWT (Total)",
                "PKWT (Kontrak)",
                "Pekerja Harian Lepas",
                "Alih Daya",
                "PHL - Daily Worker",
                "PHL - Casual",
                "Probation",
                "Magang/Intern",
                "Trainee",
                "Praktik Kerja Lapangan",
            ],
            addButton: "Tambah Tipe",
        },
        {
            title: "Tipe Jadwal Kerja",
            items: ["Shift", "Non-Shift"],
            addButton: "Tambah Tipe Jadwal",
        },
        {
            title: "Tempat Kerja",
            items: [
                "Kantor (WFO)",
                "Rumah (WFH)",
                "Hybrid 4-1",
                "Hybrid 3-2",
                "Hybrid 2-3",
                "Hybrid 1-4",
            ],
            addButton: "Tambah Tipe",
        },
        {
            title: "Hari Kerja",
            items: ["5 hari kerja 2 hari libur", "6 hari kerja 1 hari libur"],
            addButton: "Tambah Tipe",
        },
        {
            title: "Sistem Penggajian",
            items: ["Bulanan", "Mingguan", "Harian", "Per Proyek"],
            addButton: "Tambah sistem penggajian",
        },
        {
            title: "Bahasa & Format Waktu",
            items: [
                "Indonesia",
                "English",
                "Zona Waktu (GMT +7)",
                "Tanggal (DD-MM-YYYY)",
            ],
        },
    ];

    return (
        <div className="w-full mx-auto p-6">
            {/* Judul */}
            <h2 className="text-lg font-semibold mb-4">
                7. Aturan Dasar HR
            </h2>

            {/* Dropdown */}
            <div className="mb-6">
                <select className="border border-gray-300 rounded-md px-3 py-2 w-64 text-sm focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Pilih Nama Perusahaan</option>
                    {dropdownOptions.map((opt) => (
                        <option key={opt}>{opt}</option>
                    ))}
                </select>
            </div>

            {/* Grid Kolom */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 text-sm">
                {columns.map((col) => (
                    <div key={col.title} className="flex flex-col">
                        <div className="bg-blue-900 text-white text-center font-semibold py-1 rounded-t-md">
                            {col.title}
                        </div>

                        <div className="border border-gray-300 rounded-b-md p-3 space-y-1 h-full">
                            {col.items.map((item, idx) => (
                                <label key={idx} className="flex items-center justify-between">
                                    <span>{item}</span>
                                    <input
                                        type="checkbox"
                                        defaultChecked={Math.random() > 0.3}
                                        className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                                    />
                                </label>
                            ))}

                            {col.addButton && (
                                <button className="flex items-center justify-center gap-1 text-blue-600 text-xs mt-2 border border-blue-300 rounded py-1 hover:bg-blue-50">
                                    {col.addButton} <span className="font-bold">+</span>
                                </button>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
