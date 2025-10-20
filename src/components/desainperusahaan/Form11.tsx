"use client";

export default function Form11() {
  return (
    <div className="p-8 bg-white text-gray-900 min-h-screen">
      {/* === TITLE === */}
      <h1 className="text-xl font-bold mb-4">
        13. KELOMPOK JABATAN <i>(JOB FAMILY)</i>
      </h1>

      {/* === MAIN LAYOUT === */}
      <div className="grid grid-cols-[300px_100px_1fr] gap-4 items-start">
        {/* === LEFT COLUMN === */}
        <div className="space-y-4">
          {/* Kolom 1 */}
          <div>
            <div className="bg-blue-900 text-white text-sm font-bold text-center py-2 rounded-t">
              MASUKAN NAMA KELOMPOK JABATAN
            </div>
            <div className="border border-gray-300 rounded-b p-2 text-xs bg-gray-50">
              PRODUKSI (CONTOH) free text
              <br />
              tambah
            </div>
            <p className="text-right text-xs text-gray-500 mt-1">Open text</p>
          </div>

          {/* Kolom 2 */}
          <div>
            <div className="bg-blue-900 text-white text-sm font-bold text-center py-2 rounded-t">
              MASUKAN NAMA SUB-KELOMPOK JABATAN
            </div>
            <div className="border border-gray-300 rounded-b p-2 text-xs bg-gray-50">
              MANAJEMEN PRODUKSI
            </div>
            <p className="text-right text-xs text-gray-500 mt-1">Open text</p>
          </div>

          {/* Upload Dokumen */}
          <button className="bg-black text-white text-xs px-3 py-2 rounded flex items-center gap-2">
            UPLOAD DOKUMEN
          </button>

          {/* Keterangan bawah */}
          <div className="text-[10px] text-gray-600 space-y-1">
            <p>
              * Job Family adalah pengelompokan utama berdasarkan fungsi atau
              divisi besar, seperti Produksi, Teknik, Keuangan, dll.
            </p>
            <p>
              * Sub-Job Family adalah pengelompokan lebih spesifik di dalam Job
              Family, misalnya dalam Produksi ada Manajemen Produksi dan
              Operasional Produksi.
            </p>
            <p>
              * Posisi adalah jabatan atau posisi spesifik yang diisi oleh satu
              orang karyawan, seperti Direktur Produksi, Operator Produksi,
              Kepala Bagian Keuangan, dll.
            </p>
          </div>
        </div>

        {/* === MIDDLE COLUMN (BUTTON TAMBAH) === */}
        <div className="flex flex-col justify-start items-center gap-10 mt-8">
          <button className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded">
            Tambah
          </button>
          <button className="bg-green-500 hover:bg-green-600 text-white text-xs px-3 py-1 rounded">
            Tambah
          </button>
        </div>

        {/* === RIGHT COLUMN (TABLE) === */}
        <div className="overflow-x-auto border">
          <table className="min-w-full text-xs border-collapse">
            <thead>
              <tr className="bg-blue-900 text-white text-left">
                <th className="px-2 py-1 border">Kelompok Jabatan (Job Family)</th>
                <th className="px-2 py-1 border">Kode Job Family</th>
                <th className="px-2 py-1 border">Sub-Kelompok Jabatan (Sub-Job Family)</th>
                <th className="px-2 py-1 border">Kode Jabatan</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Manajemen Eksekutif", "JF00000001", "Manajemen Produksi", "JC00000001"],
                ["Produksi", "JF00000002", "Pengawasan Produksi", "JC00000002"],
                ["Teknik & Pemeliharaan", "JF00000003", "Teknik Mesin", "JC00000003"],
                ["Keuangan & Akuntansi", "JF00000004", "Utilitas & Perawatan", "JC00000004"],
                ["Pemasaran & Penjualan", "JF00000005", "Keuangan", "JC00000005"],
                ["Logistik & Gudang", "JF00000006", "Marketing", "JC00000006"],
                ["Administrasi Umum", "JF00000007", "Gudang", "JC00000007"],
                ["Quality Control", "JF00000008", "Manajemen SDM", "JC00000008"],
                ["SDM", "JF00000009", "Rekrutmen & Seleksi", "JC00000009"],
                ["K3", "JF00000010", "Kesehatan, Keselamatan, dan Lingkungan (K3)", "JC00000010"],
              ].map((row, i) => (
                <tr key={i} className="even:bg-gray-50">
                  {row.map((cell, j) => (
                    <td key={j} className="px-2 py-1 border">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
