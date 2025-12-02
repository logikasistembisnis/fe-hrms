"use client";

export default function FormAturJamKerja() {
  const dataJamKerja = [
    {
      tipe: "Shift",
      kategori: "Pagi",
      skema: "0-1",
      durasi: 7,
      durasiIstirahat: 1,
      jamMasuk: "05.00",
      jamKeluar: "13.00",
      istirahatMulai: "09.00",
      istirahatSelesai: "10.00",
      kodeShift: "PG05",
    },
    {
      tipe: "Non Shift",
      kategori: "Pagi",
      skema: "5-2",
      durasi: 8,
      durasiIstirahat: 1,
      jamMasuk: "07.00",
      jamKeluar: "16.00",
      istirahatMulai: "12.00",
      istirahatSelesai: "13.00",
      kodeShift: "PG06",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">
        10. Atur Jam Kerja
      </h1>
      <p className="text-sm text-gray-600 mb-6">
        SHIFT-[KATEGORI]-[JAM_MASUK]-[JAM_KELUAR]-[DURASI]-[SKEMA]
      </p>

      <div className="overflow-x-auto bg-white rounded-2xl shadow">
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
            {dataJamKerja.map((row, idx) => (
              <tr
                key={idx}
                className={`text-center ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
              >
                <td className="px-4 py-2 font-medium">{row.tipe}</td>
                <td className="px-4 py-2">{row.kategori}</td>
                <td className="px-4 py-2">{row.skema}</td>
                <td className="px-4 py-2">{row.durasi}</td>
                <td className="px-4 py-2">{row.durasiIstirahat}</td>
                <td className="px-4 py-2">{row.jamMasuk}</td>
                <td className="px-4 py-2">{row.jamKeluar}</td>
                <td className="px-4 py-2">{row.istirahatMulai}</td>
                <td className="px-4 py-2">{row.istirahatSelesai}</td>
                <td className="px-4 py-2">{row.kodeShift}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
