"use client";

import { useEffect, useState } from "react";
import { getCompanies } from "@/api/companyApi";
import {
  getDaftarCuti,
  getDaftarIzin,
  getCompanyCuti,
  getCompanyIzin,
  saveCompanyCuti,
  saveCompanyIzin,
} from "@/api/cutiizinApi";
import {
  Company,
  DaftarCuti,
  DaftarIzin,
  CompanyCuti,
  CompanyIzin,
} from "@/api/data";

interface FormCutiIzinProps {
  onNextStep: () => void;
  onBack: () => void;
}

export default function FormCutiIzin({ onNextStep, onBack }: FormCutiIzinProps) {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<string>("");
  const [daftarCuti, setDaftarCuti] = useState<DaftarCuti[]>([]);
  const [daftarIzin, setDaftarIzin] = useState<DaftarIzin[]>([]);
  const [companyCuti, setCompanyCuti] = useState<CompanyCuti[]>([]);
  const [companyIzin, setCompanyIzin] = useState<CompanyIzin[]>([]);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  //  Ambil master data & perusahaan
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [resCompanies, resCuti, resIzin] = await Promise.all([
          getCompanies(),
          getDaftarCuti(),
          getDaftarIzin(),
        ]);
        setCompanies(
          (resCompanies.data || []).sort((a, b) => a.companyid - b.companyid)
        );
        setDaftarCuti(resCuti.data || []);
        setDaftarIzin(resIzin.data || []);
      } catch (err) {
        console.error("Gagal memuat data master:", err);
        setError("Gagal memuat data perusahaan atau daftar cuti/izin");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  //  Ambil data companycuti dan companyizin ketika perusahaan dipilih
  useEffect(() => {
    if (!selectedCompany) return;

    const fetchCompanyData = async () => {
      try {
        setLoading(true);
        const selected = companies.find((c) => c.name === selectedCompany);
        if (!selected) return;

        const [resCompCuti, resCompIzin] = await Promise.all([
          getCompanyCuti(),
          getCompanyIzin(),
        ]);

        const allCompanyCuti: CompanyCuti[] = resCompCuti.data || [];
        const allCompanyIzin: CompanyIzin[] = resCompIzin.data || [];

        const filteredCuti = allCompanyCuti.filter(
          (x) => x.companyid === selected.companyid
        );
        const filteredIzin = allCompanyIzin.filter(
          (x) => x.companyid === selected.companyid
        );

        //  Merge daftar cuti master + data company
        const mergedCuti: CompanyCuti[] = daftarCuti.map((master) => {
          const existing = filteredCuti.find(
            (c) => c.daftarcutiid === master.daftarcutiid
          );
          return {
            companycutiid: existing?.companycutiid ?? 0,
            companyid: selected.companyid,
            daftarcutiid: master.daftarcutiid,
            deskripsi: master.deskripsi,
            jumlahhari: existing?.jumlahhari ?? 0,
          };
        });

        // tambahkan data baru (daftarcutiid = 0)
        const newCuti = filteredCuti.filter((c) => c.daftarcutiid === 0);
        const finalCuti = [...mergedCuti, ...newCuti];

        //  Merge daftar izin master + data company
        const mergedIzin: CompanyIzin[] = daftarIzin.map((master) => {
          const existing = filteredIzin.find(
            (i) => i.daftarizinid === master.daftarizinid
          );
          return {
            companyizinid: existing?.companyizinid ?? 0,
            companyid: selected.companyid,
            daftarizinid: master.daftarizinid,
            deskripsi: master.deskripsi,
            jumlahhari: existing?.jumlahhari ?? 0,
          };
        });

        // tambahkan data baru (daftarizinid = 0)
        const newIzin = filteredIzin.filter((i) => i.daftarizinid === 0);
        const finalIzin = [...mergedIzin, ...newIzin];

        setCompanyCuti(finalCuti);
        setCompanyIzin(finalIzin);
      } catch (err) {
        console.error("Gagal memuat company cuti/izin:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCompanyData();
  }, [selectedCompany, daftarCuti, daftarIzin, companies]);

  //  Checkbox toggle logic
  const handleCheckboxChange = (type: "cuti" | "izin", index: number) => {
    if (type === "cuti") {
      setCompanyCuti((prev) =>
        prev.map((item, idx) =>
          idx === index
            ? { ...item, jumlahhari: item.jumlahhari > 0 ? 0 : 1 }
            : item
        )
      );
    } else {
      setCompanyIzin((prev) =>
        prev.map((item, idx) =>
          idx === index
            ? { ...item, jumlahhari: item.jumlahhari > 0 ? 0 : 1 }
            : item
        )
      );
    }
  };

  //  Input jumlah hari
  const handleJumlahHariChange = (
    type: "cuti" | "izin",
    index: number,
    value: number
  ) => {
    if (type === "cuti") {
      setCompanyCuti((prev) =>
        prev.map((item, idx) =>
          idx === index ? { ...item, jumlahhari: value } : item
        )
      );
    } else {
      setCompanyIzin((prev) =>
        prev.map((item, idx) =>
          idx === index ? { ...item, jumlahhari: value } : item
        )
      );
    }
  };

  //  Edit deskripsi
  const handleDeskripsiChange = (
    type: "cuti" | "izin",
    index: number,
    value: string
  ) => {
    if (type === "cuti") {
      setCompanyCuti((prev) =>
        prev.map((item, idx) =>
          idx === index ? { ...item, deskripsi: value } : item
        )
      );
    } else {
      setCompanyIzin((prev) =>
        prev.map((item, idx) =>
          idx === index ? { ...item, deskripsi: value } : item
        )
      );
    }
  };

  //  Tambah baris baru
  const handleAddRow = (type: "cuti" | "izin") => {
    const selected = companies.find((c) => c.name === selectedCompany);
    if (!selected) return;

    if (type === "cuti") {
      setCompanyCuti((prev) => [
        ...prev,
        {
          companycutiid: 0, // data baru
          companyid: selected.companyid,
          daftarcutiid: 0,
          deskripsi: "",
          jumlahhari: 0,
        },
      ]);
    } else {
      setCompanyIzin((prev) => [
        ...prev,
        {
          companyizinid: 0,
          companyid: selected.companyid,
          daftarizinid: 0,
          deskripsi: "",
          jumlahhari: 0,
        },
      ]);
    }
  };

  //  Simpan data (array)
  const handleSave = async () => {
    const selected = companies.find((c) => c.name === selectedCompany);
    if (!selected) return;

    try {
      setSaving(true);

      // filter hanya data valid (ada deskripsi)
      const validCuti = companyCuti
        .filter((c) => c.deskripsi.trim() !== "")
        .map((c) => ({
          ...(c.companycutiid ? { companycutiid: c.companycutiid } : {}),
          companyid: selected.companyid,
          daftarcutiid: c.daftarcutiid,
          deskripsi: c.deskripsi,
          jumlahhari: Number(c.jumlahhari) || 0,
        }));

      const validIzin = companyIzin
        .filter((i) => i.deskripsi.trim() !== "")
        .map((i) => ({
          ...(i.companyizinid ? { companyizinid: i.companyizinid } : {}),
          companyid: selected.companyid,
          daftarizinid: i.daftarizinid,
          deskripsi: i.deskripsi,
          jumlahhari: Number(i.jumlahhari) || 0,
        }));

      await saveCompanyCuti(validCuti);
      await saveCompanyIzin(validIzin);

      alert("Data cuti & izin berhasil disimpan!");
    } catch (err) {
      console.error("Gagal menyimpan:", err);
      alert("Gagal menyimpan data, cek console!");
    } finally {
      setSaving(false);
    }
  };


  const disabled = !selectedCompany;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-3">
        8. Cuti dan Izin
      </h1>

      <div className="px-5 mb-4">
        {loading ? (
          <p className="text-sm text-gray-500">Memuat data...</p>
        ) : error ? (
          <p className="text-sm text-red-500">{error}</p>
        ) : (
          <select
            className="border border-gray-300 rounded-md px-3 py-2 w-64 text-sm focus:ring-blue-500 focus:border-blue-500"
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
          >
            <option value="">Pilih Perusahaan</option>
            {companies.map((c) => (
              <option key={c.companyid} value={c.name}>
                {c.name}
              </option>
            ))}
          </select>
        )}
      </div>

      {selectedCompany && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* === CUTI === */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="bg-blue-900 text-white text-lg font-bold text-center py-2 rounded-lg mb-4">
                Tipe Cuti + Hari
              </h2>
              <table className="w-full text-sm text-gray-700">
                <thead>
                  <tr>
                    <th className="text-left py-2">Jenis Cuti</th>
                    <th className="text-center py-2">Checklist</th>
                    <th className="text-center py-2">Jumlah Hari</th>
                  </tr>
                </thead>
                <tbody>
                  {companyCuti.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="py-1">
                        <input
                          type="text"
                          value={item.deskripsi}
                          onChange={(e) =>
                            handleDeskripsiChange("cuti", idx, e.target.value)
                          }
                          className={`w-full px-2 py-1 text-sm ${item.daftarcutiid !== 0
                            ? "cursor-not-allowed"
                            : "bg-white"
                            }`}
                          placeholder="Tulis jenis cuti..."
                          readOnly={item.daftarcutiid !== 0}
                        />
                      </td>
                      <td className="text-center">
                        <input
                          type="checkbox"
                          checked={item.jumlahhari > 0}
                          onChange={() => handleCheckboxChange("cuti", idx)}
                          className="w-4 h-4 accent-blue-600"
                        />
                      </td>
                      <td className="text-center">
                        <input
                          type="number"
                          value={item.jumlahhari || ""}
                          onChange={(e) =>
                            handleJumlahHariChange("cuti", idx, Number(e.target.value))
                          }
                          className="px-2 py-1 w-16 text-center"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                onClick={() => handleAddRow("cuti")}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold"
              >
                + Tambah Cuti
              </button>
            </div>

            {/* === IZIN === */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="bg-blue-900 text-white text-lg font-bold text-center py-2 rounded-lg mb-4">
                Tipe Izin + Hari
              </h2>
              <table className="w-full text-sm text-gray-700">
                <thead>
                  <tr>
                    <th className="text-left py-2">Jenis Izin</th>
                    <th className="text-center py-2">Checklist</th>
                    <th className="text-center py-2">Jumlah Hari</th>
                  </tr>
                </thead>
                <tbody>
                  {companyIzin.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="py-1">
                        <input
                          type="text"
                          value={item.deskripsi}
                          onChange={(e) =>
                            handleDeskripsiChange("izin", idx, e.target.value)
                          }
                          className={`w-full px-2 py-1 text-sm ${item.daftarizinid !== 0
                              ? "cursor-not-allowed"
                              : "bg-white"
                            }`}
                          placeholder="Tulis jenis izin..."
                          readOnly={item.daftarizinid !== 0}
                        />
                      </td>
                      <td className="text-center">
                        <input
                          type="checkbox"
                          checked={item.jumlahhari > 0}
                          onChange={() => handleCheckboxChange("izin", idx)}
                          className="w-4 h-4 accent-blue-600"
                        />
                      </td>
                      <td className="text-center">
                        <input
                          type="number"
                          value={item.jumlahhari || ""}
                          onChange={(e) =>
                            handleJumlahHariChange("izin", idx, Number(e.target.value))
                          }
                          className="px-2 py-1 w-16 text-center"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <button
                onClick={() => handleAddRow("izin")}
                className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold"
              >
                + Tambah Izin
              </button>
            </div>
          </div>

          <p className="text-xs text-red-500 italic mt-6">
            *Jika di-checklist maka akan muncul di pilihan cuti pegawai
          </p>
        </>
      )}

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
          className={`bg-green-500 hover:bg-green-600 text-sm text-white font-semibold py-2 px-6 rounded-full ${saving || disabled ? "opacity-70 cursor-not-allowed" : ""
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
    </main>
  );
}
