"use client";

import { useEffect, useRef } from "react";

export default function Form13() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Ambil semua button di kolom kiri
    const buttons = containerRef.current.querySelectorAll("button[data-label]");
    let maxWidth = 0;

    // Cari button dengan teks terpanjang
    buttons.forEach((btn) => {
      const width = (btn as HTMLElement).offsetWidth;
      if (width > maxWidth) maxWidth = width;
    });

    // Terapkan lebar terpanjang ke semua button
    buttons.forEach((btn) => {
      (btn as HTMLElement).style.width = `${maxWidth}px`;
    });
  }, []);

  const fields = [
    { label: "PERUSAHAAN", placeholder: "List Box" },
    { label: "JOB FAMILY", placeholder: "Free text" },
    { label: "NAMA POSISI", placeholder: "Free text" },
    { label: "SUB JOB FAMILY", placeholder: "Free text" },
    { label: "MELAPOR KEPADA", placeholder: "Free text" },
    {
      label: "KODE POSISI",
      value: "TER-GENERATE OTOMATIS JC0000001",
      disabled: true,
    },
    { label: "UNIT KERJA", placeholder: "List Box" },
    {
      label: "KODE KELOMPOK JABATAN",
      value: "TER-GENERATE OTOMATIS",
      disabled: true,
    },
    { label: "DEPARTEMEN", placeholder: "Free text" },
    {
      label: "KODE SUB-KELOMPOK JABATAN",
      value: "TER-GENERATE OTOMATIS",
      disabled: true,
    },
    { label: "DIVISI", placeholder: "Free text" },
    { label: "LOREM IPSUM", placeholder: "Free text" },
    { label: "DIREKTORAT", placeholder: "Free text" },
    { label: "LOREM IPSUM", placeholder: "Free text" },
  ];

  return (
    <div className="min-h-screen bg-white px-12 py-8">
      <h2 className="text-xl font-bold mb-6">13. JOB REPOSITORY - FORM</h2>

      <div ref={containerRef} className="grid grid-cols-2 gap-x-12 gap-y-4">
        {fields.map((field, index) => (
          <div key={index} className="flex items-center">
            <button
              data-label
              className="bg-[#0b2c66] text-white font-semibold text-sm px-4 py-2 rounded flex-shrink-0 text-center"
            >
              {field.label}
            </button>

            {field.disabled ? (
              <input
                type="text"
                value={field.value}
                disabled
                className="ml-2 w-full border border-gray-200 bg-gray-100 px-3 py-2 rounded text-gray-500"
              />
            ) : (
              <input
                type="text"
                placeholder={field.placeholder}
                className="ml-2 w-full border border-gray-200 bg-[#f5f9ff] px-3 py-2 rounded"
              />
            )}
          </div>
        ))}
      </div>

      {/* Tombol bawah */}
      <div className="flex items-center justify-start mt-8 gap-4">
        <button className="bg-green-500 text-white font-semibold text-xs px-4 py-2 rounded-full">
          SIMPAN SEBAGAI TEMPLATE
        </button>
        <button className="bg-blue-500 text-white font-semibold text-xs px-4 py-2 rounded-full">
          UPLOAD TEMPLATE
        </button>
      </div>
    </div>
  );
}
