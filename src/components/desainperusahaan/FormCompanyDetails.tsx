"use client";

import { useState, useEffect } from "react";
import { Company } from "@/api/data";
import { getCompanies, saveCompanyDetails } from "@/api/companyApi";

interface Form2Props {
  onNextStep: () => void;
  onBack: () => void;
}

export default function FormCompanyDetails({ onNextStep, onBack }: Form2Props) {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState<number | null>(null);
  const [formData, setFormData] = useState<Partial<Company>>({});
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [saving, setSaving] = useState(false);

  /* Ambil daftar perusahaan */
  const fetchCompanies = async () => {
    const res = await getCompanies();
    const sorted = (res.data || []).sort((a, b) => a.companyid - b.companyid);
    setCompanies(sorted);

    // jika sudah memilih perusahaan, update ulang datanya agar fresh
    if (selectedCompanyId) {
      const updated = sorted.find((c) => c.companyid === selectedCompanyId);
      if (updated) {
        setFormData(updated);
        setFileName(updated.logo || "");
      }
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, []);

  /*  Ketika user pilih perusahaan */
  const handleSelectCompany = (id: number) => {
    const company = companies.find((c) => c.companyid === id);
    if (company) {
      setSelectedCompanyId(company.companyid);
      setFormData(company);
      setFileName(company.logo || "");
      setFile(null);
    } else {
      setSelectedCompanyId(null);
      setFormData({});
      setFile(null);
      setFileName("");
    }
  };

  /*  Handle perubahan input */
  const handleChange = (field: keyof Company, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  /*  Upload file */
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] || null;
    setFile(f);
    setFileName(f ? f.name : "");
  };

  /* Simpan perubahan */
  const handleSave = async () => {
    if (!selectedCompanyId) {
      alert("Pilih perusahaan terlebih dahulu!");
      return;
    }

    try {
      setSaving(true);

      const form = new FormData();
      form.append("brandname", formData.brandname || "");
      form.append("entitytype", formData.entitytype || "");
      form.append("noindukberusaha", formData.noindukberusaha || "");
      form.append("npwp", formData.npwp || "");
      form.append("address", formData.address || "");
      form.append("telpno", formData.telpno || "");
      form.append("companyemail", formData.companyemail || "");
      if (file) form.append("logo", file);

      await saveCompanyDetails(selectedCompanyId, form);

      alert("Data perusahaan berhasil disimpan!");
      await fetchCompanies(); // re-fetch agar data yang baru langsung muncul
    } catch (err: unknown) {
      console.error("Error saving:", err);
      alert(err instanceof Error ? err.message : "Terjadi kesalahan saat menyimpan data.");
    } finally {
      setSaving(false);
    }
  };

  const disabled = !selectedCompanyId;

  if (companies.length === 0)
    return <p className="p-6 text-gray-600">Memuat data perusahaan...</p>;

  return (
    <div className="p-6 w-full mx-auto">
      <h3 className="text-lg font-semibold mb-4">
        3. Masukkan informasi detail perusahaan
      </h3>

      <form className="space-y-3">
        {/*  Dropdown perusahaan */}
        <div className="grid grid-cols-3 items-center gap-4">
          <label className="font-medium text-sm">Nama Legal Perusahaan</label>
          <select
            value={selectedCompanyId || ""}
            onChange={(e) => handleSelectCompany(Number(e.target.value))}
            className="col-span-2 border border-gray-300 rounded-md p-2 bg-blue-50 focus:ring-2 focus:ring-blue-400 w-full"
          >
            <option value="">Pilih Perusahaan</option>
            {companies.map((c) => (
              <option key={c.companyid} value={c.companyid}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        {/*  Negara */}
        <div className="grid grid-cols-3 items-center gap-4">
          <label className="font-medium text-sm">Terdaftar di Negara</label>
          <input
            type="text"
            value={formData.country?.name || ""}
            disabled
            className="col-span-2 border border-gray-300 rounded-md p-2 bg-gray-200 w-full"
          />
        </div>

        {/*  Brand Name */}
        <div className="grid grid-cols-3 items-center gap-4">
          <label className="font-medium text-sm">
            Nama Brand/Komersial (jika berbeda)
          </label>
          <input
            type="text"
            value={formData.brandname || ""}
            onChange={(e) => handleChange("brandname", e.target.value)}
            disabled={disabled}
            placeholder="Nama Brand"
            className={`col-span-2 border border-gray-300 rounded-md p-2 w-full ${
              disabled ? "bg-gray-200" : "bg-blue-50 focus:ring-2 focus:ring-blue-400"
            }`}
          />
        </div>

        {/*  Entity Type */}
        <div className="grid grid-cols-3 items-center gap-4">
          <label className="font-medium text-sm">
            Tipe Entitas Hukum (PT, CV, Yayasan, dll.)
          </label>
          <input
            type="text"
            value={formData.entitytype || ""}
            onChange={(e) => handleChange("entitytype", e.target.value)}
            disabled={disabled}
            placeholder="PT / CV / dll"
            className={`col-span-2 border border-gray-300 rounded-md p-2 w-full ${
              disabled ? "bg-gray-200" : "bg-blue-50 focus:ring-2 focus:ring-blue-400"
            }`}
          />
        </div>

        {/*  NIB */}
        <div className="grid grid-cols-3 items-center gap-4">
          <label className="font-medium text-sm">Nomor Induk Berusaha (NIB)</label>
          <input
            type="text"
            value={formData.noindukberusaha || ""}
            onChange={(e) => handleChange("noindukberusaha", e.target.value)}
            disabled={disabled}
            placeholder="Nomor Induk Berusaha"
            className={`col-span-2 border border-gray-300 rounded-md p-2 w-full ${
              disabled ? "bg-gray-200" : "bg-blue-50 focus:ring-2 focus:ring-blue-400"
            }`}
          />
        </div>

        {/*  NPWP */}
        <div className="grid grid-cols-3 items-center gap-4">
          <label className="font-medium text-sm">NPWP</label>
          <input
            type="text"
            value={formData.npwp || ""}
            onChange={(e) => handleChange("npwp", e.target.value)}
            disabled={disabled}
            placeholder="NPWP"
            className={`col-span-2 border border-gray-300 rounded-md p-2 w-full ${
              disabled ? "bg-gray-200" : "bg-blue-50 focus:ring-2 focus:ring-blue-400"
            }`}
          />
        </div>

        {/*  Alamat */}
        <div className="grid grid-cols-3 items-center gap-4">
          <label className="font-medium text-sm">Alamat Kantor Pusat</label>
          <input
            type="text"
            value={formData.address || ""}
            onChange={(e) => handleChange("address", e.target.value)}
            disabled={disabled}
            placeholder="Alamat"
            className={`col-span-2 border border-gray-300 rounded-md p-2 w-full ${
              disabled ? "bg-gray-200" : "bg-blue-50 focus:ring-2 focus:ring-blue-400"
            }`}
          />
        </div>

        {/*  Telepon & Email */}
        <div className="grid grid-cols-3 items-center gap-4">
          <label className="font-medium text-sm">Nomor Telepon & Email Resmi</label>
          <div className="col-span-2 flex gap-3">
            <input
              type="text"
              value={formData.telpno || ""}
              onChange={(e) => handleChange("telpno", e.target.value)}
              disabled={disabled}
              placeholder="Telepon"
              className={`w-1/2 border border-gray-300 rounded-md p-2 ${
                disabled ? "bg-gray-200" : "bg-blue-50 focus:ring-2 focus:ring-blue-400"
              }`}
            />
            <input
              type="email"
              value={formData.companyemail || ""}
              onChange={(e) => handleChange("companyemail", e.target.value)}
              disabled={disabled}
              placeholder="Email"
              className={`w-1/2 border border-gray-300 rounded-md p-2 ${
                disabled ? "bg-gray-200" : "bg-blue-50 focus:ring-2 focus:ring-blue-400"
              }`}
            />
          </div>
        </div>

        {/*  Upload Logo */}
        <div className="grid grid-cols-3 items-center gap-4">
          <label className="font-medium text-sm">Logo</label>
          <div className="col-span-2 flex items-center gap-3">
            <label
              className={`relative cursor-pointer ${
                disabled ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              <div
                className={`${
                  disabled ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
                } text-white px-4 py-2 rounded-md text-sm`}
              >
                Upload
              </div>
              <input
                type="file"
                accept="image/*"
                disabled={disabled}
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleFileChange}
              />
            </label>

            {fileName ? (
              <span className="text-sm text-gray-800">{fileName}</span>
            ) : (
              <span className="text-gray-400 italic text-sm">Belum ada logo</span>
            )}
          </div>
        </div>
      </form>

      {/*  Tombol navigasi */}
      <div className="flex justify-end gap-4 mt-6">
        <button
          onClick={onBack}
          className="bg-gray-200 hover:bg-gray-300 text-sm text-gray-700 font-semibold py-2 px-6 rounded-full"
        >
          Kembali
        </button>

        <button
          onClick={handleSave}
          disabled={saving || disabled}
          className={`bg-green-500 hover:bg-green-600 text-sm text-white font-semibold py-2 px-6 rounded-full ${
            saving || disabled ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {saving ? "Menyimpan..." : "Simpan"}
        </button>

        <button
          onClick={onNextStep}
          className="bg-blue-500 hover:bg-blue-600 text-sm text-white font-semibold py-2 px-6 rounded-full"
        >
          Lanjut
        </button>
      </div>
    </div>
  );
}
