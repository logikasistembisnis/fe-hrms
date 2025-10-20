"use client";

export default function Form6() {
  const cutiList = [
    { jenis: "Cuti Tahunan", hari: 12 },
    { jenis: "Cuti Besar / Cuti Panjang", hari: 30 },
    { jenis: "Cuti Sakit", hari: 3 },
    { jenis: "Cuti Melahirkan", hari: 90 },
    { jenis: "Cuti Keguguran", hari: 45 },
    { jenis: "Cuti Ibadah Haji", hari: 40 },
    { jenis: "Cuti Menikah", hari: 3 },
    { jenis: "Menikahkan Anak", hari: 2 },
    { jenis: "Khitanan / Pembaptisan Anak", hari: 2 },
    { jenis: "Keluarga Meninggal", hari: 2 },
    { jenis: "Cuti Belajar", hari: "-" },
    { jenis: "Cuti Bersama", hari: "-" },
  ];

  const izinList = [
    "Izin Terlambat",
    "Izin Pulang Cepat",
    "Izin Tidak Masuk Kerja",
    "Izin Tugas Luar",
    "Izin Tugas Negara",
    "Izin Menghadiri Acara Keluarga",
    "Izin Keguguran",
    "Izin Sakit Tanpa Surat Dokter",
    "Izin Sakit Dengan Surat Dokter",
    "Izin Keperluan Pribadi",
    "Izin Mengantarkan / Menjemput Keluarga",
    "Izin Mengikuti Pelatihan",
  ];

  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-3">
        8. Cuti dan Izin
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* --- Kolom Cuti --- */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="bg-blue-900 text-white text-lg font-bold text-center py-2 rounded-lg mb-4">
            Tipe Cuti + Hari
          </h2>

          <table className="w-full text-sm text-gray-700">
            <thead>
              <tr>
                <th className="text-left py-2">Jenis Cuti</th>
                <th className="text-center py-2">Checklist</th>
                <th className="text-center py-2">Jumlah Hari</th>
              </tr>
            </thead>
            <tbody>
              {cutiList.map((item, idx) => (
                <tr key={idx} className=" hover:bg-gray-50">
                  <td className="py-1">{item.jenis}</td>
                  <td className="text-center">
                    <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                  </td>
                  <td className="text-center">{item.hari}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex gap-3 mt-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-full text-sm">
              Tambah
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-full text-sm">
              Hapus
            </button>
          </div>
        </div>

        {/* --- Kolom Izin --- */}
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="bg-blue-900 text-white text-lg font-bold text-center py-2 rounded-lg mb-4">
            Tipe Izin + Hari
          </h2>

          <table className="w-full text-sm text-gray-700">
            <thead>
              <tr>
                <th className="text-left py-2">Jenis Izin</th>
                <th className="text-center py-2">Checklist</th>
                <th className="text-center py-2">Jumlah Hari</th>
              </tr>
            </thead>
            <tbody>
              {izinList.map((jenis, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="py-1">{jenis}</td>
                  <td className="text-center">
                    <input type="checkbox" className="w-4 h-4 accent-blue-600" />
                  </td>
                  <td className="text-center">-</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="flex gap-3 mt-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-full text-sm">
              Tambah
            </button>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-1 rounded-full text-sm">
              Hapus
            </button>
          </div>
        </div>
      </div>

      <p className="text-xs text-red-500 italic mt-6">
        *Jika di-checklist maka akan muncul di pilihan cuti pegawai
      </p>
    </main>
  );
}
