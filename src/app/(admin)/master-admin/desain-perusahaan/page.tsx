"use client";

import { useState } from "react";
import FormPerusahaan from "@/components/desainperusahaan/FormPerusahaan";
import FormDetailPerusahaan from "@/components/desainperusahaan/FormDetailPerusahaan";
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

import { Company, Country } from "@/api/data";
import { saveCompany } from "@/api/companyApi";

interface FormSubmitData {
    companies: Company[];
    localCompanies: Company[];
    countries: Country[];
}

export default function DesainPerusahaan() {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);

    const handleFormSubmit = async ({
        companies,
        localCompanies,
        countries,
    }: FormSubmitData) => {
        try {
            setLoading(true);

            // Gabungkan data dari API dan lokal
            const allCompanies = [...companies, ...localCompanies];

            // Siapkan payload array
            const payload = allCompanies.map((company) => {
                const countryObj = countries.find(
                    (ct) => ct.name === company.country?.name
                );

                return {
                    companyid: company.companyid > 0 ? company.companyid : undefined,
                    name: company.name,
                    countryid: countryObj?.countryid ?? null,
                };
            });

            console.log("Payload dikirim ke backend:", payload);

            //  Kirim sekali ke PUT /company
            const response = await saveCompany(payload);

            console.log("Response dari backend:", response);

            alert("Semua data perusahaan berhasil disimpan!");
            setStep(2);
        } catch (err: unknown) {
            console.error("Error:", err);
            const message =
                err instanceof Error ? err.message : "Terjadi kesalahan saat menyimpan data.";
            alert(message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {step === 1 && <FormPerusahaan onSubmit={handleFormSubmit} loading={loading} />}
            {step === 2 && (
                <FormDetailPerusahaan
                    onNextStep={() => setStep(3)}
                    onBack={() => setStep(1)}
                />
            )}
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