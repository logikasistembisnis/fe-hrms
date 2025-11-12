"use client";

import { useState } from "react";
import FormCompany from "@/components/desainperusahaan/FormCompany";
import FormCompanyDetails from "@/components/desainperusahaan/FormCompanyDetails";
import FormCompanyDesign from "@/components/desainperusahaan/FormCompanyDesign";
import FormCompanyBaseOrgStruc from "@/components/desainperusahaan/FormCompanyBaseOrgStruc";
import FormHRRule from "@/components/desainperusahaan/FormHRRule";
import FormCutiIzin from "@/components/desainperusahaan/FormCutiIzin";
import FormHariLibur from "@/components/desainperusahaan/FormHariLibur";
import Form8 from "@/components/desainperusahaan/Form8";
import Form9 from "@/components/desainperusahaan/Form9";
import Form10 from "@/components/desainperusahaan/Form10";
import Form11 from "@/components/desainperusahaan/Form11";
import Form12 from "@/components/desainperusahaan/Form12";
import Form13 from "@/components/desainperusahaan/Form13";

export default function DesainPerusahaan() {
    const [step, setStep] = useState(1);

    return (
        <div>
            {step === 1 && (<FormCompany onNextStep={() => setStep(2)} />)}
            {step === 2 && (
                <FormCompanyDetails
                    onNextStep={() => setStep(3)}
                    onBack={() => setStep(1)}
                />
            )}
            {step === 3 && (
                <>
                    <FormCompanyDesign
                        onNextStep={() => setStep(4)}
                        onBack={() => setStep(2)}
                    />
                </>
            )}
            {step === 4 && (
                <FormCompanyBaseOrgStruc
                    onNextStep={() => setStep(5)}
                    onBack={() => setStep(3)}
                />
            )}
            {step === 5 && (
                <>
                    <FormHRRule
                        onNextStep={() => setStep(6)}
                        onBack={() => setStep(4)}
                    />
                </>
            )}
            {step === 6 && (
                <>
                    <FormCutiIzin
                        onNextStep={() => setStep(7)}
                        onBack={() => setStep(5)}
                    />
                </>
            )}
            {step === 7 && (
                <>
                    <FormHariLibur 
                        onNextStep={() => setStep(8)}
                        onBack={() => setStep(6)}
                    />
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