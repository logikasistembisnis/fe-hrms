"use client";

import { useState, useEffect } from "react";
import { Tenant } from "@/api/data";
import { getTenant, saveTenant, deleteTenant } from "@/api/tenantApi";

export default function TenantPage() {
    const [tenants, setTenants] = useState<Tenant[]>([]);
    const [loading, setLoading] = useState(true);

    // State untuk Modal & Form
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isSaving, setIsSaving] = useState(false);

    // State Form Data
    const [formData, setFormData] = useState<Partial<Tenant>>({
        name: "",
        description: "",
        active: true,
    });

    // 1. Fetch Data saat halaman dimuat
    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await getTenant();
            // Pastikan response.data adalah array
            if (Array.isArray(response.data)) {
                setTenants(response.data);
            } else {
                setTenants([]);
            }
        } catch (error) {
            console.error("Gagal mengambil data tenant:", error);
            alert("Gagal memuat data tenant.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    // 2. Handle Delete
    const handleDelete = async (id: number) => {
        if (!confirm("Yakin ingin menghapus tenant ini?")) return;

        try {
            await deleteTenant(id);
            // Hapus dari state tanpa reload
            setTenants((prev) => prev.filter((t) => t.tenantid !== id));
            alert("Tenant berhasil dihapus.");
        } catch (error) {
            console.error(error);
            alert("Gagal menghapus tenant.");
        }
    };

    // 3. Handle Submit (Add / Edit)
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSaving(true);

        try {
            // Logic Upsert:
            // Jika formData punya 'tenantid', backend akan Update.
            // Jika tidak punya (undefined), backend akan Insert.

            // Kirim dalam format Array []
            await saveTenant([formData]);

            alert("Data berhasil disimpan!");
            setIsModalOpen(false);
            fetchData(); // Refresh tabel
        } catch (error) {
            console.error(error);
            alert("Gagal menyimpan data.");
        } finally {
            setIsSaving(false);
        }
    };

    // Helper untuk membuka modal (Reset form jika tambah baru, isi form jika edit)
    const openModal = (tenant?: Tenant) => {
        if (tenant) {
            // Mode Edit
            setFormData(tenant);
        } else {
            // Mode Tambah Baru
            setFormData({
                name: "",
                description: "",
                active: true,
                // holdingflag & holdingcompanyid bisa di-set default atau null
                holdingflag: false,
                holdingcompanyid: null
            });
        }
        setIsModalOpen(true);
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-800">Daftar Tenant</h1>
                <button
                    onClick={() => openModal()}
                    className="bg-[#0c356a] hover:bg-blue-900 text-white px-4 py-2 rounded-lg font-medium transition"
                >
                    + Tambah Tenant
                </button>
            </div>

            {/* --- TABEL --- */}
            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
                <table className="min-w-full text-left text-sm whitespace-nowrap">
                    <thead>
                        <tr className="bg-blue-900 text-white text-center text-sm font-medium">
                            <th scope="col" className="px-4 py-2">Nama</th>
                            <th scope="col" className="px-4 py-2">Deskripsi</th>
                            <th scope="col" className="px-4 py-2 text-center">Status</th>
                            <th scope="col" className="px-4 py-2 text-center">Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={4} className="text-center py-6">Loading...</td>
                            </tr>
                        ) : tenants.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="text-center py-6 text-gray-500">Tidak ada data tenant.</td>
                            </tr>
                        ) : (
                            tenants.map((item) => (
                                <tr key={item.tenantid} className="hover:bg-gray-50 transition text-center">
                                    <td className="px-6 py-4 font-medium text-gray-900">{item.name}</td>
                                    <td className="px-6 py-4 text-gray-500">{item.description || "-"}</td>
                                    <td className="px-6 py-4 text-center">
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-semibold ${item.active
                                                    ? "bg-green-100 text-green-800"
                                                    : "bg-red-100 text-red-800"
                                                }`}
                                        >
                                            {item.active ? "Active" : "Inactive"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center space-x-2">
                                        <button
                                            onClick={() => openModal(item)}
                                            className="bg-blue-600 px-3 py-1 text-white rounded-sm hover:bg-blue-900 font-medium"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => handleDelete(item.tenantid)}
                                            className="bg-red-600 text-white px-3 py-1 rounded-sm hover:bg-red-900 font-medium"
                                        >
                                            Hapus
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* --- MODAL FORM --- */}
            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/10 bg-opacity-50 backdrop-blur-sm p-4">
                    <div className="bg-white rounded-xl shadow-2xl w-full max-w-md p-6">
                        <h2 className="text-xl font-bold mb-4 text-gray-800">
                            {formData.tenantid ? "Edit Tenant" : "Tambah Tenant Baru"}
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Nama */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nama Tenant</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name || ""}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                    placeholder="Contoh: ABC Group"
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Deskripsi</label>
                                <textarea
                                    value={formData.description || ""}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                                    placeholder="Keterangan singkat..."
                                    rows={3}
                                />
                            </div>

                            {/* Active Toggle */}
                            <div className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    id="activeCheck"
                                    checked={formData.active ?? true}
                                    onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
                                />
                                <label htmlFor="activeCheck" className="text-sm font-medium text-gray-700">
                                    Aktif
                                </label>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-end gap-3 mt-6">
                                <button
                                    type="button"
                                    onClick={() => setIsModalOpen(false)}
                                    className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
                                >
                                    Batal
                                </button>
                                <button
                                    type="submit"
                                    disabled={isSaving}
                                    className={`px-4 py-2 text-white rounded-lg transition font-medium ${isSaving ? "bg-blue-400 cursor-not-allowed" : "bg-[#0c356a] hover:bg-blue-900"
                                        }`}
                                >
                                    {isSaving ? "Menyimpan..." : "Simpan"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}