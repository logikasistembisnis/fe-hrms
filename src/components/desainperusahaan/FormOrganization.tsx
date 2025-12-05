"use client";

import { useEffect, useState, ChangeEvent, useRef } from "react";
import { getCompanies } from "@/api/companyApi";
import { getOrganization, saveHierarchy, saveNonactive } from "@/api/organizationApi";
import {
  Company,
  CompanyDirectorate,
  CompanyDivision,
  CompanyDepartment,
  CompanyUnitKerja
} from "@/api/data";

interface FormOrganizationProps {
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

interface NonActivePayload {
  companyid: number;
  active: boolean;
  companyunitkerjaid?: number;
  companydepartmentid?: number;
  companydivisionid?: number;
  companydirectorateid?: number;
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

export default function FormOrganization({ onNextStep, onBack }: FormOrganizationProps) {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState<number | "">("");
  const [loadingCompanies, setLoadingCompanies] = useState(true);
  const [loadingOrg, setLoadingOrg] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const [organization, setOrganization] = useState<CompanyDirectorate[] | null>(null);

  // State Form
  const [dirId, setDirId] = useState<number | null>(null);
  const [dirName, setDirName] = useState("");

  const [divId, setDivId] = useState<number | null>(null);
  const [divName, setDivName] = useState("");

  const [deptId, setDeptId] = useState<number | null>(null);
  const [deptName, setDeptName] = useState("");

  const [unitName, setUnitName] = useState("");
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

  const fetchOrg = async (companyId: number) => {
    try {
      setLoadingOrg(true);
      setError(null);
      const res = await getOrganization(companyId);
      setOrganization(res.data || []);
    } catch (err) {
      console.error(err);
      setError("Gagal memuat struktur organisasi.");
    } finally {
      setLoadingOrg(false);
    }
  };

  useEffect(() => {
    if (!selectedCompanyId) {
      setOrganization(null);
      resetForm();
      return;
    }
    fetchOrg(Number(selectedCompanyId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCompanyId]);

  const resetForm = () => {
    setDirId(null); setDirName("");
    setDivId(null); setDivName("");
    setDeptId(null); setDeptName("");
    setUnitName("");
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

  // --- BUILD OPTIONS (TYPED) ---

  // 1. Options untuk Directorate (Generic T = CompanyDirectorate)
  const directorateOptions: AutocompleteOption<CompanyDirectorate>[] = (organization || [])
    .filter((d) => d.active)
    .map((d) => ({
      id: d.companydirectorateid,
      name: d.directoratename,
      original: d,
    }));

  // 2. Options untuk Division (Generic T = CompanyDivision)
  const divisionOptions: AutocompleteOption<CompanyDivision>[] = dirId
    ? (organization?.find((d) => d.companydirectorateid === dirId)?.divisions || [])
      .filter((d) => d.active)
      .map((d) => ({
        id: d.companydivisionid,
        name: d.divisionname,
        original: d,
      }))
    : [];

  // 3. Options untuk Department (Generic T = CompanyDepartment)
  const getDepartmentOptions = (): AutocompleteOption<CompanyDepartment>[] => {
    if (!dirId || !divId) return [];
    const dir = organization?.find((d) => d.companydirectorateid === dirId);
    const div = dir?.divisions?.find((v) => v.companydivisionid === divId);
    return (div?.departments || [])
      .filter((d) => d.active)
      .map((d) => ({
        id: d.companydepartmentid,
        name: d.departmentname,
        original: d,
      }));
  };
  const departmentOptions = getDepartmentOptions();

  // --- SAVE HANDLER ---
  const handleSave = async () => {
    setError(null);
    setSuccessMsg(null);

    if (!selectedCompanyId) {
      setError("Pilih perusahaan terlebih dahulu.");
      return;
    }

    // Validasi
    if (!dirName.trim()) {
      setError("Nama Direktorat wajib diisi.");
      return;
    }
    if (divName.trim() && !dirName.trim()) {
      setError("Isi Direktorat sebelum mengisi Divisi.");
      return;
    }
    if (deptName.trim() && !divName.trim()) {
      setError("Isi Divisi sebelum mengisi Department.");
      return;
    }
    if (unitName.trim() && !deptName.trim()) {
      setError("Isi Department sebelum mengisi Unit Kerja.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("companyid", String(selectedCompanyId));

      if (dirId) formData.append("companydirectorateid", String(dirId));
      formData.append("directoratename", dirName);

      if (divName.trim()) {
        if (divId) formData.append("companydivisionid", String(divId));
        formData.append("divisionname", divName);
      }

      if (deptName.trim()) {
        if (deptId) formData.append("companydepartmentid", String(deptId));
        formData.append("departmentname", deptName);
      }

      if (unitName.trim()) {
        formData.append("unitkerjaname", unitName);
      }

      if (dokumenDisplayName.trim()) {
        formData.append("dokumenname", dokumenDisplayName);
      }
      if (dokumenFile) formData.append("dokumenfile", dokumenFile, dokumenFile.name);

      formData.append("active", "true");

      await saveHierarchy(formData);

      setSuccessMsg("Data berhasil disimpan!");
      fetchOrg(Number(selectedCompanyId));
      resetForm();

    } catch (err) {
      console.error(err);
      setError("Gagal menyimpan data.");
    }
  };

  // Helper Row Type
  type Row = {
    directorateId: number;
    directoratename: string;
    divisionId?: number | null;
    divisionname: string;
    departmentId?: number | null;
    departmentname: string;
    unitId?: number | null;
    unitkerjaname: string | null;
    dokumenname?: string | null;
    dokumen_url?: string | null;
  };

  const buildRows = (): Row[] => {
    if (!organization) return [];
    const rows: Row[] = [];
    organization.forEach((dir) => {
      if (!dir.active) return;
      if (!dir.divisions || dir.divisions.length === 0) {
        rows.push({
          directorateId: dir.companydirectorateid,
          directoratename: dir.directoratename,
          divisionId: null, divisionname: "-",
          departmentId: null, departmentname: "-",
          unitId: null, unitkerjaname: null
        });
        return;
      }

      dir.divisions.forEach((div) => {
        if (!div.active) return;
        if (!div.departments || div.departments.length === 0) {
          rows.push({
            directorateId: dir.companydirectorateid,
            directoratename: dir.directoratename,
            divisionId: div.companydivisionid,
            divisionname: div.divisionname,
            departmentId: null, departmentname: "-",
            unitId: null, unitkerjaname: null
          });
          return;
        }

        div.departments.forEach((dep) => {
          if (!dep.active) return;
          const activeUnits = (dep.unit_kerjas || []).filter((u) => u && u.active) || [];

          if (activeUnits.length === 0) {
            rows.push({
              directorateId: dir.companydirectorateid,
              directoratename: dir.directoratename,
              divisionId: div.companydivisionid,
              divisionname: div.divisionname,
              departmentId: dep.companydepartmentid,
              departmentname: dep.departmentname,
              unitId: null,
              unitkerjaname: null,
            });
          } else {
            activeUnits.forEach((u) => {
              rows.push({
                directorateId: dir.companydirectorateid,
                directoratename: dir.directoratename,
                divisionId: div.companydivisionid,
                divisionname: div.divisionname,
                departmentId: dep.companydepartmentid,
                departmentname: dep.departmentname,
                unitId: u.companyunitkerjaid,
                unitkerjaname: u.unitkerjaname,
                dokumenname: u.dokumenname ?? null,
                dokumen_url: u.dokumen_url ?? null,
              });
            });
          }
        });
      });
    });
    return rows;
  };

  const rows = buildRows();

  // --- HANDLE NONACTIVE ---
  const handleNonactive = async (row: Row) => {
    if (!selectedCompanyId) return;

    // 1. Konfirmasi
    const isConfirmed = window.confirm("Apakah Anda yakin ingin menonaktifkan data ini? Data tidak akan tampil lagi.");
    if (!isConfirmed) return;

    try {
      setLoadingOrg(true);
      const payload: Partial<CompanyDirectorate & CompanyDivision & CompanyDepartment & CompanyUnitKerja> = {
        companyid: Number(selectedCompanyId),
        active: false
      };

      if (row.unitId) {
        payload.companyunitkerjaid = row.unitId;
      } else if (row.departmentId) {
        payload.companydepartmentid = row.departmentId;
      } else if (row.divisionId) {
        payload.companydivisionid = row.divisionId;
      } else {
        payload.companydirectorateid = row.directorateId;
      }

      await saveNonactive(payload);
      fetchOrg(Number(selectedCompanyId));

    } catch (err) {
      console.error(err);
      setError("Gagal menonaktifkan data.");
      setLoadingOrg(false);
    }
  };

  return (
    <div className="p-6 bg-white text-sm">
      <h2 className="text-xl font-bold mb-4">12. HIRARKI ORGANISASI</h2>

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
        {/* FORM SIDE */}
        <div className="w-1/4 space-y-4 px-5">
          <div className="text-center py-2 bg-blue-900 text-white rounded-sm text-sm font-medium">
            Tambah Hirarki Organisasi
          </div>

          {error && <div className="text-red-600 text-xs bg-red-50 p-2 rounded border border-red-200">{error}</div>}
          {successMsg && <div className="text-green-600 text-xs bg-green-50 p-2 rounded border border-green-200">{successMsg}</div>}

          {/* Autocomplete Directorate */}
          <AutocompleteInput<CompanyDirectorate>
            label="Direktorat"
            value={dirName}
            options={directorateOptions}
            onChange={(val) => {
              setDirName(val);
              setDirId(null);
              setDivId(null); setDivName("");
              setDeptId(null); setDeptName("");
            }}
            onSelect={(item) => {
              setDirName(item.directoratename);
              setDirId(item.companydirectorateid);
              setDivId(null); setDivName("");
              setDeptId(null); setDeptName("");
            }}
            placeholder="Nama direktorat"
            disabled={!selectedCompanyId}
          />

          {/* Autocomplete Division */}
          <AutocompleteInput<CompanyDivision>
            label="Divisi"
            value={divName}
            options={divisionOptions}
            onChange={(val) => {
              setDivName(val);
              setDivId(null);
              setDeptId(null); setDeptName("");
            }}
            onSelect={(item) => {
              setDivName(item.divisionname);
              setDivId(item.companydivisionid);
              setDeptId(null); setDeptName("");
            }}
            placeholder="Nama divisi"
            disabled={!dirName}
          />

          {/* Autocomplete Department */}
          <AutocompleteInput<CompanyDepartment>
            label="Department"
            value={deptName}
            options={departmentOptions}
            onChange={(val) => {
              setDeptName(val);
              setDeptId(null);
            }}
            onSelect={(item) => {
              setDeptName(item.departmentname);
              setDeptId(item.companydepartmentid);
            }}
            placeholder="Nama department"
            disabled={!divName}
          />

          {/* Unit Kerja (Manual Input) */}
          <div>
            <label className="text-xs block mb-1 font-medium uppercase">Unit Kerja</label>
            <input
              className={`w-full border border-gray-300 rounded px-2 py-2 ${!deptName ? "bg-gray-100" : ""}`}
              value={unitName}
              onChange={(e) => setUnitName(e.target.value)}
              placeholder="Nama unit kerja"
              disabled={!deptName}
            />
          </div>

          {/* Upload */}
          <div>
            <label className="text-xs block mb-1 font-medium uppercase">Upload Dokumen</label>
            <input
              type="file"
              id="file-upload"
              onChange={handleFileChange}
              className="hidden"
              disabled={!unitName}
            />
            <div className="flex items-center gap-2 mt-1">
              <label
                htmlFor="file-upload"
                className={`cursor-pointer flex-shrink-0 rounded border border-gray-300 px-3 py-2 text-xs font-medium transition ${!unitName ? "bg-gray-200 text-gray-400 cursor-not-allowed" : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                  }`}
              >
                Pilih File
              </label>
              <span className="text-xs text-gray-500 truncate flex-1">
                {dokumenFile ? dokumenFile.name : "Belum ada file dipilih"}
              </span>
              {dokumenFile && (
                <button
                  type="button"
                  onClick={handleClearFile}
                  className="text-red-500 hover:text-red-700 font-bold px-1"
                >
                  &#x2715;
                </button>
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
              className={`w-full text-white px-4 py-2 rounded cursor-pointer ${!selectedCompanyId ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
                }`}
            >
              + Tambah
            </button>
          </div>
        </div>

        {/* TABLE SIDE */}
        <div className="w-3/4">
          <div className="overflow-x-auto rounded-sm shadow mb-10 bg-white">
            <table className="min-w-full border-collapse text-sm">
              <thead>
                <tr className="bg-blue-900 text-white text-center">
                  <th className="px-4 py-2">DIREKTORAT</th>
                  <th className="px-4 py-2">DIVISI</th>
                  <th className="px-4 py-2">DEPARTMENT</th>
                  <th className="px-4 py-2">UNIT KERJA</th>
                  <th className="px-4 py-2">DOKUMEN</th>
                  <th className="px-4 py-2">AKSI</th>
                </tr>
              </thead>
              <tbody>
                {loadingOrg ? (
                  Array.from({ length: 3 }).map((_, i) => (
                    <tr key={i} className="odd:bg-white even:bg-gray-50 text-center">
                      <td colSpan={6} className="px-4 py-4 text-gray-400 animate-pulse">Loading data...</td>
                    </tr>
                  ))
                ) : !selectedCompanyId ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-6 text-center text-gray-500">
                      Pilih perusahaan untuk melihat data.
                    </td>
                  </tr>
                ) : rows.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-4 py-6 text-center text-gray-500">
                      Belum ada data struktur organisasi.
                    </td>
                  </tr>
                ) : (
                  rows.map((r, i) => (
                    <tr key={i} className="odd:bg-white even:bg-gray-50 text-center">
                      <td className="px-4 py-2 align-top pt-3">{r.directoratename}</td>
                      <td className="px-4 py-2 align-top pt-3">{r.divisionname}</td>
                      <td className="px-4 py-2 align-top pt-3">{r.departmentname}</td>
                      <td className="px-4 py-2 align-top pt-3">{r.unitkerjaname ?? "-"}</td>
                      <td className="px-4 py-2 align-top pt-3">
                        {r.dokumen_url ? (
                          <a href={r.dokumen_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                            {r.dokumenname || "Unduh"}
                          </a>
                        ) : (
                          "-"
                        )}
                      </td>
                      <td className="px-4 py-2 align-top pt-3">
                        <button
                          onClick={() => handleNonactive(r)}
                          className="px-2 py-1 rounded-sm bg-red-600 text-white hover:bg-red-700 transition"
                        >
                          Nonaktif
                        </button>
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