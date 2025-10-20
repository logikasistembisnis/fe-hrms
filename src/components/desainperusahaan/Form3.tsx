"use client";

import { useState } from "react";

type DesignType =
  | ""
  | "Super Holding"
  | "Holding"
  | "Country operation"
  | "Subsidiary"
  | "Stand Alone";

interface Company {
  name: string;
  country: string;
  design: DesignType;
  reportTo: string;
}

export default function Form3() {
  const [companies, setCompanies] = useState<Company[]>([
    { name: "PT. Kamu ada aja", country: "Indonesia", design: "", reportTo: "" },
    { name: "PT. Selalu di hati", country: "Singapore", design: "", reportTo: "" },
    { name: "PT. Selalu di hati Korea", country: "Korea", design: "", reportTo: "" },
    { name: "PT. Selalu di hati Malaysia", country: "Malaysia", design: "", reportTo: "" },
    { name: "PT. Curahan isi kepala", country: "China", design: "", reportTo: "" },
    { name: "PT. XYZ", country: "Indonesia", design: "", reportTo: "" },
  ]);

  const designOptions: DesignType[] = [
    "",
    "Super Holding",
    "Holding",
    "Country operation",
    "Subsidiary",
    "Stand Alone",
  ];

  const handleChange = (
    index: number,
    field: keyof Company,
    value: string
  ) => {
    const updated = [...companies];
    updated[index] = { ...updated[index], [field]: value };
    setCompanies(updated);
  };

  const renderDiagram = () => {
    // ambil super holding
    const superHolding = companies.find((c) => c.design === "Super Holding");
    if (!superHolding) return null;

    // ambil semua holding yang melapor ke super holding
    const holdings = companies.filter(
      (c) => c.design === "Holding" && c.reportTo === superHolding.name
    );

    // ambil semua subsidiary & country operation
    const lowerLayer = companies.filter(
      (c) =>
        (c.design === "Subsidiary" || c.design === "Country operation") &&
        holdings.some((h) => c.reportTo === h.name)
    );

    // ambil stand alone
    const standAlones = companies.filter((c) => c.design === "Stand Alone");

    return (
      <div className="flex flex-col items-center mt-10 relative">
        {/* Super Holding */}
        <div className="flex flex-col items-center">
          <div className="border border-gray-300 rounded-md px-4 py-2 bg-blue-50 font-medium shadow-sm">
            {superHolding.name}
          </div>
          <p className="text-gray-400 text-xs italic mt-1">Super Holding</p>
        </div>

        {/* Hubungkan ke Holding */}
        {holdings.length > 0 && <div className="w-0.5 h-8 bg-gray-400"></div>}

        {/* Holding Layer */}
        {holdings.length > 0 && (
          <div className="flex flex-col items-center relative">
            <div className="flex justify-center gap-8">
              {holdings.map((h) => (
                <div
                  key={h.name}
                  className="border border-gray-300 rounded-md px-4 py-2 bg-blue-50 font-medium shadow-sm"
                >
                  {h.name}
                </div>
              ))}
            </div>
            <p className="text-gray-400 text-xs italic mt-2">Holding</p>
          </div>
        )}

        {/* Subsidiary & Country operation */}
        {(lowerLayer.length > 0 || standAlones.length > 0) && (
          <>
            <div className="w-0.5 h-10 bg-gray-400"></div>
            <div className="relative flex justify-center flex-wrap gap-6 mt-4">
              {lowerLayer.map((s) => (
                <div key={s.name} className="flex flex-col items-center">
                  <div className="border border-gray-300 rounded-md px-4 py-2 bg-blue-50 text-xs shadow-sm">
                    {s.name}
                  </div>
                  <p className="text-gray-400 text-[10px] mt-1">
                    {s.design}
                  </p>
                </div>
              ))}

              {/* Stand Alone */}
              {standAlones.map((s) => (
                <div key={s.name} className="flex flex-col items-center">
                  <div className="border border-gray-300 rounded-md px-4 py-2 bg-green-50 text-xs shadow-sm">
                    {s.name}
                  </div>
                  <p className="text-gray-400 text-[10px] mt-1">Stand Alone</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="p-6 w-full mx-auto">
      <h3 className="text-lg font-semibold mb-4">
        5. Masukan informasi group perusahaan
      </h3>

      {/* Header */}
      <div className="grid grid-cols-4 font-semibold text-sm bg-gray-100 border border-gray-300 rounded-t-md">
        <div className="p-2 border-r border-gray-300">Nama Perusahaan</div>
        <div className="p-2 border-r border-gray-300">Negara</div>
        <div className="p-2 border-r border-gray-300">Desain Perusahaan</div>
        <div className="p-2">Melapor Ke</div>
      </div>

      {/* Rows */}
      {companies.map((company, index) => (
        <div key={index} className="grid grid-cols-4 border-x border-b border-gray-300 text-sm">
          <div className="p-2 border-r border-gray-300">{company.name}</div>
          <div className="p-2 border-r border-gray-300">{company.country}</div>

          {/* Dropdown design */}
          <div className="p-2 border-r border-gray-300">
            <select
              value={company.design}
              onChange={(e) => handleChange(index, "design", e.target.value)}
              className="w-full border border-gray-300 rounded-md p-1 bg-blue-50 focus:ring-2 focus:ring-blue-400"
            >
              {designOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt || "— Pilih —"}
                </option>
              ))}
            </select>
          </div>

          {/* Dropdown reportTo */}
          <div className="p-2">
            <select
              value={company.reportTo}
              onChange={(e) => handleChange(index, "reportTo", e.target.value)}
              className="w-full border border-gray-300 rounded-md p-1 bg-blue-50 focus:ring-2 focus:ring-blue-400"
            >
              <option value="">—</option>
              {companies.map((c) => (
                <option key={c.name} value={c.name}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      ))}

      {/* Diagram dinamis */}
      {renderDiagram()}
    </div>
  );
}
