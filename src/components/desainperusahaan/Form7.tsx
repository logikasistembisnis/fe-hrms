"use client";

export default function Form7() {
  const hariLiburList = [
    "Libur Idul Fitri",
    "Libur Waisak",
    "Libur Hari Natal",
    "Libur Wafatnya Isa Almasih",
    "Libur Jumat Agung",
    "Libur Hari Raya Waisak",
    "Libur Hari Kemerdekaan",
    "Libur Hari Buruh",
    "Etc",
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-6">
        9. Hari Libur Nasional
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* --- Kolom Input --- */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="bg-blue-900 text-white font-semibold text-center py-2 rounded-lg mb-4">
            Masukkan Tanggal
          </h2>

          <div className="space-y-4 text-sm text-gray-700">
            <div>
              <label className="block mb-1 font-medium">
                Kalendar, Tahun, Bulan, Hari, Angka
              </label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Masukkan tanggal..."
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Keterangan</label>
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Contoh: Libur Idul Fitri"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Berapa Hari</label>
              <input
                type="number"
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Misal: 2"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                Potong Cuti Tahunan
              </label>
              <select className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option>Ya</option>
                <option>Tidak</option>
              </select>
            </div>

            <div className="flex justify-start gap-3">
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-full text-sm">
                Tambah
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-full text-sm">
                Hapus
              </button>
            </div>

            <div className="pt-3">
              <button className="bg-black text-white text-sm px-4 py-1 rounded-full hover:bg-gray-800">
                Upload Dokumen
              </button>
            </div>
          </div>
        </div>

        {/* --- Kolom Daftar Hari Libur --- */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="bg-blue-900 text-white font-semibold text-center py-2 rounded-lg mb-4">
            Daftar Hari Libur Nasional 2025
          </h2>

          <ul className="list-decimal pl-5 text-sm text-gray-800 space-y-2">
            {hariLiburList.map((libur, idx) => (
              <li key={idx}>{libur}</li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
