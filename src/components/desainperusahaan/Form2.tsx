"use client";

export default function Form2() {
    return (
        <div className="p-6 w-full mx-auto">
            <h3 className="text-lg font-semibold mb-4">
                3. Masukan informasi sebagai berikut
            </h3>

            <form className="space-y-3">
                {/* Baris 1 */}
                <div className="grid grid-cols-3 items-center gap-4">
                    <label className="font-medium text-sm">
                        Nama Legal Perusahaan
                    </label>
                    <select className="col-span-2 border border-gray-300 rounded-md p-2 bg-blue-50 w-full focus:outline-none focus:ring-2 focus:ring-blue-400">
                        <option value="">Drop down</option>
                        <option value="pt">PT Contoh</option>
                        <option value="cv">CV Contoh</option>
                    </select>
                </div>

                {/* Baris 2 */}
                <div className="grid grid-cols-3 items-center gap-4">
                    <label className="font-medium text-sm">Terdaftar di Negara</label>
                    <input
                        type="text"
                        placeholder="Text"
                        className="col-span-2 border border-gray-300 rounded-md p-2 bg-blue-50 w-full focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Baris 3 */}
                <div className="grid grid-cols-3 items-center gap-4">
                    <label className="font-medium text-sm">
                        Nama Brand/Komersial (jika berbeda)
                    </label>
                    <input
                        type="text"
                        placeholder="Text"
                        className="col-span-2 border border-gray-300 rounded-md p-2 bg-blue-50 w-full focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Baris 4 */}
                <div className="grid grid-cols-3 items-center gap-4">
                    <label className="font-medium text-sm">
                        Tipe Entitas Hukum (PT, CV, Yayasan, dll.)
                    </label>
                    <input
                        type="text"
                        placeholder="Text"
                        className="col-span-2 border border-gray-300 rounded-md p-2 bg-blue-50 w-full focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Baris 5 */}
                <div className="grid grid-cols-3 items-center gap-4">
                    <label className="font-medium text-sm">
                        Nomor Induk Berusaha (NIB)
                    </label>
                    <input
                        type="number"
                        placeholder="number"
                        className="col-span-2 border border-gray-300 rounded-md p-2 bg-blue-50 w-full focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Baris 6 */}
                <div className="grid grid-cols-3 items-center gap-4">
                    <label className="font-medium text-sm">NPWP Perusahaan</label>
                    <input
                        type="number"
                        placeholder="number"
                        className="col-span-2 border border-gray-300 rounded-md p-2 bg-blue-50 w-full focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Baris 7 */}
                <div className="grid grid-cols-3 items-center gap-4">
                    <label className="font-medium text-sm">Alamat Kantor Pusat</label>
                    <input
                        type="text"
                        placeholder="Text"
                        className="col-span-2 border border-gray-300 rounded-md p-2 bg-blue-50 w-full focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Baris 8 */}
                <div className="grid grid-cols-3 items-center gap-4">
                    <label className="font-medium text-sm">
                        Nomor Telepon & Email Resmi
                    </label>
                    <div className="col-span-2 flex gap-3">
                        <input
                            type="text"
                            placeholder="number telp"
                            className="w-1/2 border border-gray-300 rounded-md p-2 bg-blue-50 focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="email"
                            placeholder="email perusahaan"
                            className="w-1/2 border border-gray-300 rounded-md p-2 bg-blue-50 focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                </div>

                {/* Baris 9 */}
                <div className="grid grid-cols-3 items-center gap-4">
                    <label className="font-medium text-sm">Logo</label>
                    <div className="col-span-2 flex items-center gap-3">
                        <input type="file" id="logo" className="hidden" />
                        <label
                            htmlFor="logo"
                            className="px-4 py-2 border border-gray-300 rounded-md bg-blue-50 hover:bg-blue-100 cursor-pointer"
                        >
                            Upload +
                        </label>
                    </div>
                </div>
            </form>
        </div>
    );
}
