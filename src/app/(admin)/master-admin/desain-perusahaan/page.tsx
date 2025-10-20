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

export default function DesainPerusahaan() {
    const [step, setStep] = useState(1);

    return (
        <div>
            {step === 1 && (
                <>
                    <Form1 />
                    <div className="flex justify-end mt-6">
                        <button
                            onClick={() => setStep(2)}
                            className="bg-green-500 hover:bg-green-700 text-sm text-white font-semibold py-2 px-6 rounded-full transition"
                        >
                            Simpan & Lanjut
                        </button>
                    </div>
                </>
            )}
            {step === 2 && (
                <>
                    <Form2 />
                    <div className="flex gap-4 justify-end mt-6">
                        <button
                            onClick={() => setStep(1)}
                            className="bg-green-100 hover:bg-green-300 text-sm text-gray-700 font-semibold py-2 px-6 rounded-full transition"
                        >
                            Kembali
                        </button>

                        <button
                            onClick={() => setStep(3)}
                            className="bg-green-500 hover:bg-green-700 text-sm text-white font-semibold py-2 px-6 rounded-full transition"
                        >
                            Simpan & Lanjut
                        </button>
                    </div>
                </>
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