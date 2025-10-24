"use client";

import { useState, useEffect } from "react";
import { getCompanies } from "@/api/companyApi";
import { getCompanyDesign } from "@/api/companydesignApi";
import { Company, CompanyDesign } from "@/api/data";

type DesignType =
  | ""
  | "Super Holding"
  | "Holding"
  | "Country Operation"
  | "Subsidiary"
  | "Stand Alone";

interface DesignCompany extends Company {
  design: DesignType;
  reportTo: string;
}

export default function FormCompanyDesign() {
  const [companies, setCompanies] = useState<DesignCompany[]>([]);
  const [companyDesign, setCompanyDesign] = useState<CompanyDesign[]>([]);
  const [loading, setLoading] = useState(true);

  // Ambil data perusahaan dan desain dari API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resCompanies, resDesigns] = await Promise.all([
          getCompanies(),
          getCompanyDesign(),
        ]);

        const apiCompanies = resCompanies.data.map((c) => ({
          ...c,
          design: "" as DesignType,
          reportTo: "",
        }));

        setCompanies(apiCompanies);
        setCompanyDesign(resDesigns.data);
      } catch (err) {
        console.error("Gagal memuat data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle perubahan input
  const handleChange = (
    index: number,
    field: keyof DesignCompany,
    value: string
  ) => {
    const updated = [...companies];
    updated[index] = { ...updated[index], [field]: value };

    // Jika ubah design → reset reportTo
    if (field === "design") {
      updated[index].reportTo = "";
    }

    setCompanies(updated);
  };

  // Tentukan opsi "melapor ke" berdasarkan design perusahaan
  const getReportToOptions = (currentDesign: DesignType) => {
    switch (currentDesign) {
      case "Super Holding":
      case "Stand Alone":
        return []; // tidak perlu melapor ke siapa pun
      case "Holding":
        return companies.filter((c) => c.design === "Super Holding");
      case "Country Operation":
        return companies.filter(
          (c) => c.design === "Super Holding" || c.design === "Holding"
        );
      case "Subsidiary":
        return companies.filter(
          (c) =>
            c.design === "Super Holding" ||
            c.design === "Holding" ||
            c.design === "Country Operation"
        );
      default:
        return [];
    }
  };

  // Fungsi untuk menggambar struktur hubungan perusahaan
  const renderDiagram = () => {
    const superHolding = companies.find((c) => c.design === "Super Holding");
    if (!superHolding) return null;

    const holdings = companies.filter(
      (c) => c.design === "Holding" && c.reportTo === superHolding.name
    );

    const countryOps = companies.filter(
      (c) =>
        c.design === "Country Operation" &&
        (c.reportTo === superHolding.name ||
          holdings.some((h) => c.reportTo === h.name))
    );

    const subsidiaries = companies.filter(
      (c) =>
        c.design === "Subsidiary" &&
        (c.reportTo === superHolding.name ||
          holdings.some((h) => c.reportTo === h.name) ||
          countryOps.some((co) => c.reportTo === co.name))
    );

    const standAlones = companies.filter((c) => c.design === "Stand Alone");

    return (
      <div className="flex flex-col items-center mt-10 relative">
        {/* Super Holding */}
        <div className="flex flex-col items-center">
          <div className="border border-gray-300 rounded-md px-4 py-2 bg-blue-100 font-medium shadow-sm">
            {superHolding.name}
          </div>
          <p className="text-gray-400 text-xs italic mt-1">Super Holding</p>
        </div>

        {/* Hubungkan ke Holding */}
        {holdings.length > 0 && <div className="w-0.5 h-6 bg-gray-400"></div>}

        {/* Holding Layer */}
        {holdings.length > 0 && (
          <div className="flex flex-col items-center">
            <div className="flex justify-center gap-6">
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

        {/* Country Operation Layer */}
        {countryOps.length > 0 && (
          <>
            <div className="w-0.5 h-6 bg-gray-400"></div>
            <div className="flex flex-col items-center">
              <div className="flex justify-center gap-6 flex-wrap">
                {countryOps.map((c) => (
                  <div
                    key={c.name}
                    className="border border-gray-300 rounded-md px-4 py-2 bg-yellow-50 text-xs shadow-sm"
                  >
                    {c.name}
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-xs italic mt-2">
                Country Operation
              </p>
            </div>
          </>
        )}

        {/* Subsidiary Layer */}
        {subsidiaries.length > 0 && (
          <>
            <div className="w-0.5 h-6 bg-gray-400"></div>
            <div className="flex flex-col items-center">
              <div className="flex justify-center gap-6 flex-wrap">
                {subsidiaries.map((s) => (
                  <div
                    key={s.name}
                    className="border border-gray-300 rounded-md px-4 py-2 bg-green-50 text-xs shadow-sm"
                  >
                    {s.name}
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-xs italic mt-2">Subsidiary</p>
            </div>
          </>
        )}

        {/* Stand Alone */}
        {standAlones.length > 0 && (
          <>
            <div className="w-0.5 h-6 bg-gray-400"></div>
            <div className="flex flex-col items-center">
              <div className="flex justify-center gap-6 flex-wrap">
                {standAlones.map((s) => (
                  <div
                    key={s.name}
                    className="border border-gray-300 rounded-md px-4 py-2 bg-gray-100 text-xs shadow-sm"
                  >
                    {s.name}
                  </div>
                ))}
              </div>
              <p className="text-gray-400 text-xs italic mt-2">Stand Alone</p>
            </div>
          </>
        )}
      </div>
    );
  };

  if (loading) return <p className="p-6 text-gray-600">Memuat data...</p>;

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
      {companies.map((company, index) => {
        const reportOptions = getReportToOptions(company.design);
        const isReportToDisabled =
          company.design === "Super Holding" ||
          company.design === "Stand Alone" ||
          reportOptions.length === 0;

        return (
          <div
            key={index}
            className="grid grid-cols-4 border-x border-b border-gray-300 text-sm"
          >
            <div className="p-2 border-r border-gray-300">{company.name}</div>
            <div className="p-2 border-r border-gray-300">
              {company.country?.name || ""}
            </div>

            {/* Dropdown Design */}
            <div className="p-2 border-r border-gray-300">
              <select
                value={company.design}
                onChange={(e) =>
                  handleChange(index, "design", e.target.value)
                }
                className="w-full border border-gray-300 rounded-md p-1 bg-blue-50 focus:ring-2 focus:ring-blue-400"
              >
                <option value="">— Pilih —</option>
                {companyDesign.map((opt) => (
                  <option key={opt.companydesignid} value={opt.name}>
                    {opt.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Dropdown ReportTo */}
            <div className="p-2">
              <select
                value={company.reportTo}
                onChange={(e) =>
                  handleChange(index, "reportTo", e.target.value)
                }
                disabled={isReportToDisabled}
                className={`w-full border border-gray-300 rounded-md p-1 ${
                  isReportToDisabled
                    ? "bg-gray-100 text-gray-400"
                    : "bg-blue-50 focus:ring-2 focus:ring-blue-400"
                }`}
              >
                <option value="">—</option>
                {reportOptions.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        );
      })}

      {/* Diagram */}
      {renderDiagram()}
    </div>
  );
}