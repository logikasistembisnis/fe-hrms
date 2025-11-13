"use client";

import { useEffect, useState, useCallback } from "react";
import { getCompanies } from "@/api/companyApi";
import { getHariLiburNasional, getCompLiburNasional, saveCompLiburNasional, deleteCompLiburNasional } from "@/api/liburnasionalApi";
import { Company, HariLiburNasional, CompLiburNasional } from "@/api/data";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type CalendarValue = Date | [Date, Date] | null;

interface FormHariLiburProps {
  onNextStep: () => void;
  onBack: () => void;
}

function toLocalYYYYMMDD(date: Date) {
  const year = date.getFullYear();
  // getMonth() berbasis 0 (0 = Januari), jadi kita tambah 1
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export default function FormHariLibur({ onNextStep, onBack }: FormHariLiburProps) {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<string>("");
  const [hariLiburNasional, setHariLiburNasional] = useState<HariLiburNasional[]>([]);
  const [compLiburNasional, setCompLiburNasional] = useState<CompLiburNasional[]>([]);
  const [selectedLibur, setSelectedLibur] = useState<HariLiburNasional | null>(null);
  const [namatanggal, setNamatanggal] = useState<string>("");
  const [date, setDate] = useState<CalendarValue>(new Date());
  const [potongCuti, setPotongCuti] = useState<string>("Tidak");
  const [dokumenfilename, setDokumen] = useState<File | null>(null);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  //  Ambil master data & perusahaan
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [resCompanies, resHariLibur] = await Promise.all([
          getCompanies(),
          getHariLiburNasional(),
        ]);
        setCompanies(
          (resCompanies.data || []).sort((a, b) => a.companyid - b.companyid)
        );
        setHariLiburNasional(resHariLibur.data || []);
      } catch (err) {
        console.error("Gagal memuat data master:", err);
        setError("Gagal memuat data perusahaan");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Fungsi untuk membersihkan file
  const clearFile = () => {
    setDokumen(null);
    const fileInput = document.getElementById(
      "file-upload"
    ) as HTMLInputElement;
    if (fileInput) {
      fileInput.value = ""; // Mereset input file browser
    }
  };

  // Fungsi untuk mereset semua input form
  const resetForm = () => {
    setNamatanggal("");
    setDate(new Date());
    setPotongCuti("Tidak");
    setSelectedLibur(null);
    clearFile(); // Memanggil fungsi clear file
  };

  const fetchCompLiburNasional = useCallback(async () => {
    if (!selectedCompany) {
      setCompLiburNasional([]); // Kosongkan daftar jika tidak ada perusahaan
      return;
    }
    try {
      setLoading(true);
      const selected = companies.find((c) => c.name === selectedCompany);
      if (!selected) return;

      const [resCompLibur] = await Promise.all([getCompLiburNasional()]);

      const allCompLiburNasional: CompLiburNasional[] = resCompLibur.data || [];

      const filteredLibur = allCompLiburNasional.filter(
        (x) => x.companyid === selected.companyid
      );

      //  Merge daftar libur + data company
      const mergedLibur: CompLiburNasional[] = hariLiburNasional.map(
        (master) => {
          const existing = filteredLibur.find(
            (c) => c.hariliburnasid === master.hariliburnasid
          );
          return {
            compliburnasionalid: existing?.compliburnasionalid ?? 0,
            companyid: selected.companyid,
            hariliburnasid: master.hariliburnasid,
            startdate: master.startdate,
            enddate: master.enddate,
            namatanggal: master.namatanggal, 
            potongcutitahunan: existing
              ? existing.potongcutitahunan
              : undefined,
            dokumenfilename: existing?.dokumenfilename ?? "",
            dokumen_url: existing?.dokumen_url ?? null,
          };
        }
      );

      // tambahkan data baru (hariliburnasid = 0)
      const newLibur = filteredLibur.filter((c) => c.hariliburnasid === 0);
      const finalLibur = [...mergedLibur, ...newLibur];

      setCompLiburNasional(finalLibur);
    } catch (err) {
      console.error("Gagal memuat company libur:", err);
    } finally {
      setLoading(false);
    }
  }, [selectedCompany, hariLiburNasional, companies]); // dependensi

  //  Ambil data compliburnasional ketika perusahaan dipilih
  useEffect(() => {
    fetchCompLiburNasional();
  }, [fetchCompLiburNasional]); // Panggil fungsi useCallback

  // Mengecek apakah user pilih range atau tanggal tunggal
  const isRange = Array.isArray(date);

  //  Saat memilih keterangan libur, otomatis tampilkan tanggal di kalender
  const handleSelectKeterangan = (nama: string) => {
    const libur = hariLiburNasional.find((l) => l.namatanggal === nama);
    setSelectedLibur(libur || null);
    if (libur) {
      setDate([new Date(libur.startdate), new Date(libur.enddate)]);
    } else {
      setDate(new Date());
    }
  };

  //  Upload dokumen handler
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setDokumen(e.target.files[0]);
    } else {
      // Jika user cancel dialog, clear file
      setDokumen(null);
    }
  };

  //  Simpan data (baru atau update)
  const handleSave = async () => {
    if (!selectedCompany || !date) return;
    try {
      setSaving(true);
      const selected = companies.find((c) => c.name === selectedCompany);
      if (!selected) return;

      const formData = new FormData();

      // jika user pilih dari master → pakai hariliburnasid dan compliburnasionalid
      if (selectedLibur) {
        const existing = compLiburNasional.find(
          (x) => x.hariliburnasid === selectedLibur.hariliburnasid
        );
        if (existing && existing.compliburnasionalid !== 0) {
          formData.append("compliburnasionalid", existing.compliburnasionalid.toString());
        }
        formData.append("hariliburnasid", selectedLibur.hariliburnasid.toString());
        formData.append("namatanggal", selectedLibur.namatanggal);
      } else {
        // data baru (tidak dari master)
        formData.append("hariliburnasid", "0");
        formData.append("namatanggal", namatanggal);
      }

      formData.append("companyid", selected.companyid.toString());
      formData.append(
        "startdate",
        toLocalYYYYMMDD(isRange ? date[0] : (date as Date))
      );

      // Kirim enddate hanya jika range
      if (isRange && date[1] && date[0].getTime() !== date[1].getTime()) {
        formData.append("enddate", toLocalYYYYMMDD(date[1] as Date));
      }
      formData.append("potongcutitahunan", potongCuti === "Ya" ? "1" : "0");

      if (dokumenfilename) formData.append("dokumenfilename", dokumenfilename);

      await saveCompLiburNasional(formData);
      alert("Data berhasil disimpan!");

      resetForm();
      fetchCompLiburNasional();
    } catch (err) {
      console.error("Gagal menyimpan data:", err);
      alert("Gagal menyimpan data");
    } finally {
      setSaving(false);
    }
  };

  // Hapus data compliburnasional
  const handleDelete = async (id: number) => {
    if (!confirm("Apakah Anda yakin ingin menghapus data ini?")) return;
    try {
      await deleteCompLiburNasional(id);
      alert("Data berhasil dihapus!");
      fetchCompLiburNasional();
    } catch (err) {
      console.error("Gagal menghapus data:", err);
      alert("Gagal menghapus data");
    }
  };

  return (
    <main className="min-h-screen p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        9. Hari Libur Nasional
      </h1>

      <div className="px-5 mb-3">
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
          <div className="flex gap-4">
            {/* --- Kolom Input --- */}
            <div className="w-1/4 p-6">
              <h2 className="bg-blue-900 text-white font-semibold text-center py-2 rounded-lg mb-4">
                Masukkan/Edit Daftar Libur
              </h2>

              {/* Keterangan */}
              <div className="relative overflow-visible">
                <label className="block mb-1 font-medium">Keterangan</label>
                <input
                  list="daftar-libur"
                  type="text"
                  value={namatanggal}
                  onChange={(e) => {
                    const value = e.target.value;
                    setNamatanggal(value);
                    handleSelectKeterangan(value);
                  }}
                  placeholder="Libur Nasional"
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
                <datalist id="daftar-libur">
                  {compLiburNasional.map((item, idx) => (
                    <option key={idx} value={item.namatanggal} />
                  ))}
                </datalist>
              </div>

              {/* Kalender */}
              <div className="mt-4">
                <label className="block mb-2 font-medium text-gray-800">
                  Kalender
                </label>
                <div>
                  <Calendar
                    onChange={(value) => {
                      if (Array.isArray(value)) {
                        const [start, end] = value;

                        if (start && end) {
                          const startDate = toLocalYYYYMMDD(start);
                          const endDate = toLocalYYYYMMDD(end);
                          // Kalau tanggal sama → single date
                          if (startDate === endDate) {
                            setDate(start);
                          } else {
                            setDate([start, end]);
                          }
                        }
                      } else if (value instanceof Date) {
                        setDate(value);
                      }
                    }}
                    value={date}
                    selectRange={true}
                    className="rounded-lg"
                  />

                  <div className="mt-2 text-sm text-gray-600">
                    {isRange && date ? (
                      <>
                        <p>
                          <strong>Dari:</strong> {date[0].toLocaleDateString("id-ID")}
                        </p>
                        <p>
                          <strong>Sampai:</strong> {date[1].toLocaleDateString("id-ID")}
                        </p>
                      </>
                    ) : (
                      date && (
                        <p>
                          <strong>Tanggal:</strong> {date.toLocaleDateString("id-ID")}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Potong Cuti Tahunan */}
              <div className="mt-4">
                <label className="block mb-1 font-medium">Potong Cuti Tahunan</label>
                <select
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  value={potongCuti}
                  onChange={(e) => setPotongCuti(e.target.value)}
                >
                  <option>Ya</option>
                  <option>Tidak</option>
                </select>
              </div>

              {/* Upload Dokumen */}
              <div className="mt-4">
                <label className="block mb-1 font-medium">Upload Dokumen</label>
                <input
                  type="file"
                  id="file-upload"
                  accept="application/pdf,image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />

                {/* UI kustom */}
                <div className="flex items-center gap-3">
                  <label
                    htmlFor="file-upload"
                    className="cursor-pointer flex-shrink-0 rounded-lg border border-gray-400 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Pilih File
                  </label>
                  <span className="text-sm text-gray-600 flex-1 truncate overflow-hidden whitespace-nowrap">
                    {dokumenfilename ? dokumenfilename.name : "Belum ada file dipilih"}
                  </span>
                  {dokumenfilename && (
                    <button
                      type="button"
                      onClick={clearFile}
                      className="flex-shrink-0 text-red-500 hover:text-red-700 text-xl font-bold"
                      aria-label="Hapus file"
                    >
                      &times;
                    </button>
                  )}
                </div>
              </div>

              {/* Tombol Tambah */}
              <div className="mt-3">
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className={`bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full text-sm w-full transition ${saving ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                >
                  {saving ? "Menyimpan..." : "Simpan"}
                </button>
              </div>
            </div>

            {/* --- Kolom Daftar Hari Libur --- */}
            <div className="w-3/4 p-6">
              <h2 className="bg-blue-900 text-white font-semibold text-center py-2 rounded-lg mb-4">
                Daftar Hari Libur Nasional
              </h2>

              <table className="min-w-full border border-gray-300 text-sm text-gray-800 rounded-lg overflow-hidden">
                <thead className="bg-gray-100 text-left">
                  <tr>
                    <th className="px-4 py-2 border-b">Keterangan</th>
                    <th className="px-4 py-2 border-b">Tanggal</th>
                    <th className="px-4 py-2 border-b text-center">Potong Cuti Tahunan</th>
                    <th className="px-4 py-2 border-b">Dokumen</th>
                    <th className="px-4 py-2 border-b text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {compLiburNasional.map((item, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border-b border-gray-200">{item.namatanggal}</td>
                      <td className="px-4 py-2 border-b border-gray-200">{item.startdate ? toLocalYYYYMMDD(new Date(item.startdate)) : ''} {item.enddate ? ` / ${toLocalYYYYMMDD(new Date(item.enddate))}` : ''}</td>
                      <td className="px-4 py-2 border-b border-gray-200 text-center">
                        {item.potongcutitahunan === undefined ||
                          item.potongcutitahunan === null
                          ? "-"
                          : item.potongcutitahunan
                            ? "Ya"
                            : "Tidak"}
                      </td>
                      <td className="px-4 py-2 border-b border-gray-200 text-center">
                        {item.dokumen_url ? (
                          <a
                            href={item.dokumen_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            Lihat Dokumen
                          </a>
                        ) : (
                          "-"
                        )}
                      </td>
                      <td className="px-4 py-2 border-b border-gray-200 text-center">
                        {item.compliburnasionalid && item.compliburnasionalid !== 0 ? (
                          <button
                            onClick={() => handleDelete(item.compliburnasionalid!)}
                            className="text-red-600 hover:text-red-800 font-semibold cursor-pointer"
                          >
                            Hapus
                          </button>
                        ) : (
                          "-"
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
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
          onClick={onNextStep}
          className="bg-blue-500 hover:bg-blue-600 text-sm text-white font-semibold py-2 px-6 rounded-full"
        >
          Lanjut
        </button>
      </div>
    </main>
  );
}
