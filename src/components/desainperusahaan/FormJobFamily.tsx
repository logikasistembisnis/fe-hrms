"use client";

import { useEffect, useState, ChangeEvent, useRef } from "react";
import { getCompanies } from "@/api/companyApi";
import { getJobFamily, saveJobFamily, saveNonactive } from "@/api/jobfamilyApi";
import { Company, CompanyJobFamily, CompanySubFamily } from "@/api/data";

interface FormJobFamilyProps {
  onNextStep: () => void;
  onBack: () => void;
}

// --- 1. TYPE DEFINITIONS & GENERIC COMPONENT ---

// Tipe Generic untuk opsi dropdown
interface AutocompleteOption<T> {
  id: number;
  name: string;
  original: T;
}

interface AutocompleteProps<T> {
  label: string;
  value: string;
  onChange: (val: string) => void;
  onSelect: (item: T) => void;
  options: AutocompleteOption<T>[];
  placeholder?: string;
  disabled?: boolean;
}

// Kita gunakan function declaration agar Generic <T> lebih aman di parsing TSX
function AutocompleteInput<T>({
  label,
  value,
  onChange,
  onSelect,
  options,
  placeholder,
  disabled = false,
}: AutocompleteProps<T>) {
  const [showDropdown, setShowDropdown] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filteredOptions = options.filter((opt) =>
    opt.name.toLowerCase().includes(value.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={wrapperRef}>
      <label className="text-xs block mb-1 font-medium uppercase">{label}</label>
      <input
        className={`w-full border border-gray-300 rounded px-2 py-2 ${disabled ? "bg-gray-100 cursor-not-allowed" : ""
          }`}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
          setShowDropdown(true);
        }}
        onFocus={() => setShowDropdown(true)}
        placeholder={placeholder}
        disabled={disabled}
      />
      {showDropdown && filteredOptions.length > 0 && !disabled && (
        <ul className="absolute z-10 w-full bg-white border border-gray-300 mt-1 max-h-48 overflow-y-auto shadow-lg rounded-sm text-sm">
          {filteredOptions.map((opt) => (
            <li
              key={opt.id}
              className="px-3 py-2 hover:bg-blue-50 cursor-pointer text-gray-700"
              onClick={() => {
                onSelect(opt.original);
                setShowDropdown(false);
              }}
            >
              {opt.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function FormJobFamily({ onNextStep, onBack }: FormJobFamilyProps) {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState<number | "">("");
  const [loadingCompanies, setLoadingCompanies] = useState(true);
  const [loadingJob, setLoadingJob] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const [jobfamily, setJobFamily] = useState<CompanyJobFamily[] | null>(null);

  const [jobFamilyId, setJobFamilyId] = useState<number | null>(null);
  const [jobFamilyName, setJobFamilyName] = useState("");

  const [subFamilyName, setSubFamilyName] = useState("");
  const [dokumenFile, setDokumenFile] = useState<File | null>(null);
  const [dokumenDisplayName, setDokumenDisplayName] = useState("");

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        setLoadingCompanies(true);
        setError(null);
        const res = await getCompanies();
        const companiesData = (res.data || []).sort(
          (a: Company, b: Company) => a.companyid - b.companyid
        );
        setCompanies(companiesData);
      } catch (err) {
        console.error(err);
        setError("Gagal memuat daftar perusahaan.");
      } finally {
        setLoadingCompanies(false);
      }
    };
    fetchCompanies();
  }, []);

  const fetchJob = async (companyId: number) => {
    try {
      setLoadingJob(true);
      setError(null);
      const res = await getJobFamily(companyId);
      setJobFamily(res.data || []);
    } catch (err) {
      console.error(err);
      setError("Gagal memuat data Job Family");
    } finally {
      setLoadingJob(false);
    }
  };

  useEffect(() => {
    if (!selectedCompanyId) {
      setJobFamily(null);
      resetForm();
      return;
    }
    fetchJob(Number(selectedCompanyId));
  }, [selectedCompanyId]);

  const resetForm = () => {
    setJobFamilyId(null);
    setJobFamilyName("");
    setSubFamilyName("");
    handleClearFile();
    setError(null);
    setSuccessMsg(null);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setDokumenFile(e.target.files[0]);
    }
  };

  const handleClearFile = () => {
    setDokumenFile(null);
    setDokumenDisplayName("");
    const fileInput = document.getElementById("file-upload") as HTMLInputElement;
    if (fileInput) fileInput.value = "";
  };

  const jobFamilyOptions: AutocompleteOption<CompanyJobFamily>[] = (jobfamily || [])
    .filter((d) => d.active)
    .map((d) => ({ id: d.companyjobfamilyid, name: d.jobfamilyname, original: d }));

  const handleSave = async () => {
    setError(null);
    setSuccessMsg(null);

    if (!selectedCompanyId) {
      setError("Pilih perusahaan terlebih dahulu.");
      return;
    }

    // Validasi
    if (!jobFamilyName.trim()) {
      setError("Nama Job Family wajib diisi.");
      return;
    }
    if (subFamilyName.trim() && !jobFamilyName.trim()) {
      setError("Isi Job Family sebelum mengisi Sub Family.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("companyid", String(selectedCompanyId));

      if (jobFamilyId) formData.append("companyjobfamilyid", String(jobFamilyId));
      formData.append("jobfamilyname", jobFamilyName);

      if (subFamilyName.trim()) {
        formData.append("subfamilyname", subFamilyName);
      }

      if (dokumenDisplayName.trim()) {
        formData.append("dokumenname", dokumenDisplayName);
      }
      if (dokumenFile) formData.append("dokumenfile", dokumenFile, dokumenFile.name);

      formData.append("active", "true");

      await saveJobFamily(formData);

      setSuccessMsg("Data berhasil disimpan!");
      fetchJob(Number(selectedCompanyId));
      resetForm();

    } catch (err) {
      console.error(err);
      setError("Gagal menyimpan data.");
    }
  };

  // Helper Row Type
  type Row = {
    jobfamilyId: number;
    jobfamilyname: string;
    jobfamilycode: string;
    subfamilyId?: number | null;
    subfamilyname: string | null;
    subfamilycode: string | null;
    dokumenname?: string | null;
    dokumen_url?: string | null;
  };

  const buildRows = (): Row[] => {
    if (!jobfamily) return [];
    const rows: Row[] = [];
    jobfamily.forEach((job) => {
      if (!job.active) return;
      if (!job.subfamily || (job.subfamily && job.subfamily.length === 0)) {
        rows.push({
          jobfamilyId: job.companyjobfamilyid,
          jobfamilyname: job.jobfamilyname,
          jobfamilycode: job.jobfamilycode,
          subfamilyId: null,
          subfamilyname: null,
          subfamilycode: null,
          dokumenname: null,
          dokumen_url: null
        });
      } else {
        (job.subfamily || []).forEach((sub) => {
          if (!sub.active) return;
          rows.push({
            jobfamilyId: job.companyjobfamilyid,
            jobfamilyname: job.jobfamilyname,
            jobfamilycode: job.jobfamilycode,
            subfamilyId: sub.companysubfamilyid,
            subfamilyname: sub.subfamilyname,
            subfamilycode: sub.subfamilycode,
            dokumenname: sub.dokumenname ?? null,
            dokumen_url: sub.dokumen_url ?? null,
          });
        });
      }
    });
    return rows;
  };

  const rows = buildRows();

  // --- HANDLE NONACTIVE ---
  const handleNonactive = async (row: Row) => {
    if (!selectedCompanyId) return;

    // 1. Konfirmasi
    const isConfirmed = window.confirm("Apakah Anda yakin ingin menonaktifkan data ini?");
    if (!isConfirmed) return;

    try {
      setLoadingJob(true);
      const payload: Partial<CompanyJobFamily & CompanySubFamily> = {
        companyid: Number(selectedCompanyId),
        active: false
      };

      if (row.subfamilyId) {
        payload.companysubfamilyid = row.subfamilyId;
      } else {
        payload.companyjobfamilyid = row.jobfamilyId;
      }

      await saveNonactive(payload);
      fetchJob(Number(selectedCompanyId));

    } catch (err) {
      console.error(err);
      setError("Gagal menonaktifkan data.");
      setLoadingJob(false);
    }
  };

  return (
    <div className="p-6 bg-white text-sm">
      <h2 className="text-xl font-bold mb-4">13. KELOMPOK JABATAN (JOB FAMILY)</h2>

      <div className="mb-6 px-5">
        {loadingCompanies ? (
          <p className="text-sm text-gray-500">Memuat data perusahaan...</p>
        ) : (
          <select
            className="border border-gray-300 rounded-md px-3 py-2 w-64 text-sm focus:ring-blue-500 focus:border-blue-500"
            value={selectedCompanyId}
            onChange={(e) =>
              setSelectedCompanyId(e.target.value === "" ? "" : Number(e.target.value))
            }
          >
            <option value="">Pilih Perusahaan</option>
            {companies.map((c) => (
              <option key={c.companyid} value={c.companyid}>
                {c.name}
              </option>
            ))}
          </select>
        )}
      </div>

      <div className="w-full flex gap-4 items-start">
        <div className="w-1/4 space-y-4 px-5">
          <div className="text-center py-2 bg-blue-900 text-white rounded-sm text-sm font-medium">Tambah Kelompok Jabatan</div>

          {error && <div className="text-red-600 text-xs bg-red-50 p-2 rounded border border-red-200">{error}</div>}
          {successMsg && <div className="text-green-600 text-xs bg-green-50 p-2 rounded border border-green-200">{successMsg}</div>}

          <AutocompleteInput<CompanyJobFamily>
            label="Nama Kelompok Jabatan"
            value={jobFamilyName}
            options={jobFamilyOptions}
            onChange={(val) => {
              setJobFamilyName(val);
              setJobFamilyId(null);
              setSubFamilyName("");
            }}
            onSelect={(item) => {
              setJobFamilyName(item.jobfamilyname);
              setJobFamilyId(item.companyjobfamilyid);
              setSubFamilyName("");
            }}
            placeholder="Nama job family"
            disabled={!selectedCompanyId}
          />

          <div>
            <label className="text-xs block mb-1 font-medium uppercase">Nama Sub-Kelompok Jabatan</label>
            <input
              className={`w-full border border-gray-300 rounded px-2 py-2 ${!jobFamilyName ? "bg-gray-100" : ""}`}
              value={subFamilyName}
              onChange={(e) => setSubFamilyName(e.target.value)}
              placeholder="Nama sub-job family"
              disabled={!jobFamilyName}
            />
          </div>

          <div>
            <label className="text-xs block mb-1 font-medium uppercase">Upload Dokumen</label>
            <input
              type="file"
              id="file-upload-job"
              onChange={handleFileChange}
              className="hidden"
              disabled={!subFamilyName}
            />
            <div className="flex items-center gap-2 mt-1">
              <label
                htmlFor="file-upload-job"
                className={`cursor-pointer flex-shrink-0 rounded border border-gray-300 px-3 py-2 text-xs font-medium transition ${!subFamilyName ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-gray-50 text-gray-700 hover:bg-gray-100"}`}
              >
                Pilih File
              </label>
              <span className="text-xs text-gray-500 truncate flex-1">{dokumenFile ? dokumenFile.name : "Belum ada file dipilih"}</span>
              {dokumenFile && (
                <button type="button" onClick={handleClearFile} className="text-red-500 hover:text-red-700 font-bold px-1">&#x2715;</button>
              )}
            </div>

            {dokumenFile && (
              <div className="mt-3 animate-in fade-in slide-in-from-top-1 duration-300">
                <label className="text-xs block mb-1 font-medium">NAMA DOKUMEN</label>
                <input
                  className="w-full border border-gray-300 rounded px-2 py-2"
                  value={dokumenDisplayName}
                  onChange={(e) => setDokumenDisplayName(e.target.value)}
                  placeholder="Nama display dokumen..."
                />
              </div>
            )}
          </div>

          <div>
            <button
              onClick={handleSave}
              disabled={!selectedCompanyId}
              className={`w-full text-white px-4 py-2 rounded cursor-pointer ${!selectedCompanyId ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"}`}
            >
              + Tambah
            </button>
          </div>
        </div>

        <div className="w-3/4">
          <div className="overflow-x-auto rounded-sm shadow mb-10 bg-white">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-blue-900 text-white text-center">
                  <th className="px-4 py-2">Kelompok Jabatan (Job Family)</th>
                  <th className="px-4 py-2">Kode Job Family</th>
                  <th className="px-4 py-2">Sub-Kelompok Jabatan (Sub-Job Family)</th>
                  <th className="px-4 py-2">Kode Sub Family</th>
                  <th className="px-4 py-2">Dokumen</th>
                  <th className="px-4 py-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {loadingJob ? (
                  Array.from({ length: 3 }).map((_, i) => (
                    <tr key={i} className="odd:bg-white even:bg-gray-50 text-center">
                      <td colSpan={4} className="px-4 py-4 text-gray-400 animate-pulse">Loading data...</td>
                    </tr>
                  ))
                ) : !selectedCompanyId ? (
                  <tr>
                    <td colSpan={4} className="px-4 py-6 text-center text-gray-500">Pilih perusahaan untuk melihat data.</td>
                  </tr>
                ) : rows.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="px-4 py-6 text-center text-gray-500">Belum ada data Job Family.</td>
                  </tr>
                ) : (
                  rows.map((r, i) => (
                    <tr key={i} className="odd:bg-white even:bg-gray-50 text-center">
                      <td className="px-4 py-2 align-top pt-3">{r.jobfamilyname}</td>
                      <td className="px-4 py-2 align-top pt-3">{r.jobfamilycode}</td>
                      <td className="px-4 py-2 align-top pt-3">{r.subfamilyname ?? "-"}</td>
                      <td className="px-4 py-2 align-top pt-3">{r.subfamilycode ?? "-"}</td>
                      <td className="px-4 py-2 align-top pt-3">
                        {r.dokumen_url ? (
                          <a href={r.dokumen_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{r.dokumenname || "Unduh"}</a>
                        ) : (
                          "-"
                        )}
                      </td>
                      <td className="px-4 py-2 align-top pt-3">
                        <button onClick={() => handleNonactive(r)} className="px-2 py-1 rounded-sm bg-red-600 text-white hover:bg-red-700 transition">Nonaktif</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
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
    </div>
  );
}