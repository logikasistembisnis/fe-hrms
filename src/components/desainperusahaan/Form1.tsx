"use client";

import { useState, useEffect } from "react";

interface Company {
  companyid: number;
  name: string;
  country: {
    name: string;
  };
}

interface Country {
  countryid: number;
  name: string;
}

export default function Form1() {
  const [companiesFromAPI, setCompaniesFromAPI] = useState<Company[]>([]);
  const [localCompanies, setLocalCompanies] = useState<Company[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  const [hasHolding, setHasHolding] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  // 🔹 Load data awal dari API & localStorage
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [companyRes, countryRes] = await Promise.all([
          fetch(`${apiUrl}/company`),
          fetch(`${apiUrl}/country`),
        ]);

        if (!companyRes.ok || !countryRes.ok) {
          throw new Error("Gagal memuat data dari server");
        }

        const companyData = await companyRes.json();
        const countryData = await countryRes.json();

        const sortedCompanies = (companyData.data || []).sort(
          (a: Company, b: Company) => b.companyid - a.companyid
        );

        setCompaniesFromAPI(sortedCompanies);
        setCountries(countryData.data || []);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Gagal mengambil data perusahaan");
        }
      } finally {
        setLoading(false);
      }
    };

    // Ambil local data juga
    const storedLocal = localStorage.getItem("localCompanies");
    if (storedLocal) {
      setLocalCompanies(JSON.parse(storedLocal));
    }

    fetchData();
  }, [apiUrl]);

  // Fungsi hapus perusahaan
  const handleDelete = (id: number, source: "api" | "local") => {
    if (!confirm("Apakah Anda yakin ingin menghapus perusahaan ini?")) return;

    if (source === "api") {
      fetch(`${apiUrl}/company/${id}`, { method: "DELETE" })
        .then((res) => {
          if (!res.ok) throw new Error("Gagal menghapus perusahaan");
          setCompaniesFromAPI((prev) =>
            prev.filter((c) => c.companyid !== id)
          );
        })
        .catch((err) => alert(err.message));
    } else {
      const updated = localCompanies.filter((c) => c.companyid !== id);
      setLocalCompanies(updated);
      localStorage.setItem("localCompanies", JSON.stringify(updated));
    }
  };

  // Tambah perusahaan baru (sementara di local)
  const handleAdd = () => {
    const newCompany: Company = {
      companyid: -(Math.random() * 100000), // id sementara negatif
      name: "",
      country: { name: "" },
    };

    const updated = [newCompany, ...localCompanies];
    setLocalCompanies(updated);
    localStorage.setItem("localCompanies", JSON.stringify(updated));
  };

  // Update nama atau negara untuk perusahaan lokal
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

  // 🔹 Gabungkan data API + local untuk dropdown holding
  const allCompanies = [...localCompanies, ...companiesFromAPI];

  if (loading) return <p className="p-6">Loading data perusahaan...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
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
          {/* PERUSAHAAN DARI LOCAL STORAGE */}
          {localCompanies.length > 0 &&
            localCompanies.map((company, index) => (
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
                  className="py-2 px-3 rounded-md flex-1 min-w-[150px] bg-gray-100 rounded-lg"
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

          {/* PERUSAHAAN DARI API */}
          {companiesFromAPI.length > 0 ? (
            companiesFromAPI.map((company, index) => (
              <div
                key={company.companyid}
                className="flex flex-wrap items-center gap-2"
              >
                <input
                  type="text"
                  value={company.name}
                  onChange={(e) => {
                    const updated = companiesFromAPI.map((c) =>
                      c.companyid === company.companyid
                        ? { ...c, name: e.target.value }
                        : c
                    );
                    setCompaniesFromAPI(updated);
                  }}
                  className="py-2 px-3 rounded-md flex-1 min-w-[150px] bg-gray-100 rounded-lg"
                />

                <select
                  value={company.country?.name || ""}
                  onChange={(e) => {
                    const updated = companiesFromAPI.map((c) =>
                      c.companyid === company.companyid
                        ? { ...c, country: { name: e.target.value } }
                        : c
                    );
                    setCompaniesFromAPI(updated);
                  }}
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
            ))
          ) : (
            <></>
          )}
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
  );
}
