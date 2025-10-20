"use client";

import { useState } from "react";
import { Plus, Check, X } from "lucide-react";

export default function Form1() {
  const [companies, setCompanies] = useState([
    { id: 1, name: "PT. Kamu ada saja", country: "Indonesia" },
    { id: 2, name: "PT. Selalu di hati", country: "Singapore" },
    { id: 3, name: "PT. Curahan isi kepala", country: "China" },
  ]);

  const countries = ["Indonesia", "Singapore", "Korea", "Malaysia", "China"];

  const addCompany = () => {
    setCompanies([
      ...companies,
      { id: companies.length + 1, name: "", country: "" },
    ]);
  };

  const deleteCompany = (id: number) => {
    setCompanies(companies.filter((c) => c.id !== id));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
      {/* BAGIAN KIRI */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Informasi Perusahaan</h2>
        <p className="font-medium text-lg mb-3">
          1. Sebutkan nama perusahaan dan negara tempat beroperasi
        </p>

        {/* Tombol Tambah */}
        <button
          onClick={addCompany}
          className="flex items-center gap-2 mb-4 px-4 py-2 bg-[#0c356a] text-white rounded-full cursor-pointer"
        >
          Tambah
        </button>

        {/* Daftar Perusahaan */}
        <div className="space-y-3">
          {companies.map((company, index) => (
            <div
              key={company.id}
              className="flex flex-wrap items-center gap-2 p-3 rounded-lg bg-gray-100"
            >
              <span className="font-medium">{index + 1}.</span>
              <input
                type="text"
                value={company.name}
                onChange={(e) =>
                  setCompanies(
                    companies.map((c) =>
                      c.id === company.id ? { ...c, name: e.target.value } : c
                    )
                  )
                }
                placeholder="Nama Perusahaan"
                className="p-2 rounded-md flex-1 min-w-[150px]"
              />

              <select
                value={company.country}
                onChange={(e) =>
                  setCompanies(
                    companies.map((c) =>
                      c.id === company.id ? { ...c, country: e.target.value } : c
                    )
                  )
                }
                className="bg-white p-2 rounded-md"
              >
                <option value="">Pilih Negara</option>
                {countries.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>

              <button className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-800">
                Revisi
              </button>

              <button
                onClick={() => deleteCompany(company.id)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-800"
              >
                Hapus
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* BAGIAN KANAN */}
      <div>
        <p className="font-medium mb-3">
          2. Apakah perusahaan anda memiliki holding company?
        </p>

        <select className="border p-2 rounded-md w-full mb-4">
          <option></option>
          <option>Ya</option>
          <option>Tidak</option>
        </select>

        <p className="font-medium mb-3">Sebutkan nama perusahaannya</p>
        <select className="border p-2 rounded-md w-full">
          <option></option>
          <option>PT. Holding Satu</option>
          <option>PT. Holding Dua</option>
        </select>
      </div>
    </div>
  );
}
