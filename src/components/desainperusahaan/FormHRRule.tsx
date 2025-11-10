"use client";

import { useEffect, useState } from "react";
import { getCompanies } from "@/api/companyApi";
import { getHRBaseRule } from "@/api/hrbaseruleApi";
import { Company, HRBaseRule, CompanyHRRule } from "@/api/data";
import { getCompanyHRRule, saveCompanyHRRule } from "@/api/companyhrruleApi";

interface FormHRRuleProps {
    onNextStep: () => void;
    onBack: () => void;
}

export default function FormHRRule({ onNextStep, onBack }: FormHRRuleProps) {
    const [companies, setCompanies] = useState<Company[]>([]);
    const [baseRules, setBaseRules] = useState<HRBaseRule[]>([]);
    const [groupedRules, setGroupedRules] = useState<Record<string, string[]>>({});
    const [selectedCompany, setSelectedCompany] = useState<string>("");
    const [isAdding, setIsAdding] = useState<Record<string, boolean>>({});
    const [tempNewRule, setTempNewRule] = useState<Record<string, string>>({});
    const [companyRules, setCompanyRules] = useState<CompanyHRRule[]>([]);
    const [baseGroupedRules, setBaseGroupedRules] = useState<Record<string, string[]>>({});
    const [saving, setSaving] = useState(false);
    const [disabled, setDisabled] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const [resCompanies, resHRBaseRule] = await Promise.all([
                    getCompanies(),
                    getHRBaseRule(),
                ]);

                // Urutkan perusahaan
                setCompanies((resCompanies.data || []).sort((a, b) => a.companyid - b.companyid));

                // Kelompokkan HR Base Rule berdasarkan group rule
                const data = resHRBaseRule.data || [];
                setBaseRules(data);

                const grouped = data.reduce((acc: Record<string, string[]>, item: HRBaseRule) => {
                    if (!acc[item.grouprule]) acc[item.grouprule] = [];
                    acc[item.grouprule].push(item.rulename);
                    return acc;
                }, {});
                setBaseGroupedRules(grouped);
                setGroupedRules(grouped);
            } catch (err) {
                console.error("Gagal memuat data:", err);
                setError("Gagal memuat data perusahaan atau aturan dasar HR");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    //  Ambil data companyhrrule saat perusahaan dipilih
    useEffect(() => {
        const fetchCompanyRules = async () => {
            if (!selectedCompany || companies.length === 0) return;

            try {
                setLoading(true);
                const res = await getCompanyHRRule();
                const selectedCompanyData = companies.find(c => c.name === selectedCompany);
                if (!selectedCompanyData) return;

                const rules = (res.data || []).filter(
                    (r) => r.companyid === selectedCompanyData.companyid
                );
                setCompanyRules(rules);

                const newGrouped = JSON.parse(JSON.stringify(baseGroupedRules));

                rules.forEach((r) => {
                    if (r.hrbaseruleid === 0) {
                        if (!newGrouped[r.grouprule]) newGrouped[r.grouprule] = [];
                        // hindari duplikasi nama rule
                        if (!newGrouped[r.grouprule].includes(r.rulename)) {
                            newGrouped[r.grouprule].push(r.rulename);
                        }
                    }
                });

                setGroupedRules(newGrouped);
            } catch (err) {
                console.error("Gagal memuat aturan perusahaan:", err);
                setError("Gagal memuat aturan HR untuk perusahaan ini");
            } finally {
                setLoading(false);
            }
        };
        fetchCompanyRules();
    }, [selectedCompany, companies, baseGroupedRules]);

    //  Tambah rule baru
    const commitNewRule = (group: string) => {
        const newRuleName = tempNewRule[group]?.trim();

        if (newRuleName) {
            // Cek apakah rule sudah ada di daftar
            const existingInList = groupedRules[group]?.includes(newRuleName);

            if (!existingInList) {
                // 1. Tambahkan ke state 'groupedRules' agar muncul di UI
                setGroupedRules((prev) => ({
                    ...prev,
                    [group]: [...(prev[group] || []), newRuleName],
                }));

                // 2. Tambahkan ke state 'companyRules' sebagai rule baru (custom)
                //    dan default-nya 'selected: false'
                if (
                    !companyRules.find(
                        (r) => r.rulename === newRuleName && r.grouprule === group
                    )
                ) {
                    setCompanyRules((prevRules) => [
                        ...prevRules,
                        {
                            companyid:
                                companies.find((c) => c.name === selectedCompany)?.companyid ||
                                0,
                            hrbaseruleid: 0, // ID 0 menandakan ini rule kustom
                            grouprule: group,
                            rulename: newRuleName,
                            selected: false, // Default tidak terceklis
                        } as CompanyHRRule,
                    ]);
                }
            }
        }

        // 3. Sembunyikan input dan reset nilainya
        setIsAdding((prev) => ({ ...prev, [group]: false }));
        setTempNewRule((prev) => ({ ...prev, [group]: "" }));
    };

    //  Cek apakah checkbox aktif (selected)
    const isRuleSelected = (ruleName: string, group: string) => {
        const rule = companyRules.find(
            (r) => r.rulename === ruleName && r.grouprule === group
        );
        return rule ? rule.selected === true : false;
    };

    const handleSave = async () => {
        if (!selectedCompany) {
            alert("Pilih perusahaan terlebih dahulu!");
            return;
        }

        const selectedCompanyData = companies.find(c => c.name === selectedCompany);
        if (!selectedCompanyData) return;

        const companyId = selectedCompanyData.companyid;

        setSaving(true);
        setDisabled(true);

        try {
            // Bentuk array untuk dikirim ke backend
            const payload: Partial<CompanyHRRule>[] = [];

            Object.entries(groupedRules).forEach(([group, ruleNames]) => {
                ruleNames.forEach((ruleName) => {
                    // 'existing' -> data dari CompanyHRRule (jika sudah pernah disimpan)
                    const existing = companyRules.find(
                        (r) => r.rulename === ruleName && r.grouprule === group
                    );

                    // 'base' -> data dari HRBaseRule (master data)
                    const base = baseRules.find(
                        (r) => r.rulename === ruleName && r.grouprule === group
                    );

                    const isChecked = existing ? existing.selected : false;

                    const hrBaseRuleIdToSave = existing?.hrbaseruleid ?? base?.hrbaseruleid ?? 0;
                    const companyHrRuleId = existing?.companyhrruleid ?? undefined;
                    payload.push({
                        companyhrruleid: companyHrRuleId,
                        companyid: companyId,
                        hrbaseruleid: hrBaseRuleIdToSave,
                        grouprule: group,
                        rulename: ruleName,
                        selected: isChecked,
                    });
                });
            });

            // Kirim ke backend
            const res = await saveCompanyHRRule(payload);
            console.log("Data tersimpan:", res);

            alert("Aturan HR berhasil disimpan!");

            // Refresh ulang data perusahaan biar sinkron
            const updated = await getCompanyHRRule();
            const rules = updated.data.filter(
                (r) => r.companyid === selectedCompanyData.companyid
            );
            setCompanyRules(rules);
        } catch (err) {
            console.error("Gagal menyimpan aturan:", err);
            alert("Gagal menyimpan aturan HR!");
        } finally {
            setSaving(false);
            setDisabled(false);
        }
    };

    return (
        <div className="w-full mx-auto p-6">
            {/* Judul */}
            <h2 className="text-lg font-semibold mb-4">7. Aturan Dasar HR</h2>

            {/* Dropdown Perusahaan */}
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

            {/* Grid Grouprule */}
            {!loading && !error && (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6 text-sm">
                    {Object.entries(groupedRules).map(([group, ruleNames]) => (
                        <div
                            key={group}
                            className="flex flex-col border border-gray-300 rounded-md overflow-hidden"
                        >
                            <div className="bg-blue-900 text-white text-center font-semibold py-1">
                                {group}
                            </div>

                            <div className="p-3 space-y-1 flex-1">
                                {ruleNames.map((rule, idx) => (
                                    <label key={idx} className="flex items-center justify-between">
                                        <span>{rule}</span>
                                        <input
                                            type="checkbox"
                                            data-rule={`${rule}-${group}`}
                                            className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                                            checked={isRuleSelected(rule, group)}
                                            onChange={(e) => {
                                                const updated = [...companyRules];
                                                const existing = updated.find(r => r.rulename === rule && r.grouprule === group);

                                                if (existing) {
                                                    // Jika sudah ada, update status 'selected'
                                                    existing.selected = e.target.checked;
                                                } else {
                                                    // Jika belum ada, buat entri baru

                                                    // Cari di master 'baseRules' untuk dapat ID aslinya
                                                    const base = baseRules.find(r => r.rulename === rule && r.grouprule === group);

                                                    updated.push({
                                                        companyid: companies.find(c => c.name === selectedCompany)?.companyid || 0,
                                                        // Jika ada di 'base', pakai ID-nya. Jika tidak (rule kustom), pakai 0
                                                        hrbaseruleid: base ? base.hrbaseruleid : 0,
                                                        grouprule: group,
                                                        rulename: rule,
                                                        selected: e.target.checked,
                                                    } as CompanyHRRule);
                                                }
                                                setCompanyRules(updated);
                                            }}
                                        />
                                    </label>
                                ))}

                                {/* Tambah rule baru */}
                                {isAdding[group] && (
                                    <div className="mt-2 pt-2 border-t border-gray-200">
                                        <input
                                            type="text"
                                            value={tempNewRule[group] || ""}
                                            onChange={(e) =>
                                                setTempNewRule((prev) => ({
                                                    ...prev,
                                                    [group]: e.target.value,
                                                }))
                                            }
                                            // autoFocus agar kursor langsung aktif
                                            autoFocus
                                            // 'onBlur' akan commit perubahan jika input tidak kosong
                                            onBlur={() => commitNewRule(group)}
                                            // 'onKeyDown' untuk commit jika menekan Enter
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter') {
                                                    commitNewRule(group);
                                                }
                                            }}
                                            className="border border-gray-300 rounded-md px-2 py-1 w-full text-sm focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                )}

                                {/* Tampilkan Tombol "Tambah" jika TIDAK sedang mode 'isAdding' */}
                                {!isAdding[group] && (
                                    <div className="mt-2 border-t border-gray-200 pt-2">
                                        <button
                                            onClick={() =>
                                                setIsAdding((prev) => ({ ...prev, [group]: true }))
                                            }
                                            className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm py-1 transition"
                                            disabled={!selectedCompany} // Tombol disable jika belum pilih perusahaan
                                        >
                                            + Tambah
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
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
                    onClick={handleSave}
                    disabled={saving || disabled || !selectedCompany}
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
