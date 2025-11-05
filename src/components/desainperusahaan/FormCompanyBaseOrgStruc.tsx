"use client";

import { useEffect, useState } from "react";
import { getCompanies } from "@/api/companyApi";
import { getBaseOrgStructure } from "@/api/baseorgstructureApi";
import { getCompanyBaseOrgStruc, saveCompanyBaseOrgStruc } from "@/api/companybaseorgstrucApi";
import { Company, BaseOrgStructure, CompanyBaseOrgStruc } from "@/api/data";

interface FormCompanyBaseOrgProps {
    onNextStep: () => void;
    onBack: () => void;
}

export default function FormCompanyBaseOrgStruc({ onNextStep, onBack }: FormCompanyBaseOrgProps) {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [baseOrgStructure, setBaseOrgStructure] = useState<BaseOrgStructure[]>([]);
    const [companyBaseOrgStruc, setCompanyBaseOrgStruc] = useState<CompanyBaseOrgStruc[]>([]);
    const [selectedCompany, setSelectedCompany] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(true);
    const [saving, setSaving] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    // --- FETCH DATA ---
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [resCompanies, resBase, resCompanyBase] = await Promise.all([
                    getCompanies(),
                    getBaseOrgStructure(),
                    getCompanyBaseOrgStruc(),
                ]);

                setCompanies((resCompanies.data || []).sort((a, b) => a.companyid - b.companyid));
                setBaseOrgStructure((resBase.data || []).sort((a, b) => a.ordeno - b.ordeno));
                setCompanyBaseOrgStruc(resCompanyBase.data || []);
            } catch (err) {
                console.error("Gagal memuat data:", err);
                setError("Gagal memuat data perusahaan atau struktur organisasi");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const selectedCompanyData = companies.find((c) => c.name === selectedCompany);

    // --- HANDLE CHECKBOX ---
    const handleCheckboxChange = (baseOrgId: number, isChecked: boolean) => {
        if (!selectedCompanyData) return;
        const companyId = selectedCompanyData.companyid;

        const existingIndex = companyBaseOrgStruc.findIndex(
            (cbos) => cbos.companyid === companyId && cbos.baseorgstructureid === baseOrgId
        );

        if (existingIndex > -1) {
            // sudah ada di backend → update selected saja
            const updatedList = [...companyBaseOrgStruc];
            updatedList[existingIndex] = {
                ...updatedList[existingIndex],
                selected: isChecked,
            };
            setCompanyBaseOrgStruc(updatedList);
        } else {
            // belum ada di backend → buat data baru tanpa id
            const newRelation: CompanyBaseOrgStruc = {
                id: 0, // dummy
                companyid: companyId,
                baseorgstructureid: baseOrgId,
                selected: isChecked,
            };
            setCompanyBaseOrgStruc((prev) => [...prev, newRelation]);
        }
    };

    // --- HANDLE SAVE ---
    const handleSave = async () => {
        if (!selectedCompanyData) return;
        setSaving(true);
        setError(null);

        const companyId = selectedCompanyData.companyid;

        const dataToSave = baseOrgStructure.map((base) => {
            const existing = companyBaseOrgStruc.find(
                (cbos) =>
                    cbos.companyid === companyId &&
                    cbos.baseorgstructureid === base.baseorgstructureid
            );

            if (existing) {
                // sudah ada data di backend → kirim dengan id
                return {
                    id: existing.id !== 0 ? existing.id : undefined, // undefined agar backend auto-create
                    companyid: companyId,
                    baseorgstructureid: base.baseorgstructureid,
                    selected: existing.selected,
                };
            } else {
                // belum ada data di backend
                return {
                    companyid: companyId,
                    baseorgstructureid: base.baseorgstructureid,
                    selected: false,
                };
            }
        });

        try {
            await saveCompanyBaseOrgStruc(dataToSave);
            alert("Data berhasil disimpan!");
            const refreshed = await getCompanyBaseOrgStruc();
            setCompanyBaseOrgStruc(refreshed.data || []);
        } catch (err) {
            console.error("Gagal menyimpan:", err);
            setError("Gagal menyimpan data. Silakan coba lagi.");
        } finally {
            setSaving(false);
        }
    };

    const disabled = !selectedCompany;

    return (
        <div className="w-full mx-auto p-6">
            <h2 className="text-lg font-semibold mb-4">
                6. Selanjutnya, buatlah struktur organisasi dasar
            </h2>

            <div className="mb-6 px-5">
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

            {!loading && !error && selectedCompanyData && (
                <div className="w-full mb-6">
                    <div className="py-6 px-12">
                        <h3 className="font-semibold mb-4 text-center text-lg">
                            {selectedCompanyData.name}
                        </h3>

                        <div className="flex justify-center">
                            <ul className="w-full max-w-xl space-y-2">
                                {baseOrgStructure.map((item, idx) => {
                                    const relation = companyBaseOrgStruc.find(
                                        (cbos) =>
                                            cbos.companyid === selectedCompanyData.companyid &&
                                            cbos.baseorgstructureid === item.baseorgstructureid
                                    );

                                    const isChecked = relation ? relation.selected : false;

                                    return (
                                        <li
                                            key={item.baseorgstructureid}
                                            className="flex items-center justify-between px-4 py-2"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-sm text-gray-500 w-6 text-right">
                                                    {idx + 1}.
                                                </span>
                                                <span className="text-sm text-gray-800">{item.nama}</span>
                                            </div>

                                            <input
                                                type="checkbox"
                                                checked={isChecked}
                                                onChange={(e) =>
                                                    handleCheckboxChange(item.baseorgstructureid, e.target.checked)
                                                }
                                                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                            />
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            <p className="text-xs text-red-500 font-semibold mt-6">
                CHECKLIST INI AKAN BERPENGARUH KE SUB-MODUL JOB REPOSITORY
            </p>

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
        </div>
    );
}
