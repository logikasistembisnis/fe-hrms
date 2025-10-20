"use client";

export default function Form4() {
    const companies = [
        {
            name: "PT. Kamu ada aja",
            items: [
                "Nama Perusahaan",
                "Direktorat",
                "Grup Divisi",
                "Divisi",
                "Grup Departemen",
                "Departemen",
                "Grup Unit Kerja",
                "Unit Kerja",
                "Pekerja Individu",
            ],
        },
        {
            name: "PT. Selalu di hati",
            items: [
                "Nama Perusahaan",
                "Direktorat",
                "Grup Divisi",
                "Divisi",
                "Grup Departemen",
                "Departemen",
                "Grup Unit Kerja",
                "Unit Kerja",
                "Pekerja Individu",
            ],
        },
        {
            name: "PT. Curahan isi kepala",
            items: [
                "Nama Perusahaan",
                "Direktorat",
                "Grup Divisi",
                "Divisi",
                "Grup Departemen",
                "Departemen",
                "Grup Unit Kerja",
                "Unit Kerja",
                "Pekerja Individu",
            ],
        },
    ];

    return (
        <div className="w-full mx-auto p-6">
            {/* Judul */}
            <h2 className="text-lg font-semibold mb-4">
                6. Selanjutnya, buatlah struktur organisasi dasar
            </h2>

            {/* Dropdown */}
            <div className="mb-6">
                <label className="block mb-2 text-sm font-medium text-gray-700">
                    Nama Perusahaan
                </label>
                <select className="border border-gray-300 rounded-md px-3 py-2 w-64 text-sm focus:ring-blue-500 focus:border-blue-500">
                    <option value="">Pilih Perusahaan</option>
                    {companies.map((c) => (
                        <option key={c.name}>{c.name}</option>
                    ))}
                </select>
            </div>

            {/* Daftar Perusahaan (3 kolom) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
                {companies.map((company) => (
                    <div key={company.name}>
                        <h3 className="font-semibold mb-2">{company.name}</h3>
                        <ul className="space-y-1">
                            {company.items.map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2">
                                    <span className="text-sm w-6">{idx + 1}.</span>
                                    <span className="text-sm flex-1">{item}</span>
                                    <input
                                        type="checkbox"
                                        defaultChecked={Math.random() > 0.3}
                                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {/* Catatan */}
            <p className="text-xs text-red-500 font-semibold mb-6">
                CHECKLIST INI AKAN BERPENGARUH KE SUB-MODUL JOB REPOSITORY
            </p>
        </div>
    );
}
