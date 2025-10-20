export default function Form10() {
  return (
    <div className="p-6 bg-white text-sm">
      <h2 className="text-xl font-bold mb-4">12. HIRARKI ORGANISASI</h2>

      <div className="grid grid-cols-[250px_100px_1fr] gap-4 items-start">
        {/* ======== KOLOM 1: MENU SAMPING ======== */}
        <div className="space-y-3">
          {/* DIREKTORAT */}
          <div>
            <div className="bg-blue-950 text-white text-center font-bold py-1 rounded-t">
              DIREKTORAT
            </div>
            <div className="border border-t-0 rounded-b px-3 py-2 text-gray-700 bg-gray-100">
              UTAMA (OPEN TEXT)
            </div>
          </div>

          {/* DIVISI */}
          <div>
            <div className="bg-blue-950 text-white text-center font-bold py-1 rounded-t">
              DIVISI
            </div>
            <div className="border border-t-0 rounded-b px-3 py-2 text-gray-700 bg-gray-100">
              SALES (OPEN TEXT)
            </div>
          </div>

          {/* DEPARTMENT */}
          <div>
            <div className="bg-blue-950 text-white text-center font-bold py-1 rounded-t">
              DEPARTMENT
            </div>
            <div className="border border-t-0 rounded-b px-3 py-2 text-gray-700 bg-gray-100">
              DIRECT SALES (OPEN TEXT)
            </div>
          </div>

          {/* UNIT KERJA */}
          <div>
            <div className="bg-blue-950 text-white text-center font-bold py-1 rounded-t">
              UNIT KERJA
            </div>
            <div className="border border-t-0 rounded-b px-3 py-2 text-gray-700 bg-gray-100">
              - (OPEN TEXT)
            </div>
          </div>

          {/* UPLOAD DOKUMEN */}
          <button className="mt-4 w-full bg-black text-white py-2 rounded-full">
            UPLOAD DOKUMEN
          </button>
        </div>

        {/* ======== KOLOM 2: TOMBOL TAMBAH ======== */}
        <div className="flex flex-col gap-8 pt-2">
          <button className="bg-green-600 text-white px-4 py-2 rounded w-full">
            + Tambah
          </button>
          <button className="bg-green-600 text-white px-4 py-2 rounded w-full">
            + Tambah
          </button>
        </div>

        {/* ======== KOLOM 3: TABEL ======== */}
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm">
            <thead>
              <tr className="bg-blue-800 text-white text-left">
                <th className="px-4 py-2 border">DIREKTORAT</th>
                <th className="px-4 py-2 border">DIVISI</th>
                <th className="px-4 py-2 border">DEPARTMENT</th>
                <th className="px-4 py-2 border">UNIT KERJA</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["UTAMA", "HUMAN CAPITAL", "ORGANIZATION DEVELOPMENT", "-"],
                ["UTAMA", "HUMAN CAPITAL", "TALENT ACQUISITION", "-"],
                ["UTAMA", "HUMAN CAPITAL", "TALENT MANAGEMENT", "-"],
                ["UTAMA", "HUMAN CAPITAL", "PERFORMANCE MANAGEMENT", "-"],
                ["UTAMA", "HUMAN CAPITAL", "EMPLOYEE SERVICE", "-"],
                ["SALES & MARKETING", "SALES", "DIRECT SALES", "-"],
                ["SALES & MARKETING", "SALES", "INDIRECT SALES", "-"],
                ["SALES & MARKETING", "SALES", "SALES ANALYTIC", "-"],
                ["SALES & MARKETING", "MARKETING", "MARKETING CAMPAIGN", "-"],
                ["SALES & MARKETING", "MARKETING", "DIGITAL MARKETING", "-"],
                ["SALES & MARKETING", "MARKETING", "MARKETING COMMUNICATION", "-"],
              ].map((row, i) => (
                <tr key={i} className="odd:bg-white even:bg-gray-50">
                  {row.map((cell, j) => (
                    <td key={j} className="px-4 py-2 border">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <p className="text-xs text-gray-600 mt-6">
        * Job Family adalah pengelompokan utama berdasarkan fungsi atau divisi besar, seperti Produksi, Teknik, Keuangan, dll.  
        <br />
        * Sub Job Family adalah pengelompokan lebih spesifik di dalam Job Family, misalnya dalam Produksi ada Manajemen Produksi dan Operasional Produksi.  
        <br />
        * Position adalah jabatan atau posisi spesifik yang diisi oleh karyawan, seperti Direktur Produksi, Operator Produksi, Kepala Bagian Keuangan, dll.
      </p>
    </div>
  );
}
