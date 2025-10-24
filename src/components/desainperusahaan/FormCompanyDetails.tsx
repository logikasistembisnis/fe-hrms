"use client";

import { useState, useEffect } from "react";
import { Company } from "@/api/data";
import { getCompanies, saveCompanyDetails } from "@/api/companyApi";

interface Form2Props {
  onNextStep: () => void;
  onBack: () => void;
}

export default function FormCompanyDetails({ onNextStep, onBack}: Form2Props) {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState<Partial<Company>>({});
  const [file, setFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [saving, setSaving] = useState(false);

  //  Ambil semua data perusahaan di awal
  useEffect(() => {
    const fetchCompanies = async () => {
      const res = await getCompanies();
      const sorted = (res.data || []).sort(
        (a, b) => a.companyid - b.companyid
      );
      setCompanies(sorted);

      if (sorted.length > 0) {
        setFormData(sorted[0]);
        setFileName(sorted[0].logo || "");
      }
    };
    fetchCompanies();
  }, []);

  //  Handle input teks
  const handleChange = (field: keyof Company, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  //  Upload file baru
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0] || null;
    setFile(f);
    setFileName(f ? f.name : "");
  };

  //  Simpan data ke backend
  const handleSave = async (goNextAfterSave = false) => {
    if (!formData.companyid) return;

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

      // 🔁 Gunakan API helper dari companyApi.ts
      const updated = await saveCompanyDetails(formData.companyid, form);

      if (updated?.data) {
        setFormData(updated.data);
        setFileName(updated.data.logo || "");
      }

      if (goNextAfterSave) {
        handleNextCompany();
      } else {
        alert("Data perusahaan berhasil disimpan!");
      }
    } catch (err: unknown) {
      console.error("Error saving:", err);
      alert(err instanceof Error ? err.message : "Terjadi kesalahan.");
    } finally {
      setSaving(false);
      setFile(null);
    }
  };

  //  Lanjut ke perusahaan berikutnya TANPA menyimpan
  const handleNextCompany = () => {
    setSaving(false);
    if (currentIndex < companies.length - 1) {
      const nextIndex = currentIndex + 1;
      const nextCompany = companies[nextIndex];
      setCurrentIndex(nextIndex);
      setFormData(nextCompany);
      setFile(null);
      setFileName(nextCompany.logo || "");
    } else {
      onNextStep();
    }
  };

  //  Kembali ke perusahaan sebelumnya / step sebelumnya
  const handleBackCompany = () => {
    setSaving(false); // reset juga kalau klik kembali
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      const prevCompany = companies[prevIndex];
      setCurrentIndex(prevIndex);
      setFormData(prevCompany);
      setFile(null);
      setFileName(prevCompany.logo || "");
    } else {
      onBack();
    }
  };

  if (companies.length === 0)
    return <p className="p-6 text-gray-600">Memuat data perusahaan...</p>;

  const currentCompany = companies[currentIndex];

  return (
    <div className="p-6 w-full mx-auto">
      <h3 className="text-lg font-semibold mb-4">
        3. Masukkan informasi detail perusahaan
      </h3>

      <form className="space-y-3">
        {/* Nama perusahaan */}
        <div className="grid grid-cols-3 items-center gap-4">
          <label className="font-medium text-sm">Nama Legal Perusahaan</label>
          <input
            type="text"
            value={currentCompany?.name || ""}
            readOnly
            className="col-span-2 border border-gray-300 rounded-md p-2 bg-gray-200 cursor-not-allowed w-full"
          />
        </div>

        {/* Negara */}
        <div className="grid grid-cols-3 items-center gap-4">
          <label className="font-medium text-sm">Terdaftar di Negara</label>
          <input
            type="text"
            value={currentCompany?.country?.name || ""}
            readOnly
            className="col-span-2 border border-gray-300 rounded-md p-2 bg-gray-200 cursor-not-allowed w-full"
          />
        </div>

        {/* Brand name */}
        <div className="grid grid-cols-3 items-center gap-4">
          <label className="font-medium text-sm">Nama Brand Nama Brand/Komersial (jika berbeda)</label>
          <input
            type="text"
            value={formData.brandname || ""}
            onChange={(e) => handleChange("brandname", e.target.value)}
            placeholder="Nama Brand"
            className="col-span-2 border border-gray-300 rounded-md p-2 bg-blue-50 focus:ring-2 focus:ring-blue-400 w-full"
          />
        </div>

        {/* Entity type */}
        <div className="grid grid-cols-3 items-center gap-4">
          <label className="font-medium text-sm">Tipe Entitas Hukum (PT, CV, Yayasan, dll.)</label>
          <input
            type="text"
            value={formData.entitytype || ""}
            onChange={(e) => handleChange("entitytype", e.target.value)}
            placeholder="Telepon"
            className="col-span-2 border border-gray-300 rounded-md p-2 bg-blue-50 focus:ring-2 focus:ring-blue-400 w-full"
          />
        </div>

        {/* NIB */}
        <div className="grid grid-cols-3 items-center gap-4">
          <label className="font-medium text-sm">Nomor Induk Berusaha (NIB)</label>
          <input
            type="text"
            value={formData.noindukberusaha || ""}
            onChange={(e) => handleChange("noindukberusaha", e.target.value)}
            placeholder="Nomor Induk Berusaha"
            className="col-span-2 border border-gray-300 rounded-md p-2 bg-blue-50 focus:ring-2 focus:ring-blue-400 w-full"
          />
        </div>

        {/* NPWP */}
        <div className="grid grid-cols-3 items-center gap-4">
          <label className="font-medium text-sm">NPWP</label>
          <input
            type="text"
            value={formData.npwp || ""}
            onChange={(e) => handleChange("npwp", e.target.value)}
            placeholder="NPWP"
            className="col-span-2 border border-gray-300 rounded-md p-2 bg-blue-50 focus:ring-2 focus:ring-blue-400 w-full"
          />
        </div>

        {/* Alamat */}
        <div className="grid grid-cols-3 items-center gap-4">
          <label className="font-medium text-sm">Alamat Kantor Pusat</label>
          <input
            type="text"
            value={formData.address || ""}
            onChange={(e) => handleChange("address", e.target.value)}
            placeholder="Alamat"
            className="col-span-2 border border-gray-300 rounded-md p-2 bg-blue-50 focus:ring-2 focus:ring-blue-400 w-full"
          />
        </div>

        {/* Telepon & Email */}
        <div className="grid grid-cols-3 items-center gap-4">
          <label className="font-medium text-sm">Nomor Telepon & Email Resmi</label>
          <div className="col-span-2 flex gap-3">
            <input
              type="text"
              value={formData.telpno || ""}
              onChange={(e) => handleChange("telpno", e.target.value)}
              placeholder="Telepon"
              className="w-1/2 border border-gray-300 rounded-md p-2 bg-blue-50 focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              value={formData.companyemail || ""}
              onChange={(e) => handleChange("companyemail", e.target.value)}
              placeholder="Email"
              className="w-1/2 border border-gray-300 rounded-md p-2 bg-blue-50 focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Upload logo (custom tampilannya) */}
        <div className="grid grid-cols-3 items-center gap-4">
          <label className="font-medium text-sm">Logo</label>
          <div className="col-span-2 flex items-center gap-3">
            <label className="relative cursor-pointer">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 text-sm">
                Upload
              </div>
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleFileChange}
              />
            </label>

            {fileName ? (
              <div className="flex items-center gap-2 text-sm text-gray-800">
                <span>{fileName}</span>
              </div>
            ) : (
              <span className="text-gray-400 italic text-sm">
                Belum ada logo
              </span>
            )}
          </div>
        </div>
      </form>

      {/* Tombol navigasi */}
      <div className="flex justify-end gap-4 mt-6">
        <button
          onClick={handleBackCompany}
          className="bg-gray-200 hover:bg-gray-300 text-sm text-gray-700 font-semibold py-2 px-6 rounded-full"
        >
          Kembali
        </button>

        <button
          onClick={() => handleSave(false)}
          disabled={saving}
          className={`bg-green-500 hover:bg-green-600 text-sm text-white font-semibold py-2 px-6 rounded-full ${
            saving ? "opacity-70 cursor-not-allowed" : ""
          }`}
        >
          {saving ? "Menyimpan..." : "Simpan"}
        </button>

        {/* Tombol lanjut tanpa trigger saving */}
        <button
          onClick={handleNextCompany}
          className="bg-blue-500 hover:bg-blue-600 text-sm text-white font-semibold py-2 px-6 rounded-full"
        >
          Lanjut
        </button>
      </div>
    </div>
  );
}
