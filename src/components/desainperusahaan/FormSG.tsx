"use client";

import React, { useEffect, useState } from "react";
import { getCompanies } from "@/api/companyApi";
import { getGroupRole, getMenu, saveMenu } from "@/api/menugrouproleApi";
import { Company, GroupRole, Menu } from "@/api/data";

interface FormSGProps {
  onNextStep: () => void;
  onBack: () => void;
}

interface MenuGroup {
  title: string;
  parentid: number;
}

// 1. DEFINISI MENU MASTER (HARDCODED)
const MASTER_MENU_ITEMS = [
  "Desain Perusahaan",
  "Manajemen Pengguna",
  "Dasar Kompensasi dan Benefit"
];

export default function FormSG({ onNextStep, onBack }: FormSGProps) {
  // --- STATE DATA ---
  const [companies, setCompanies] = useState<Company[]>([]);
  const [groupRoles, setGroupRoles] = useState<GroupRole[]>([]);
  const [menuList, setMenuList] = useState<Menu[]>([]);

  // --- STATE FILTER ---
  const [selectedCompany, setSelectedCompany] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("HR");

  // --- STATE UI ---
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const MODULE_STRUCTURE: MenuGroup[] = [
    { title: "MODUL MASTER ADMIN", parentid: 1 },
    { title: "MODUL LAYANAN MANDIRI", parentid: 2 },
  ];
  const fetchData = async () => {
    try {
      setLoading(true);
      const [resCompanies, resGroupRoles, resMenus] = await Promise.all([
        getCompanies(),
        getGroupRole(),
        getMenu(),
      ]);

      const sortedCompanies = (resCompanies.data || []).sort((a, b) => a.companyid - b.companyid);
      setCompanies(sortedCompanies);

      setGroupRoles((resGroupRoles.data || []).sort((a, b) => a.grouproleid - b.grouproleid));
      setMenuList(resMenus.data || []);

    } catch (err) {
      console.error("Gagal memuat data:", err);
      setError("Gagal memuat data referensi.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // --- HANDLER CHECKBOX ---
  const handleCheckboxChange = (parentMenuId: number, menuName: string, roleId: number, currentStatus: boolean) => {

    // Jika belum pilih perusahaan, jangan lakukan apa-apa (atau alert)
    if (!selectedCompany) {
      alert("Mohon pilih perusahaan terlebih dahulu.");
      return;
    }

    setMenuList((prevMenus) => {
      // 1. Cek apakah menu ini sudah ada di state menuList?
      const existingIndex = prevMenus.findIndex(m =>
        m.menuname === menuName &&
        m.parentmenuid === parentMenuId &&
        m.companyid === Number(selectedCompany)
      );

      // A. JIKA SUDAH ADA (Update)
      if (existingIndex !== -1) {
        const updatedMenus = [...prevMenus];
        const menu = { ...updatedMenus[existingIndex] };

        let currentIds = menu.grouprole_ids ? [...menu.grouprole_ids] : [];
        if (currentStatus) {
          currentIds = currentIds.filter(id => id !== roleId); // Uncheck
        } else {
          currentIds.push(roleId); // Check
        }

        // Update format string #..#
        const newGroupRoleString = currentIds.length > 0 ? '#' + currentIds.join('#') + '#' : "";

        updatedMenus[existingIndex] = {
          ...menu,
          grouprole_ids: currentIds,
          grouprole: newGroupRoleString
        };

        return updatedMenus;
      }

      // B. JIKA BELUM ADA (Insert baru ke state)
      else {
        // Buat objek menu baru
        const newMenu: Menu = {
          menuid: 0, // ID sementara 0
          companyid: Number(selectedCompany),
          menuname: menuName,
          parentmenuid: parentMenuId,
          hrgroup: selectedType === "HR",
          active: true,
          grouprole_ids: [roleId],
          grouprole: `#${roleId}#`
        };

        return [...prevMenus, newMenu];
      }
    });
  };

  // --- BUILD PAYLOAD & SAVE ---
  const handleSave = async () => {
    // Validasi
    if (!selectedCompany) {
      alert("Mohon pilih perusahaan sebelum menyimpan.");
      return;
    }

    if (!selectedType) {
      alert("Mohon pilih tipe Security Group (HR / Non HR) sebelum menyimpan.");
      return;
    }

    // Siapkan payload: hanya menu yang berhubungan dengan perusahaan dan modul yang tampil di layar
    const parentIds = MODULE_STRUCTURE.map(m => m.parentid);
    const masterSet = new Set(MASTER_MENU_ITEMS);

    const toSave = menuList
      .filter(m => m.companyid === Number(selectedCompany) && parentIds.includes(m.parentmenuid) && masterSet.has(m.menuname))
      .map(m => {
        // Pastikan hrgroup sesuai dengan filter saat ini
        const hrgroupFlag = selectedType === "HR";
        // Format grouprole string jika ada
        const grouproleIds = m.grouprole_ids ?? [];
        const grouproleStr = grouproleIds.length > 0 ? `#${grouproleIds.join('#')}#` : "";

        // Hanya sertakan menuid jika > 0, jika 0 -> create
        const base: Partial<Menu> = {
          companyid: Number(selectedCompany),
          menuname: m.menuname,
          parentmenuid: m.parentmenuid,
          hrgroup: hrgroupFlag,
          active: m.active ?? true,
          grouprole: grouproleStr,
          grouprole_ids: grouproleIds,
        };

        if (m.menuid && m.menuid > 0) {
          // update
          return { ...base, menuid: m.menuid };
        }

        // create
        return base;
      });

    if (toSave.length === 0) {
      alert("Tidak ada perubahan untuk disimpan pada perusahaan dan tipe Security Group ini.");
      return;
    }

    try {
      setSaving(true);
      setDisabled(true);
      const res = await saveMenu(toSave);
      const returnedMenus = res.data || [];

      // Update state: hapus menu lama untuk perusahaan ini yang berada dalam parentIds, lalu gabungkan hasil dari backend
      setMenuList(prev => {
        const others = prev.filter(x => !(x.companyid === Number(selectedCompany) && parentIds.includes(x.parentmenuid) && masterSet.has(x.menuname)));
        return [...others, ...returnedMenus];
      });

      await fetchData();
      alert('Sukses menyimpan menu.');
    } catch (err) {
      console.error('Gagal menyimpan menu:', err);
      alert('Gagal menyimpan data. Silakan coba lagi.');
    } finally {
      setSaving(false);
      setDisabled(false);
    }
  };

  return (
    <main className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-6">11. Security Group - SG</h2>

        {/* --- FILTER SECTION --- */}
        <div className="p-5 rounded-lg shadow mb-6 bg-white border border-gray-100">
          <div className="flex flex-col md:flex-row gap-6 items-end">

            {/* Filter Perusahaan */}
            <div className="flex-1 w-full md:max-w-xs">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Pilih Perusahaan
              </label>
              <div className="relative">
                <select
                  className="w-full appearance-none bg-white border border-gray-300 text-gray-700 py-2.5 px-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  value={selectedCompany}
                  onChange={(e) => setSelectedCompany(e.target.value)}
                >
                  <option value="">Pilih Perusahaan</option>
                  {companies.map((c) => (
                    <option key={c.companyid} value={c.companyid}>
                      {c.name}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>

            {/* Filter HR/Non-HR */}
            <div className="flex-1 w-full md:max-w-xs">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Tipe Security Group
              </label>
              <div className="relative">
                <select
                  className="w-full appearance-none bg-white border border-gray-300 text-gray-700 py-2.5 px-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                >
                  <option value="HR">HR</option>
                  <option value="NON_HR">Non HR</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* --- TABLE SECTION --- */}
        <div className="overflow-hidden bg-white rounded-xl shadow-sm border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm text-left">
              <thead className="bg-gray-50 text-gray-700">
                <tr>
                  <th className="px-6 py-4 font-semibold border-b border-gray-200 min-w-[250px] sticky left-0 bg-gray-50 z-10">
                    Modul / Menu
                  </th>
                  {groupRoles.map((role) => (
                    <th key={role.grouproleid} className="px-2 py-4 font-semibold border-b border-gray-200 text-center whitespace-nowrap min-w-[80px]">
                      {role.grouprolename}
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {/* LOOP PARENT (Modul) */}
                {MODULE_STRUCTURE.map((moduleGroup) => {
                  return (
                    <React.Fragment key={moduleGroup.parentid}>
                      {/* Header Modul */}
                      <tr className="bg-blue-100/50">
                        <td colSpan={groupRoles.length + 1} className="px-6 py-3 font-bold text-blue-900 text-xs uppercase tracking-wide border-t border-blue-100">
                          {moduleGroup.title}
                        </td>
                      </tr>

                      {/* LOOP ITEM MENU MASTER */}
                      {MASTER_MENU_ITEMS.map((masterMenuName, idx) => {

                        const dbMenu = menuList.find(m =>
                          m.menuname === masterMenuName &&
                          m.parentmenuid === moduleGroup.parentid &&
                          m.companyid === Number(selectedCompany) &&
                          ((selectedType === "HR") ? (m.hrgroup === true) : (m.hrgroup === false || !m.hrgroup))
                        );

                        return (
                          <tr key={`${moduleGroup.parentid}-${idx}`} className="hover:bg-gray-50 transition-colors group">

                            {/* Nama Menu (Hardcoded dari Master) */}
                            <td className="px-6 py-3 font-medium text-gray-700 border-r border-gray-100 sticky left-0 bg-white group-hover:bg-gray-50">
                              {masterMenuName}
                            </td>

                            {/* Checkbox Roles */}
                            {groupRoles.map((role) => {
                              const isChecked = dbMenu?.grouprole_ids?.includes(role.grouproleid) ?? false;

                              return (
                                <td key={role.grouproleid} className="px-2 py-3 text-center border-r border-gray-50 last:border-0">
                                  <input
                                    type="checkbox"
                                    checked={isChecked}
                                    onChange={() => handleCheckboxChange(moduleGroup.parentid, masterMenuName, role.grouproleid, isChecked)}
                                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                                    disabled={!selectedCompany}
                                  />
                                </td>
                              );
                            })}
                          </tr>
                        );
                      })}
                    </React.Fragment>
                  );
                })}
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
