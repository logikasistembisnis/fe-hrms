"use client";

import { useState, useEffect } from "react";
import { Company, Country, Tenant } from "@/api/data";
import { getCompanies, saveCompany, deleteCompany } from "@/api/companyApi";
import { getCountries } from "@/api/countryApi";
import { getTenantbyid, saveTenant } from "@/api/tenantApi";

interface FormPerusahaanProps {
  onNextStep: () => void;
}

// Default value
const defaultTenant: Tenant = {
  tenantid: 1,
  name: "",
  description: null,
  holdingflag: null,
  holdingcompanyid: null,
  active: true,
};

export default function FormCompany({ onNextStep }: FormPerusahaanProps) {
  const [companiesFromAPI, setCompaniesFromAPI] = useState<Company[]>([]);
  const [localCompanies, setLocalCompanies] = useState<Company[]>([]);
  const [countries, setCountries] = useState<Country[]>([]);
  
  const [tenant, setTenant] = useState<Tenant | null>(null);
  const [hasHolding, setHasHolding] = useState<string>("");
  
  const [loading, setLoading] = useState(false);
  const [dataloading, setDataLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setDataLoading(true);
      setError(null);

      try {
        const results = await Promise.allSettled([
          getCompanies(),
          getCountries(),
          getTenantbyid(1),
        ]);
        const [companyRes, countryRes, tenantRes] = results;

        // 1. Handle Companies
        let companies: Company[] = [];
        if (companyRes.status === "fulfilled" && companyRes.value?.data) {
          companies = (companyRes.value.data || []).sort((a, b) => b.companyid - a.companyid);
        } else {
          const saved = localStorage.getItem("companiesFromAPI");
          companies = saved ? JSON.parse(saved) : [];
        }
        setCompaniesFromAPI(companies);
        localStorage.setItem("companiesFromAPI", JSON.stringify(companies));

        // 2. Handle Countries
        let countryList: Country[] = [];
        if (countryRes.status === "fulfilled" && countryRes.value?.data) {
          countryList = countryRes.value.data || [];
        } else {
          const saved = localStorage.getItem("countries");
          countryList = saved ? JSON.parse(saved) : [];
        }
        setCountries(countryList);

        // 3. Handle Tenant (PERBAIKAN UTAMA DISINI)
        if (tenantRes.status === "fulfilled" && tenantRes.value?.data) {
          // Backend return OBJECT, bukan ARRAY
          const t: Tenant = tenantRes.value.data;
          
          if (t) {
             setTenant(t);
             // Set dropdown logic
             setHasHolding(
               t.holdingflag === true ? "Ya" : t.holdingflag === false ? "Tidak" : ""
             );
          } else {
             setTenant(null);
             setHasHolding("");
          }
        } else {
          // Jika request gagal atau data kosong
          setTenant(null);
          setHasHolding("");
        }

        const savedLocal = localStorage.getItem("localCompanies");
        setLocalCompanies(savedLocal ? JSON.parse(savedLocal) : []);

        const allRejected = results.every((r) => r.status === "rejected");
        if (allRejected) setError("Gagal memuat data perusahaan/tenant (semua request gagal).");
      } catch (err) {
        console.error("Unexpected error saat fetchData:", err);
        setError("Gagal memuat data perusahaan/tenant (kesalahan tidak terduga).");
      } finally {
        setDataLoading(false);
      }
    };

    fetchData();
  }, []);

  // --- FUNGSI LAIN TIDAK BERUBAH ---
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

  const handleAdd = () => {
    const newCompany: Company = { companyid: -(Math.floor(Math.random() * 100000) + 1), name: "", country: { name: "" } };
    const updated = [newCompany, ...localCompanies];
    setLocalCompanies(updated);
    localStorage.setItem("localCompanies", JSON.stringify(updated));
  };

  const handleLocalChange = (id: number, field: "name" | "country", value: string) => {
    const updated = localCompanies.map((c) =>
      c.companyid === id ? (field === "name" ? { ...c, name: value } : { ...c, country: { name: value } }) : c
    );
    setLocalCompanies(updated);
    localStorage.setItem("localCompanies", JSON.stringify(updated));
  };

  const handleAPIChange = (id: number, field: "name" | "country", value: string) => {
    const updated = companiesFromAPI.map((c) =>
      c.companyid === id ? (field === "name" ? { ...c, name: value } : { ...c, country: { name: value } }) : c
    );
    setCompaniesFromAPI(updated);
    localStorage.setItem("companiesFromAPI", JSON.stringify(updated));
  };

  const allCompanies = [...localCompanies, ...companiesFromAPI];

  const validateBeforeSubmit = (): boolean => {
    const errs: string[] = [];
    if (allCompanies.length === 0) {
      errs.push("Anda harus menambahkan minimal satu perusahaan (PT).");
    }
    allCompanies.forEach((c, idx) => {
      if (!c.name || c.name.trim() === "") errs.push(`Nama perusahaan (PT) pada baris ${idx + 1} wajib diisi.`);
      if (!c.country?.name || c.country.name.trim() === "") errs.push(`Negara perusahaan pada baris ${idx + 1} wajib dipilih.`);
    });
    if (hasHolding === "") errs.push("Silakan pilih apakah perusahaan memiliki holding company (Ya/Tidak).");
    if (hasHolding === "Ya") {
      const selected = tenant?.holdingcompanyid;
      if (selected == null || selected === 0) {
        errs.push("Anda memilih 'Ya' untuk holding — wajib pilih nama perusahaan holding.");
      }
    }
    setValidationErrors(errs);
    return errs.length === 0;
  };

  const handleSubmit = async () => {
    setValidationErrors([]);
    if (!validateBeforeSubmit()) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    try {
      setLoading(true);

      // Logic Save Company
      const payload = allCompanies.map((company) => {
        const countryObj = countries.find((ct) => ct.name === company.country?.name);
        return {
          companyid: company.companyid > 0 ? company.companyid : undefined,
          name: company.name,
          countryid: countryObj?.countryid ?? null,
          tenantid: 1,
        };
      });

      interface BackendResultItem { status: string; data: Company; }
      interface BackendResponse { results: BackendResultItem[]; }

      const rawResponse = await saveCompany(payload as unknown as Partial<Company>[]);
      const backendData = rawResponse as unknown as BackendResponse;
      const savedCompanies: Company[] = (backendData.results || []).map(item => item.data);

      // Logic ID Holding
      let finalHoldingCompanyId: number | null = null;
      if (hasHolding === "Ya") {
        const selectedTempId = tenant?.holdingcompanyid ?? null;
        if (selectedTempId) {
          if (selectedTempId > 0) {
            finalHoldingCompanyId = selectedTempId;
          } else {
            const tempCompanyData = allCompanies.find(c => c.companyid === selectedTempId);
            if (tempCompanyData) {
              const matchedSavedCompany = savedCompanies.find(
                (sc) => sc.name.trim().toLowerCase() === tempCompanyData.name.trim().toLowerCase()
              );
              if (matchedSavedCompany) {
                finalHoldingCompanyId = matchedSavedCompany.companyid;
              } else {
                throw new Error(`Gagal menyimpan holding: Perusahaan '${tempCompanyData.name}' tidak ditemukan di respon server.`);
              }
            }
          }
        }
      }

      const currentTenantData = tenant ?? defaultTenant;

      // Logic Save Tenant (Upsert via Array)
      const tenantPayload: Partial<Tenant> = {
        ...currentTenantData,
        tenantid: 1,
        holdingflag: hasHolding === "Ya",
        holdingcompanyid: finalHoldingCompanyId,
        active: true,
      };

      try {
        await saveTenant([tenantPayload]);
      } catch (tenantErr) {
        console.error("Gagal update tenant:", tenantErr);
        throw new Error("Data perusahaan tersimpan, tetapi gagal update status holding.");
      }

      alert("Data perusahaan dan tenant berhasil disimpan!");

      const serverCompanies = savedCompanies
        .filter((c) => c && c.companyid > 0)
        .sort((a, b) => b.companyid - a.companyid);

      setCompaniesFromAPI(serverCompanies);
      localStorage.setItem("companiesFromAPI", JSON.stringify(serverCompanies));
      setLocalCompanies([]);
      localStorage.removeItem("localCompanies");

      onNextStep();
    } catch (err) {
      console.error(err);
      alert(err instanceof Error ? err.message : "Gagal menyimpan data perusahaan atau tenant");
    } finally {
      setLoading(false);
    }
  };

  if (dataloading) return <p className="p-6">Loading data perusahaan...</p>;
  if (error) return <p className="p-6 text-red-500">{error}</p>;

  return (
    <div>
      {validationErrors.length > 0 && (
        <div className="p-4 mb-4 bg-red-50 border border-red-200 rounded">
          <strong className="text-red-700">Perbaiki kesalahan berikut:</strong>
          <ul className="mt-2 list-disc list-inside text-sm text-red-600">
            {validationErrors.map((v, i) => <li key={i}>{v}</li>)}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
        {/* FORM PERUSAHAAN SAMA SAJA */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Informasi Perusahaan</h2>
          <p className="font-medium text-lg mb-3">1. Sebutkan nama perusahaan dan negara tempat beroperasi</p>
          <button onClick={handleAdd} className="flex items-center gap-2 mb-4 px-4 py-2 bg-[#0c356a] text-white rounded-full cursor-pointer">Tambah</button>
          
          <div className="space-y-3">
             {localCompanies.map((company) => (
              <div key={company.companyid} className="flex flex-wrap items-center gap-2">
                <input type="text" placeholder="Nama perusahaan" value={company.name} onChange={(e) => handleLocalChange(company.companyid, "name", e.target.value)} className="py-2 px-3 flex-1 min-w-[150px] bg-gray-100 rounded-lg" />
                <select value={company.country?.name || ""} onChange={(e) => handleLocalChange(company.companyid, "country", e.target.value)} className="py-2 px-3 flex-1 min-w-[180px] bg-gray-100 rounded-lg">
                  <option value="">Pilih Negara</option>
                  {countries.map((country) => <option key={country.countryid} value={country.name}>{country.name}</option>)}
                </select>
                <button onClick={() => handleDelete(company.companyid, "local")} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-800">Hapus</button>
              </div>
            ))}
            {companiesFromAPI.map((company) => (
              <div key={company.companyid} className="flex flex-wrap items-center gap-2">
                <input type="text" value={company.name || ""} onChange={(e) => handleAPIChange(company.companyid, "name", e.target.value)} className="py-2 px-3 flex-1 min-w-[150px] bg-gray-100 rounded-lg" />
                <select value={company.country?.name || ""} onChange={(e) => handleAPIChange(company.companyid, "country", e.target.value)} className="py-2 px-3 flex-1 min-w-[180px] bg-gray-100 rounded-lg">
                  <option value="">Pilih Negara</option>
                  {countries.map((country) => <option key={country.countryid} value={country.name}>{country.name}</option>)}
                </select>
                <button onClick={() => handleDelete(company.companyid, "api")} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-800">Hapus</button>
              </div>
            ))}
          </div>
        </div>

        {/* FORM HOLDING (DROPDOWN) */}
        <div>
          <p className="font-medium mb-3">2. Apakah perusahaan anda memiliki holding company?</p>
          <select 
            className="border p-2 rounded-md w-full mb-4"
            value={hasHolding}
            onChange={(e) => {
              const newVal = e.target.value;
              setHasHolding(newVal);
              setTenant((prev) => {
                 const current = prev ?? defaultTenant;
                 if (newVal === "Tidak" || newVal === "") {
                    return { ...current, holdingflag: false, holdingcompanyid: null };
                 } else {
                    return { ...current, holdingflag: true };
                 }
              });
            }}
          >
            <option value="">Pilih</option>
            <option value="Ya">Ya</option>
            <option value="Tidak">Tidak</option>
          </select>

          <p className="font-medium mb-3">Sebutkan nama perusahaannya</p>
          <select
            className="border p-2 rounded-md w-full"
            disabled={hasHolding === "Tidak" || hasHolding === ""}
            // Tetap gunakan String() agar ID 2 (number) cocok dengan "2" (value option)
            value={tenant?.holdingcompanyid ? String(tenant.holdingcompanyid) : ""}
            onChange={(e) => {
              const val = e.target.value === "" ? null : Number(e.target.value);
              setTenant((prev) => ({
                ...(prev ?? defaultTenant),
                holdingcompanyid: val,
              }));
            }}
          >
            <option value="">Pilih Perusahaan</option>
            {allCompanies.map((c) => (
              // Tetap gunakan String()
              <option key={c.companyid} value={String(c.companyid)}>
                {c.name || " (Belum diisi)"}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-end">
        <button onClick={handleSubmit} disabled={loading} className={`mt-6 py-2 px-6 rounded-full text-white font-semibold ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-800"}`}>
          {loading ? "Menyimpan..." : "Simpan & Lanjut"}
        </button>
      </div>
    </div>
  );
}