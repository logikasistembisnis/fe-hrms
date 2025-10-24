"use client";

import { useState, useEffect } from "react";
import { Company } from "@/types/data";

interface Form2Props {
    onSubmit: (companies: Company[]) => Promise<void>;
    loading: boolean;
    onBack: () => void;
}

export default function Form2({ onSubmit, loading, onBack }: Form2Props) {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [selectedCompanyId, setSelectedCompanyId] = useState<number | null>(null);
    const [selectedData, setSelectedData] = useState<Company | null>(null);
    const [dataloading, setDataLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    useEffect(() => {
        localStorage.clear();
    }, []);

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const res = await fetch(`${apiUrl}/company`);
                if (!res.ok) throw new Error("Gagal memuat data perusahaan");
                const data = await res.json();
                setCompanies(data.data || []);
            } catch (err: unknown) {
                if (err instanceof Error) setError(err.message);
                else setError("Terjadi kesalahan saat memuat data perusahaan");
            } finally {
                setDataLoading(false);
            }
        };

        fetchCompanies();
    }, [apiUrl]);

    //Saat memilih perusahaan dari dropdown ---
    useEffect(() => {
        if (selectedCompanyId !== null) {
            // Cek di localStorage dulu
            const localData = localStorage.getItem(`company_${selectedCompanyId}`);
            if (localData) {
                setSelectedData(JSON.parse(localData));
            } else {
                // Kalau belum ada di localStorage, ambil dari backend data perusahaan yang sudah di-load
                const company = companies.find((c) => c.companyid === selectedCompanyId);
                setSelectedData(company || null);
            }
        }
    }, [selectedCompanyId, companies]);

    // --- Simpan setiap kali data berubah ke localStorage ---
    useEffect(() => {
        if (selectedCompanyId && selectedData) {
            localStorage.setItem(`company_${selectedCompanyId}`, JSON.stringify(selectedData));
        }
    }, [selectedData, selectedCompanyId]);

    // --- Handler untuk perubahan input ---
    const handleChange = (field: keyof Company, value: string) => {
        if (selectedData) {
            setSelectedData({ ...selectedData, [field]: value });
        }
    };

    // --- Saat klik tombol Simpan & Lanjut (parent handle) ---
    const handleSubmit = async () => {
        // Ambil semua data dari localStorage (karena mungkin edit lebih dari 1 perusahaan)
        const localCompanies: Company[] = companies.map((c) => {
            const localData = localStorage.getItem(`company_${c.companyid}`);
            return localData ? JSON.parse(localData) : c;
        });

        await onSubmit(localCompanies);
    };

    if (dataloading)
        return <p className="p-6 text-gray-600">Memuat daftar perusahaan...</p>;
    if (error)
        return <p className="p-6 text-red-500">Error: {error}</p>;

    return (
        <div className="p-6 w-full mx-auto">
            <h3 className="text-lg font-semibold mb-4">
                3. Masukan informasi sebagai berikut
            </h3>

            <form className="space-y-3">
                {/* Baris 1 */}
                <div className="grid grid-cols-3 items-center gap-4">
                    <label className="font-medium text-sm">
                        Nama Legal Perusahaan
                    </label>
                    <select
                        className="col-span-2 border border-gray-300 rounded-md p-2 bg-blue-50 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                        value={selectedCompanyId ?? ""}
                        onChange={(e) =>
                            setSelectedCompanyId(
                                e.target.value ? Number(e.target.value) : null
                            )
                        }
                    >
                        <option value="">Pilih Perusahaan</option>
                        {companies.map((company) => (
                            <option key={company.companyid} value={company.companyid}>
                                {company.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Baris 2 */}
                <div className="grid grid-cols-3 items-center gap-4">
                    <label className="font-medium text-sm">Terdaftar di Negara</label>
                    <input
                        type="text"
                        value={selectedData?.country?.name ?? ""}
                        readOnly
                        className="col-span-2 border border-gray-300 rounded-md p-2 bg-gray-200 w-full cursor-not-allowed"
                    />
                </div>

                {/* Baris 3 */}
                <div className="grid grid-cols-3 items-center gap-4">
                    <label className="font-medium text-sm">
                        Nama Brand/Komersial (jika berbeda)
                    </label>
                    <input
                        type="text"
                        value={selectedData?.brandname ?? ""}
                        onChange={(e) => handleChange("brandname", e.target.value)}
                        placeholder="Text"
                        className="col-span-2 border border-gray-300 rounded-md p-2 bg-blue-50 w-full focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Baris 4 */}
                <div className="grid grid-cols-3 items-center gap-4">
                    <label className="font-medium text-sm">
                        Tipe Entitas Hukum (PT, CV, Yayasan, dll.)
                    </label>
                    <input
                        type="text"
                        value={selectedData?.entitytype ?? ""}
                        onChange={(e) => handleChange("entitytype", e.target.value)}
                        placeholder="Text"
                        className="col-span-2 border border-gray-300 rounded-md p-2 bg-blue-50 w-full focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Baris 5 */}
                <div className="grid grid-cols-3 items-center gap-4">
                    <label className="font-medium text-sm">
                        Nomor Induk Berusaha (NIB)
                    </label>
                    <input
                        type="number"
                        value={selectedData?.noindukberusaha ?? ""}
                        onChange={(e) => handleChange("noindukberusaha", e.target.value)}
                        placeholder="number"
                        className="col-span-2 border border-gray-300 rounded-md p-2 bg-blue-50 w-full focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Baris 6 */}
                <div className="grid grid-cols-3 items-center gap-4">
                    <label className="font-medium text-sm">NPWP Perusahaan</label>
                    <input
                        type="number"
                        value={selectedData?.npwp ?? ""}
                        onChange={(e) => handleChange("npwp", e.target.value)}
                        placeholder="number"
                        className="col-span-2 border border-gray-300 rounded-md p-2 bg-blue-50 w-full focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Baris 7 */}
                <div className="grid grid-cols-3 items-center gap-4">
                    <label className="font-medium text-sm">Alamat Kantor Pusat</label>
                    <input
                        type="text"
                        value={selectedData?.address ?? ""}
                        onChange={(e) => handleChange("address", e.target.value)}
                        placeholder="Text"
                        className="col-span-2 border border-gray-300 rounded-md p-2 bg-blue-50 w-full focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Baris 8 */}
                <div className="grid grid-cols-3 items-center gap-4">
                    <label className="font-medium text-sm">
                        Nomor Telepon & Email Resmi
                    </label>
                    <div className="col-span-2 flex gap-3">
                        <input
                            type="number"
                            value={selectedData?.telpno ?? ""}
                            onChange={(e) => handleChange("telpno", e.target.value)}
                            placeholder="Nomor Telepon"
                            className="w-1/2 border border-gray-300 rounded-md p-2 bg-blue-50 focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="email"
                            value={selectedData?.companyemail ?? ""}
                            onChange={(e) => handleChange("companyemail", e.target.value)}
                            placeholder="Email Perusahaan"
                            className="w-1/2 border border-gray-300 rounded-md p-2 bg-blue-50 focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                </div>

                {/* Baris 9 */}
                <div className="grid grid-cols-3 items-center gap-4">
                    <label className="font-medium text-sm">Logo</label>
                    <div className="col-span-2 flex items-center gap-3">
                        {selectedData?.logo ? (
                            <span className="text-sm text-gray-700">
                                {selectedData.logo}
                            </span>
                        ) : (
                            <></>
                        )}

                        <input
                            type="file"
                            id="logo"
                            className="hidden"
                            onChange={(e) =>
                                handleChange("logo", e.target.files?.[0]?.name ?? "")
                            }
                        />
                        <label
                            htmlFor="logo"
                            className="px-4 py-2 border border-gray-300 rounded-md bg-blue-50 hover:bg-blue-100 cursor-pointer"
                        >
                            Upload +
                        </label>
                    </div>
                </div>
            </form>

            <div className="flex justify-end gap-4 mt-6">
                <button
                    type="button"
                    onClick={onBack}
                    className="bg-gray-200 hover:bg-gray-300 text-sm text-gray-700 font-semibold py-2 px-6 rounded-full transition"
                    disabled={loading}
                >
                    Kembali
                </button>
                <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={loading}
                    className={`bg-green-500 hover:bg-green-700 text-sm text-white font-semibold py-2 px-6 rounded-full transition ${loading ? "opacity-70 cursor-not-allowed" : ""
                        }`}
                >
                    {loading ? "Menyimpan..." : "Simpan & Lanjut"}
                </button>
            </div>
        </div>
    );
}
