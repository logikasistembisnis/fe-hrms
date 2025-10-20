"use client";

export default function Form13() {
  const data = [
    {
      perusahaan: "PT. Kamu Ada Aja",
      namaPosisi: "DIREKTUR UTAMA",
      melaporKepada: "-",
      unitKerja: "PT. Kamu Ada Aja",
      departemen: "PT. Kamu Ada Aja",
      subKelJabatan: "PT. Kamu Ada Aja",
    },
    {
      perusahaan: "PT. Kamu Ada Aja",
      namaPosisi: "KEPALA BAGIAN PRODUKSI",
      melaporKepada: "DIREKTUR PRODUKSI",
      unitKerja: "PT. Kamu Ada Aja",
      departemen: "PT. Kamu Ada Aja",
      subKelJabatan: "PT. Kamu Ada Aja",
    },
    // Tambahkan data dummy lain sesuai kebutuhan
  ];

  return (
    <div className="p-6">
      <h2 className="text-lg font-bold mb-4">
        14. JOB REPOSITORY - LIST
      </h2>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg ">
        <table className="min-w-[1400px] w-full text-sm text-left text-gray-700">
          <thead className="bg-blue-900 text-white">
            <tr>
              <th className="px-4 py-3 font-semibold">PERUSAHAAN</th>
              <th className="px-4 py-3 font-semibold">NAMA POSISI</th>
              <th className="px-4 py-3 font-semibold">MELAPOR KEPADA</th>
              <th className="px-4 py-3 font-semibold">UNIT KERJA</th>
              <th className="px-4 py-3 font-semibold">DEPARTEMEN</th>
              <th className="px-4 py-3 font-semibold">SUB-KELOMPOK JABATAN</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
              >
                <td className="px-4 py-2">{row.perusahaan}</td>
                <td className="px-4 py-2">{row.namaPosisi}</td>
                <td className="px-4 py-2">{row.melaporKepada}</td>
                <td className="px-4 py-2">{row.unitKerja}</td>
                <td className="px-4 py-2">{row.departemen}</td>
                <td className="px-4 py-2">{row.subKelJabatan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
