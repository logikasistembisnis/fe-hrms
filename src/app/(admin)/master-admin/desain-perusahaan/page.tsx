"use client";

import { useState } from "react";
import Form1 from "@/components/desainperusahaan/Form1";
import Form2 from "@/components/desainperusahaan/Form2";
import Form3 from "@/components/desainperusahaan/Form3";
import Form4 from "@/components/desainperusahaan/Form4";
import Form5 from "@/components/desainperusahaan/Form5";
import Form6 from "@/components/desainperusahaan/Form6";
import Form7 from "@/components/desainperusahaan/Form7";
import Form8 from "@/components/desainperusahaan/Form8";
import Form9 from "@/components/desainperusahaan/Form9";
import Form10 from "@/components/desainperusahaan/Form10";
import Form11 from "@/components/desainperusahaan/Form11";
import Form12 from "@/components/desainperusahaan/Form12";
import Form13 from "@/components/desainperusahaan/Form13";

import { Company, Country } from "@/types/data";

interface FormSubmitData {
    companies: Company[];
    localCompanies: Company[];
    countries: Country[];
}

export default function DesainPerusahaan() {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    // fungsi dipanggil dari Form1
    const handleFormSubmit = async ({
        companies,
        localCompanies,
        countries,
    }: FormSubmitData) => {
        try {
            setLoading(true);
            // Gabungan data local dan api
            const allCompanies = [...companies, ...localCompanies];

            // Ubah jadi array data untuk dikirim ke backend
            const payload = allCompanies.map((company) => {
                // Mencari objek negara berdasarkan nama untuk kirim countryid
                const countryObj = countries.find(
                    (ct) => ct.name === company.country?.name
                );
                // Data api ambil companyid, data baru bagian companyid dikosongkan
                return {
                    companyid: company.companyid > 0 ? company.companyid : undefined,
                    name: company.name,
                    countryid: countryObj ? countryObj.countryid : null,
                };
            });

            // kirim semuanya sekaligus (bukan satu per satu)
            const response = await fetch(`${apiUrl}/company`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload), // array
            });

            if (!response.ok) {
                const text = await response.text();
                console.error("Server error response:", text);
                throw new Error("Gagal menyimpan data perusahaan");
            }

            alert("Semua data perusahaan berhasil disimpan!");
            setStep(2);
        } catch (err: unknown) {
            console.error("Error:", err);
            const message =
                err instanceof Error ? err.message : "Terjadi kesalahan saat menyimpan data.";
            alert(`${message}`);
        }
        finally {
            setLoading(false);
        }
    };

    // Step 2: Simpan hasil edit Form2
    const handleForm2Submit = async (companies: Company[]) => {
        try {
            setLoading(true);

            const payload = companies.map((c) => ({
                companyid: c.companyid,
                name: c.name,
                brandname: c.brandname,
                entitytype: c.entitytype,
                noindukberusaha: c.noindukberusaha,
                npwp: c.npwp,
                address: c.address,
                telpno: c.telpno,
                companyemail: c.companyemail,
                logo: c.logo,
            }));

            const res = await fetch(`${apiUrl}/company`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            if (!res.ok) throw new Error("Gagal memperbarui data perusahaan");

            alert("Data berhasil diperbarui!");
            setStep(3);
        } catch (err: unknown) {
            alert(err instanceof Error ? err.message : "Terjadi kesalahan.");
        } finally {
            setLoading(false);
        }
    };


    return (
        <div>
            {step === 1 && <Form1 onSubmit={handleFormSubmit} loading={loading} />}
            {step === 2 && (<Form2 onSubmit={handleForm2Submit} loading={loading} onBack={() => setStep(1)}/>)}
            {step === 3 && (
                <>
                    <Form3 />
                    <div className="flex gap-4 justify-end mt-6">
                        <button
                            onClick={() => setStep(2)}
                            className="bg-green-100 hover:bg-green-300 text-sm text-gray-700 font-semibold py-2 px-6 rounded-full transition"
                        >
                            Kembali
                        </button>

                        <button
                            onClick={() => setStep(4)}
                            className="bg-green-500 hover:bg-green-700 text-sm text-white font-semibold py-2 px-6 rounded-full transition"
                        >
                            Simpan & Lanjut
                        </button>
                    </div>
                </>
            )}
            {step === 4 && (
                <>
                    <Form4 />
                    <div className="flex gap-4 justify-end mt-6">
                        <button
                            onClick={() => setStep(3)}
                            className="bg-green-100 hover:bg-green-300 text-sm text-gray-700 font-semibold py-2 px-6 rounded-full transition"
                        >
                            Kembali
                        </button>

                        <button
                            onClick={() => setStep(5)}
                            className="bg-green-500 hover:bg-green-700 text-sm text-white font-semibold py-2 px-6 rounded-full transition"
                        >
                            Simpan & Lanjut
                        </button>
                    </div>
                </>
            )}
            {step === 5 && (
                <>
                    <Form5 />
                    <div className="flex gap-4 justify-end mt-6">
                        <button
                            onClick={() => setStep(4)}
                            className="bg-green-100 hover:bg-green-300 text-sm text-gray-700 font-semibold py-2 px-6 rounded-full transition"
                        >
                            Kembali
                        </button>

                        <button
                            onClick={() => setStep(6)}
                            className="bg-green-500 hover:bg-green-700 text-sm text-white font-semibold py-2 px-6 rounded-full transition"
                        >
                            Simpan & Lanjut
                        </button>
                    </div>
                </>
            )}
            {step === 6 && (
                <>
                    <Form6 />
                    <div className="flex gap-4 justify-end mt-6">
                        <button
                            onClick={() => setStep(5)}
                            className="bg-green-100 hover:bg-green-300 text-sm text-gray-700 font-semibold py-2 px-6 rounded-full transition"
                        >
                            Kembali
                        </button>

                        <button
                            onClick={() => setStep(7)}
                            className="bg-green-500 hover:bg-green-700 text-sm text-white font-semibold py-2 px-6 rounded-full transition"
                        >
                            Simpan & Lanjut
                        </button>
                    </div>
                </>
            )}
            {step === 7 && (
                <>
                    <Form7 />
                    <div className="flex gap-4 justify-end mt-6">
                        <button
                            onClick={() => setStep(6)}
                            className="bg-green-100 hover:bg-green-300 text-sm text-gray-700 font-semibold py-2 px-6 rounded-full transition"
                        >
                            Kembali
                        </button>

                        <button
                            onClick={() => setStep(8)}
                            className="bg-green-500 hover:bg-green-700 text-sm text-white font-semibold py-2 px-6 rounded-full transition"
                        >
                            Simpan & Lanjut
                        </button>
                    </div>
                </>
            )}
            {step === 8 && (
                <>
                    <Form8 />
                    <div className="flex gap-4 justify-end mt-6">
                        <button
                            onClick={() => setStep(7)}
                            className="bg-green-100 hover:bg-green-300 text-sm text-gray-700 font-semibold py-2 px-6 rounded-full transition"
                        >
                            Kembali
                        </button>

                        <button
                            onClick={() => setStep(9)}
                            className="bg-green-500 hover:bg-green-700 text-sm text-white font-semibold py-2 px-6 rounded-full transition"
                        >
                            Simpan & Lanjut
                        </button>
                    </div>
                </>
            )}
            {step === 9 && (
                <>
                    <Form9 />
                    <div className="flex gap-4 justify-end mt-6">
                        <button
                            onClick={() => setStep(8)}
                            className="bg-green-100 hover:bg-green-300 text-sm text-gray-700 font-semibold py-2 px-6 rounded-full transition"
                        >
                            Kembali
                        </button>

                        <button
                            onClick={() => setStep(10)}
                            className="bg-green-500 hover:bg-green-700 text-sm text-white font-semibold py-2 px-6 rounded-full transition"
                        >
                            Simpan & Lanjut
                        </button>
                    </div>
                </>
            )}
            {step === 10 && (
                <>
                    <Form10 />
                    <div className="flex gap-4 justify-end mt-6">
                        <button
                            onClick={() => setStep(9)}
                            className="bg-green-100 hover:bg-green-300 text-sm text-gray-700 font-semibold py-2 px-6 rounded-full transition"
                        >
                            Kembali
                        </button>

                        <button
                            onClick={() => setStep(11)}
                            className="bg-green-500 hover:bg-green-700 text-sm text-white font-semibold py-2 px-6 rounded-full transition"
                        >
                            Simpan & Lanjut
                        </button>
                    </div>
                </>
            )}
            {step === 11 && (
                <>
                    <Form11 />
                    <div className="flex gap-4 justify-end mt-6">
                        <button
                            onClick={() => setStep(10)}
                            className="bg-green-100 hover:bg-green-300 text-sm text-gray-700 font-semibold py-2 px-6 rounded-full transition"
                        >
                            Kembali
                        </button>

                        <button
                            onClick={() => setStep(12)}
                            className="bg-green-500 hover:bg-green-700 text-sm text-white font-semibold py-2 px-6 rounded-full transition"
                        >
                            Simpan & Lanjut
                        </button>
                    </div>
                </>
            )}
            {step === 12 && (
                <>
                    <Form12 />
                    <div className="flex gap-4 justify-end mt-6">
                        <button
                            onClick={() => setStep(11)}
                            className="bg-green-100 hover:bg-green-300 text-sm text-gray-700 font-semibold py-2 px-6 rounded-full transition"
                        >
                            Kembali
                        </button>

                        <button
                            onClick={() => setStep(13)}
                            className="bg-green-500 hover:bg-green-700 text-sm text-white font-semibold py-2 px-6 rounded-full transition"
                        >
                            Simpan & Lanjut
                        </button>
                    </div>
                </>
            )}
            {step === 13 && (
                <>
                    <Form13 />
                    <div className="flex gap-4 justify-end mt-6">
                        <button
                            onClick={() => setStep(12)}
                            className="bg-green-100 hover:bg-green-300 text-sm text-gray-700 font-semibold py-2 px-6 rounded-full transition"
                        >
                            Kembali
                        </button>

                        <button
                            onClick={() => setStep(13)}
                            className="bg-green-500 hover:bg-green-700 text-sm text-white font-semibold py-2 px-6 rounded-full transition"
                        >
                            Kirim
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}