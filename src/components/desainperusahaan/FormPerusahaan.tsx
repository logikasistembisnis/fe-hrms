"use client";

import { useState, useEffect } from "react";
import { Company, Country } from "@/api/data";
import {
  getCompanies,
  saveCompany,
  deleteCompany,
} from "@/api/companyApi";
import { getCountries } from "@/api/countryApi";

interface FormPerusahaanProps {
  onNextStep: () => void;
}

export default function FormPerusahaan({ onNextStep }: FormPerusahaanProps) {
  const [companiesFromAPI, setCompaniesFromAPI] = useState<Company[]>([]);
  const [localCompanies, setLocalCompanies] = useState<Company[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [hasHolding, setHasHolding] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [dataloading, setDataLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  //  ambil data dari API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [companyRes, countryRes] = await Promise.all([
          getCompanies(),
          getCountries(),
        ]);

        const sortedCompanies = (companyRes.data || []).sort(
          (a, b) => b.companyid - a.companyid
        );

        setCompaniesFromAPI(sortedCompanies);
        setCountries(countryRes.data || []);
      } catch (err: unknown) {
        console.error("Error loading data:", err);
        setError("Gagal memuat data perusahaan");
      } finally {
        setDataLoading(false);
      }
    };

    fetchData();
  }, []);

  //  hapus perusahaan
  const handleDelete = async (id: number, source: "api" | "local") => {
    if (!confirm("Apakah Anda yakin ingin menghapus perusahaan ini?")) return;

    try {
      if (source === "api") {
        await deleteCompany(id);
        const updated = companiesFromAPI.filter((c) => c.companyid !== id);
        setCompaniesFromAPI(updated);
        localStorage.setItem("companiesFromAPI", JSON.stringify(updated));
      } else {
        const updated = localCompanies.filter((c) => c.companyid !== id);
        setLocalCompanies(updated);
        localStorage.setItem("localCompanies", JSON.stringify(updated));
      }
    } catch (err) {
      alert(err instanceof Error ? err.message : "Gagal menghapus perusahaan");
    }
  };

  //  tambah perusahaan baru (lokal)
  const handleAdd = () => {
    const newCompany: Company = {
      companyid: -(Math.random() * 100000),
      name: "",
      country: { name: "" },
    };

    const updated = [newCompany, ...localCompanies];
    setLocalCompanies(updated);
    localStorage.setItem("localCompanies", JSON.stringify(updated));
  };

  //  update perusahaan lokal
  const handleLocalChange = (
    id: number,
    field: "name" | "country",
    value: string
  ) => {
    const updated = localCompanies.map((c) =>
      c.companyid === id
        ? field === "name"
          ? { ...c, name: value }
          : { ...c, country: { name: value } }
        : c
    );
    setLocalCompanies(updated);
    localStorage.setItem("localCompanies", JSON.stringify(updated));
  };

  //  update perusahaan API (sementara simpan di state)
  const handleAPIChange = (
    id: number,
    field: "name" | "country",
    value: string
  ) => {
    const updated = companiesFromAPI.map((c) =>
      c.companyid === id
        ? field === "name"
          ? { ...c, name: value }
          : { ...c, country: { name: value } }
        : c
    );
    setCompaniesFromAPI(updated);
    localStorage.setItem("companiesFromAPI", JSON.stringify(updated));
  };

  const allCompanies = [...localCompanies, ...companiesFromAPI];

  if (dataloading) return <p className="p-6">Loading data perusahaan...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const allCompanies = [...companiesFromAPI, ...localCompanies];
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

      console.log("Payload:", payload);
      await saveCompany(payload);

      alert("Semua data perusahaan berhasil disimpan!");
      onNextStep(); // pindah ke form berikutnya
    } catch (err) {
      console.error(err);
      alert("Gagal menyimpan data perusahaan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        {/* BAGIAN KIRI */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Informasi Perusahaan</h2>
          <p className="font-medium text-lg mb-3">
            1. Sebutkan nama perusahaan dan negara tempat beroperasi
          </p>

          <button
            onClick={handleAdd}
            className="flex items-center gap-2 mb-4 px-4 py-2 bg-[#0c356a] text-white rounded-full cursor-pointer"
          >
            Tambah
          </button>

          <div className="space-y-3">
            {/* LOKAL */}
            {localCompanies.map((company) => (
              <div
                key={company.companyid}
                className="flex flex-wrap items-center gap-2"
              >
                <input
                  type="text"
                  placeholder="Nama perusahaan"
                  value={company.name}
                  onChange={(e) =>
                    handleLocalChange(company.companyid, "name", e.target.value)
                  }
                  className="py-2 px-3 flex-1 min-w-[150px] bg-gray-100 rounded-lg"
                />

                <select
                  value={company.country?.name || ""}
                  onChange={(e) =>
                    handleLocalChange(
                      company.companyid,
                      "country",
                      e.target.value
                    )
                  }
                  className="py-2 px-3 flex-1 min-w-[180px] bg-gray-100 rounded-lg"
                >
                  <option value="">Pilih Negara</option>
                  {countries.map((country) => (
                    <option key={country.countryid} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>

                <button
                  onClick={() => handleDelete(company.companyid, "local")}
                  className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-800"
                >
                  Hapus
                </button>
              </div>
            ))}

            {/* DARI API */}
            {companiesFromAPI.map((company) => (
              <div
                key={company.companyid}
                className="flex flex-wrap items-center gap-2"
              >
                <input
                  type="text"
                  value={company.name}
                  onChange={(e) =>
                    handleAPIChange(company.companyid, "name", e.target.value)
                  }
                  className="py-2 px-3 flex-1 min-w-[150px] bg-gray-100 rounded-lg"
                />

                <select
                  value={company.country?.name || ""}
                  onChange={(e) =>
                    handleAPIChange(company.companyid, "country", e.target.value)
                  }
                  className="py-2 px-3 flex-1 min-w-[180px] bg-gray-100 rounded-lg"
                >
                  <option value="">Pilih Negara</option>
                  {countries.map((country) => (
                    <option key={country.countryid} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>

                <button
                  onClick={() => handleDelete(company.companyid, "api")}
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

          <select
            className="border p-2 rounded-md w-full mb-4"
            value={hasHolding}
            onChange={(e) => setHasHolding(e.target.value)}
          >
            <option value="">Pilih</option>
            <option value="Ya">Ya</option>
            <option value="Tidak">Tidak</option>
          </select>

          <p className="font-medium mb-3">Sebutkan nama perusahaannya</p>
          <select
            className="border p-2 rounded-md w-full"
            disabled={hasHolding === "Tidak" || hasHolding === ""}
          >
            <option value="">Pilih Perusahaan</option>
            {allCompanies.map((c) => (
              <option key={c.companyid} value={c.name}>
                {c.name || "(Belum diisi)"}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`mt-6 py-2 px-6 rounded-full text-white font-semibold ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-600 hover:bg-green-800"
          }`}
        >
          {loading ? "Menyimpan..." : "Simpan & Lanjut"}
        </button>
      </div>
    </div>
  );
}
