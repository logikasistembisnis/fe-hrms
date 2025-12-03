"use client";

import { useEffect, useState, useMemo } from "react";
import { getCompanies } from "@/api/companyApi";
import {
  getCompanyWorkingHours,
  getCompanyWorkingBreak,
  saveCompanyWorkingHours,
  saveCompanyWorkingBreak,
  deleteCompanyWorkingHours,
  deleteCompanyWorkingBreak,
} from "@/api/companyworkingApi";
import { Company, WorkingHours, WorkingBreak } from "@/api/data";

interface FormAturJamKerjaProps {
  onNextStep: () => void;
  onBack: () => void;
}

interface WorkingDataDisplay extends WorkingHours {
  breaks: WorkingBreak[];
}

interface FormBreakState {
  id?: number | null;
  companyworkinghoursid?: number | null;
  starttime: string;
  endtime: string;
}

export default function FormAturJamKerja({ onNextStep, onBack }: FormAturJamKerjaProps) {
  // helper: konversi "HH:MM:SS" atau "HH:MM" => "HH:MM"
  const toHM = (time?: string | null) => {
    if (!time && time !== "") return "";
    const t = String(time ?? "");
    // jika sudah "HH:MM" return langsung (safety)
    if (/^\d{1,2}:\d{2}$/.test(t)) {
      const [hh, mm] = t.split(":");
      return `${hh.padStart(2, "0")}:${mm}`;
    }
    // jika "HH:MM:SS" atau "HH:MM:SS.sss" -> ambil dua bagian pertama
    if (t.includes(":")) {
      const parts = t.split(":");
      const hh = (parts[0] || "00").padStart(2, "0");
      const mm = (parts[1] || "00").slice(0, 2);
      return `${hh}:${mm}`;
    }
    // fallback
    return t.slice(0, 5);
  };

  // --- STATE DATA MASTER ---
  const [companies, setCompanies] = useState<Company[]>([]);
  const [rawHours, setRawHours] = useState<WorkingHours[]>([]);
  const [rawBreaks, setRawBreaks] = useState<WorkingBreak[]>([]);

  // --- STATE FILTERS ---
  const [selectedCompanyId, setSelectedCompanyId] = useState<number | string>("");
  const [filterTipe, setFilterTipe] = useState<string>("");
  const [filterKategori, setFilterKategori] = useState<string>("");
  const [filterSkema, setFilterSkema] = useState<string>("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // --- STATE UNTUK ADD / EDIT FORM (MODAL) ---
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    tipejadwal: "Shift",
    kategori: "Pagi",
    skema: "6-1",
    durasi: 8,
    durasiistirahat: 1,
    jammasuk: "08:00",
    jamkeluar: "16:00",
    kodeshift: "",
  });

  const [formBreaks, setFormBreaks] = useState<FormBreakState[]>([]);
  const [isDeleting, setIsDeleting] = useState(false);

  // Fetch Data
  const fetchAll = async () => {
    try {
      setLoading(true);
      setError(null);
      const [resCompanies, resHours, resBreaks] = await Promise.all([
        getCompanies(),
        getCompanyWorkingHours(),
        getCompanyWorkingBreak(),
      ]);
      const companiesData = (resCompanies.data || []).sort((a, b) => a.companyid - b.companyid);
      const hoursData = resHours.data || [];
      const breaksData = resBreaks.data || [];

      setCompanies(companiesData);
      setRawHours(hoursData);
      setRawBreaks(breaksData);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Gagal memuat data dari server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  // Logic Filter & Join
  const filteredData: WorkingDataDisplay[] = useMemo(() => {
    if (!selectedCompanyId) return [];

    let data = rawHours.filter((h) => h.companyid === Number(selectedCompanyId));

    if (filterTipe) data = data.filter((item) => item.tipejadwal === filterTipe);
    if (filterKategori) data = data.filter((item) => item.kategori === filterKategori);
    if (filterSkema) data = data.filter((item) => item.skema === filterSkema);

    return data.map((hourItem) => {
      // NOTE: normalisasi jam untuk tampilan: tampilkan hanya HH:MM
      const myBreaks = rawBreaks
        .filter((b) => b.companyworkinghoursid === hourItem.companyworkinghoursid)
        .map((b) => ({ ...b, starttime: toHM(b.starttime), endtime: toHM(b.endtime) }));
      myBreaks.sort((a, b) => a.starttime.localeCompare(b.starttime));

      return {
        ...hourItem,
        jammasuk: toHM(hourItem.jammasuk),
        jamkeluar: toHM(hourItem.jamkeluar),
        breaks: myBreaks,
      };
    });
  }, [rawHours, rawBreaks, selectedCompanyId, filterTipe, filterKategori, filterSkema]);

  // --- MODAL HELPERS ---
  const openCreateModal = () => {
    if (!selectedCompanyId) {
      alert("Mohon pilih perusahaan terlebih dahulu.");
      return;
    }
    setEditingId(null);
    setFormData({
      tipejadwal: filterTipe || "Shift",
      kategori: filterKategori || "Pagi",
      skema: filterSkema || "6-1",
      durasi: 8,
      durasiistirahat: 1,
      jammasuk: "08:00",
      jamkeluar: "16:00",
      kodeshift: "",
    });
    setFormBreaks([]);
    setIsModalOpen(true);
  };

  const openEditModal = (row: WorkingDataDisplay) => {
    setEditingId(row.companyworkinghoursid);
    setFormData({
      tipejadwal: row.tipejadwal,
      kategori: row.kategori,
      skema: row.skema,
      durasi: row.durasi,
      durasiistirahat: row.durasiistirahat,
      jammasuk: toHM(row.jammasuk),
      jamkeluar: toHM(row.jamkeluar),
      kodeshift: row.kodeshift || "",
    });

    setFormBreaks(
      (row.breaks || []).map((b) => ({
        id: b.id,
        companyworkinghoursid: b.companyworkinghoursid,
        starttime: toHM(b.starttime),
        endtime: toHM(b.endtime),
      }))
    );
    setIsModalOpen(true);
  };

  const addBreakField = () => {
    setFormBreaks((prev) => [
      ...prev,
      { id: null, companyworkinghoursid: editingId ?? null, starttime: "12:00", endtime: "13:00" },
    ]);
  };

  const removeBreakField = (index: number) => {
    setFormBreaks((prev) => prev.filter((_, i) => i !== index));
  };

  const updateBreakField = (index: number, key: "starttime" | "endtime", value: string) => {
    setFormBreaks((prev) => prev.map((b, i) => (i === index ? { ...b, [key]: value } : b)));
  };

  // --- SUBMIT HANDLER ---
  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!selectedCompanyId) {
      alert("Perusahaan belum dipilih.");
      console.groupEnd();
      return;
    }

    try {
      setIsSaving(true);
      const companyidNum = Number(selectedCompanyId);

      // 1. Build Payload Jam Kerja
      const hourPayload: Partial<WorkingHours> = {
        ...(editingId ? { companyworkinghoursid: editingId } : {}),
        companyid: companyidNum,
        tipejadwal: formData.tipejadwal,
        kategori: formData.kategori,
        skema: formData.skema,
        durasi: Number(formData.durasi),
        durasiistirahat: Number(formData.durasiistirahat),
        jammasuk: toHM(formData.jammasuk),
        jamkeluar: toHM(formData.jamkeluar),
        kodeshift: formData.kodeshift,
      };

      // 2. Simpan Header
      const resHours = await saveCompanyWorkingHours([hourPayload]);

      // --- EKSTRAKSI ID ---
      let targetCompanyWorkingHoursId: number | null = editingId ?? null;
      const respUnknown: unknown = resHours;

      const extractNumberProp = (obj: Record<string, unknown>, propNames: string[]) => {
        for (const p of propNames) {
          if (p in obj) {
            const v = obj[p];
            if (typeof v === "number") return v;
            if (typeof v === "string" && v.trim() !== "" && !Number.isNaN(Number(v))) return Number(v);
          }
        }
        return null;
      };

      if (respUnknown && typeof respUnknown === "object") {
        const respObj = respUnknown as Record<string, unknown>;
        if ("data" in respObj) {
          const d = respObj["data"];
          if (Array.isArray(d) && d.length > 0 && typeof d[0] === "object") {
            const first = d[0] as Record<string, unknown>;
            const maybe = extractNumberProp(first, ["companyworkinghoursid", "id", "companyworkinghours_id"]);
            if (maybe) targetCompanyWorkingHoursId = maybe;
          } else if (d && typeof d === "object") {
            const obj = d as Record<string, unknown>;
            const maybe = extractNumberProp(obj, ["companyworkinghoursid", "id", "companyworkinghours_id"]);
            if (maybe) targetCompanyWorkingHoursId = maybe;
          }
        }
        if (!targetCompanyWorkingHoursId && "results" in respObj) {
          const r = respObj["results"];
          if (Array.isArray(r) && r.length > 0 && typeof r[0] === "object") {
            const firstRes = r[0] as Record<string, unknown>;
            if ("data" in firstRes && firstRes["data"] && typeof firstRes["data"] === "object") {
              const inner = firstRes["data"] as Record<string, unknown>;
              const maybe = extractNumberProp(inner, ["companyworkinghoursid", "id", "companyworkinghours_id"]);
              if (maybe) targetCompanyWorkingHoursId = maybe;
            } else {
              const maybe = extractNumberProp(firstRes, ["companyworkinghoursid", "id", "companyworkinghours_id"]);
              if (maybe) targetCompanyWorkingHoursId = maybe;
            }
          }
        }
      }

      // 4. Fallback GET (compare times tanpa detik)
      if (!targetCompanyWorkingHoursId) {
        const resGet = await getCompanyWorkingHours();
        const freshHours: WorkingHours[] = resGet.data || [];
        const matched = freshHours.find(
          (h) =>
            h.companyid === companyidNum &&
            h.tipejadwal === formData.tipejadwal &&
            h.kategori === formData.kategori &&
            toHM(h.jammasuk) === toHM(formData.jammasuk) &&
            toHM(h.jamkeluar) === toHM(formData.jamkeluar) &&
            ((h.kodeshift ?? "") === (formData.kodeshift ?? ""))
        );
        if (matched) targetCompanyWorkingHoursId = matched.companyworkinghoursid;
      }

      if (!targetCompanyWorkingHoursId) {
        throw new Error(
          "Gagal mendapatkan ID Jam Kerja untuk menyimpan detail istirahat. Backend mungkin tidak mengembalikan ID."
        );
      }

      // 5. Build Payload Breaks (pastikan kirim HH:MM juga)
      const validBreaks = formBreaks.filter((b) => b.starttime && b.endtime);

      if (validBreaks.length > 0) {
        const breaksPayload: Partial<WorkingBreak>[] = validBreaks.map((b) => ({
          ...(b.id ? { id: b.id } : {}),
          companyworkinghoursid: targetCompanyWorkingHoursId ?? undefined,
          starttime: toHM(b.starttime),
          endtime: toHM(b.endtime),
        }));

        await saveCompanyWorkingBreak(breaksPayload);
      }

      // 6. Refresh & Close
      await fetchAll();
      alert("Simpan berhasil.");
      setIsModalOpen(false);
    } catch (err) {
      console.error("Gagal menyimpan:", err);
      alert("Terjadi kesalahan saat menyimpan.");
    } finally {
      setIsSaving(false);
      console.groupEnd();
    }
  };

  const handleDeleteWorkingHours = async () => {
    if (!editingId) return;
    const c = confirm("Anda yakin ingin menghapus jadwal ini beserta semua detail istirahat terkait?");
    if (!c) return;

    try {
      setIsDeleting(true);
      await deleteCompanyWorkingHours(editingId);
      await fetchAll(); // refresh data
      setIsModalOpen(false);
      alert("Jadwal berhasil dihapus.");
    } catch (err) {
      console.error("Gagal menghapus jadwal:", err);
      alert("Gagal menghapus jadwal.");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleDeleteBreak = async (index: number) => {
    const b = formBreaks[index];
    // jika tidak ada id -> hanya hapus di UI
    if (!b || !b.id) {
      setFormBreaks((prev) => prev.filter((_, i) => i !== index));
      return;
    }

    const c = confirm("Anda yakin ingin menghapus detail istirahat ini?");
    if (!c) return;

    try {
      setIsDeleting(true);
      await deleteCompanyWorkingBreak(b.id as number);
      await fetchAll();
      // jika modal masih terbuka, juga update formBreaks agar UI modal ter-sync
      const freshBreaks = (await getCompanyWorkingBreak()).data || [];
      // filter breaks yang milik editingId dan ambil untuk setFormBreaks (transform ke HM jika perlu)
      const myBreaks = (freshBreaks.filter(x => x.companyworkinghoursid === editingId) || []).map(x => ({
        id: x.id,
        companyworkinghoursid: x.companyworkinghoursid,
        starttime: toHM(x.starttime),
        endtime: toHM(x.endtime),
      }));
      setFormBreaks(myBreaks);
      alert("Detail istirahat berhasil dihapus.");
    } catch (err) {
      console.error("Gagal menghapus detail istirahat:", err);
      alert("Gagal menghapus detail istirahat.");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <main className="min-h-screen px-6 py-10 relative">
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">10. Atur Jam Kerja</h1>
      <p className="text-sm text-gray-600 mb-6">Data Jam Kerja & Detail Istirahat — klik baris untuk edit</p>

      {/* FILTER SECTION */}
      <div className="p-5 shadow rounded-sm mb-6 bg-white">
        {loading ? (
          <p className="text-sm text-gray-500">Sedang memuat data...</p>
        ) : error ? (
          <p className="text-sm text-red-500">{error}</p>
        ) : (
          <div className="flex flex-wrap md:flex-nowrap gap-4 items-end justify-between">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 flex-grow">
              {/* Filter Perusahaan */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-700">Perusahaan</label>
                <select
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
                  value={selectedCompanyId}
                  onChange={(e) => setSelectedCompanyId(e.target.value)}
                >
                  <option value="">Pilih Perusahaan</option>
                  {companies.map((c) => (
                    <option key={c.companyid} value={c.companyid}>
                      {c.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Filter Tipe */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-700">Tipe Jadwal</label>
                <select
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
                  value={filterTipe}
                  onChange={(e) => setFilterTipe(e.target.value)}
                  disabled={!selectedCompanyId}
                >
                  <option value="">Semua</option>
                  <option value="Shift">Shift</option>
                  <option value="Non Shift">Non Shift</option>
                </select>
              </div>

              {/* Filter Kategori */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-700">Kategori</label>
                <select
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
                  value={filterKategori}
                  onChange={(e) => setFilterKategori(e.target.value)}
                  disabled={!selectedCompanyId}
                >
                  <option value="">Semua</option>
                  <option value="Pagi">Pagi</option>
                  <option value="Siang">Siang</option>
                  <option value="Malam">Malam</option>
                </select>
              </div>

              {/* Filter Skema */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold text-gray-700">Skema</label>
                <select
                  className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full"
                  value={filterSkema}
                  onChange={(e) => setFilterSkema(e.target.value)}
                  disabled={!selectedCompanyId}
                >
                  <option value="">Semua</option>
                  <option value="6-1">6-1</option>
                  <option value="5-2">5-2</option>
                </select>
              </div>
            </div>

            <div className="flex-shrink-0">
              <button
                onClick={openCreateModal}
                disabled={!selectedCompanyId || isSaving}
                className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md text-sm font-medium shadow disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                + Tambah Jadwal
              </button>
            </div>
          </div>
        )}
      </div>

      {/* TABLE SECTION */}
      <div className="overflow-x-auto rounded-sm shadow mb-10 bg-white">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-blue-900 text-white text-center">
              <th className="px-4 py-2">Tipe Jadwal</th>
              <th className="px-4 py-2">Kategori</th>
              <th className="px-4 py-2">Skema</th>
              <th className="px-4 py-2">Durasi</th>
              <th className="px-4 py-2">Durasi Istirahat</th>
              <th className="px-4 py-2">Jam Masuk</th>
              <th className="px-4 py-2">Jam Keluar</th>
              <th className="px-4 py-2">Istirahat Mulai</th>
              <th className="px-4 py-2">Istirahat Selesai</th>
              <th className="px-4 py-2">Kode Shift</th>
            </tr>
          </thead>
          <tbody>
            {!selectedCompanyId && (
              <tr>
                <td colSpan={10} className="px-4 py-8 text-center text-gray-500 italic">
                  Pilih perusahaan untuk melihat data.
                </td>
              </tr>
            )}
            {selectedCompanyId && filteredData.length === 0 && (
              <tr>
                <td colSpan={10} className="px-4 py-8 text-center text-gray-500 italic">
                  Data tidak ditemukan untuk filter ini.
                </td>
              </tr>
            )}

            {filteredData.map((row, idx) => (
              <tr
                key={row.companyworkinghoursid}
                className={`text-center items-center ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50 cursor-pointer`}
                onClick={() => openEditModal(row)}
                title="Klik untuk edit"
              >
                <td className="px-4 py-2 align-top pt-3">{row.tipejadwal}</td>
                <td className="px-4 py-2 align-top pt-3">{row.kategori}</td>
                <td className="px-4 py-2 align-top pt-3">{row.skema}</td>
                <td className="px-4 py-2 align-top pt-3">{row.durasi} Jam</td>
                <td className="px-4 py-2 align-top pt-3">{row.durasiistirahat} Jam</td>
                <td className="px-4 py-2 align-top pt-3">{toHM(row.jammasuk)}</td>
                <td className="px-4 py-2 align-top pt-3">{toHM(row.jamkeluar)}</td>
                <td className="px-4 py-2 align-top">
                  {row.breaks.length > 0 ? (
                    <div className="flex flex-col gap-1">
                      {row.breaks.map((b) => (
                        <span key={b.id} className="block border-b border-blue-100 last:border-0 pb-1 pt-1">
                          {toHM(b.starttime)}
                        </span>
                      ))}
                    </div>
                  ) : (
                    "-"
                  )}
                </td>
                <td className="px-4 py-2 align-top">
                  {row.breaks.length > 0 ? (
                    <div className="flex flex-col gap-1">
                      {row.breaks.map((b) => (
                        <span key={b.id} className="block border-b border-blue-100 last:border-0 pb-1 pt-1">
                          {toHM(b.endtime)}
                        </span>
                      ))}
                    </div>
                  ) : (
                    "-"
                  )}
                </td>
                <td className="px-4 py-2 align-top pt-3 font-mono text-gray-600">{row.kodeshift}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MODAL ADD / EDIT DATA */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">{editingId ? "Edit Jadwal" : "Tambah Jadwal Baru"}</h2>
              <div className="flex items-center gap-3">
                {editingId && (
                  <button
                    type="button"
                    onClick={handleDeleteWorkingHours}
                    disabled={isDeleting}
                    className="text-xs bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded"
                  >
                    {isDeleting ? "Menghapus..." : "Hapus Jadwal"}
                  </button>
                )}
              </div>
            </div>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              {/* Row 1: Tipe & Kategori */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Tipe Jadwal</label>
                  <select
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                    value={formData.tipejadwal}
                    onChange={(e) => setFormData({ ...formData, tipejadwal: e.target.value })}
                    required
                  >
                    <option value="Shift">Shift</option>
                    <option value="Non Shift">Non Shift</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Kategori</label>
                  <select
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                    value={formData.kategori}
                    onChange={(e) => setFormData({ ...formData, kategori: e.target.value })}
                    required
                  >
                    <option value="Pagi">Pagi</option>
                    <option value="Siang">Siang</option>
                    <option value="Malam">Malam</option>
                  </select>
                </div>
              </div>

              {/* Row 2: Skema & Kode Shift */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Skema</label>
                  <select
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                    value={formData.skema}
                    onChange={(e) => setFormData({ ...formData, skema: e.target.value })}
                    required
                  >
                    <option value="6-1">6-1</option>
                    <option value="5-2">5-2</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Kode Shift</label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                    value={formData.kodeshift}
                    onChange={(e) => setFormData({ ...formData, kodeshift: e.target.value })}
                    placeholder="Contoh: PAGI-A"
                  />
                </div>
              </div>

              {/* Row 3: Jam Masuk, Keluar, Durasi Kerja & Durasi Istirahat */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Jam Masuk</label>
                  <input
                    type="time"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                    value={formData.jammasuk}
                    onChange={(e) => setFormData({ ...formData, jammasuk: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Jam Keluar</label>
                  <input
                    type="time"
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                    value={formData.jamkeluar}
                    onChange={(e) => setFormData({ ...formData, jamkeluar: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Durasi Kerja (Jam)</label>
                  <input
                    type="number"
                    min={0}
                    step={0.5}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                    value={formData.durasi}
                    onChange={(e) => setFormData({ ...formData, durasi: Number(e.target.value) })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Durasi Istirahat (Jam)</label>
                  <input
                    type="number"
                    min={0}
                    step={0.5}
                    className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
                    value={formData.durasiistirahat}
                    onChange={(e) => setFormData({ ...formData, durasiistirahat: Number(e.target.value) })}
                    required
                  />
                </div>
              </div>

              {/* Breaks list */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-sm font-semibold text-gray-700">Waktu Istirahat (Detail)</label>
                  <div>
                    <button
                      type="button"
                      onClick={addBreakField}
                      className="text-xs bg-blue-900 text-white px-3 py-1 rounded mr-2"
                    >
                      + Tambah Istirahat
                    </button>
                  </div>
                </div>

                {formBreaks.length === 0 ? (
                  <div className="text-sm text-gray-500 italic">Belum ada detail istirahat</div>
                ) : (
                  <div className="grid gap-2">
                    {formBreaks.map((b, i) => (
                      <div key={i} className="grid grid-cols-3 gap-2 items-center">
                        <input
                          type="time"
                          value={b.starttime}
                          onChange={(ev) => updateBreakField(i, "starttime", ev.target.value)}
                          className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        />
                        <input
                          type="time"
                          value={b.endtime}
                          onChange={(ev) => updateBreakField(i, "endtime", ev.target.value)}
                          className="w-full border border-gray-300 rounded px-2 py-1 text-sm"
                        />
                        <div className="flex gap-2 justify-end">
                          <button
                            type="button"
                            onClick={() => handleDeleteBreak(i)}
                            disabled={isDeleting}
                            className="text-xs bg-red-600 text-white px-2 py-1 rounded"
                            title={b.id ? "Hapus dari server" : "Hapus dari UI"}
                          >
                            Hapus
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

              </div>

              <div className="pt-4 flex justify-end gap-2 border-t border-gray-100 mt-4">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded"
                  disabled={isSaving}
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm bg-blue-900 text-white rounded hover:bg-blue-800"
                  disabled={isSaving}
                >
                  {isSaving ? "Menyimpan..." : "Simpan Jadwal"}
                </button>
              </div>
            </form>
          </div>
        </div>
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