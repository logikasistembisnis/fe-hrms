import ProfileHeader from "@/components/information/ProfileHeader";
import ProfileProgress from "@/components/information/ProfileProgress";

export default function DataKehadiran() {
    // Sample data
    const data = [
        { no: 1, tanggal: "1 November 2024", hari: "Jumat", jadwalMasuk: "08.00", jadwalKeluar: "17.00", aktualMasuk: "07.30", aktualKeluar: "17.10", keterangan: "OK", tindakLanjut: "REVISI (PRESENSI)", },
        { no: 2, tanggal: "2 November 2024", hari: "Jumat", jadwalMasuk: "08.00", jadwalKeluar: "17.00", aktualMasuk: "07.30", aktualKeluar: "17.10", keterangan: "OK", tindakLanjut: "REVISI (PRESENSI)", },
        { no: 3, tanggal: "3 November 2024", hari: "Jumat", jadwalMasuk: "08.00", jadwalKeluar: "17.00", aktualMasuk: "07.30", aktualKeluar: "17.10", keterangan: "OK", tindakLanjut: "REVISI (PRESENSI)", },
        { no: 4, tanggal: "4 November 2024", hari: "Jumat", jadwalMasuk: "08.00", jadwalKeluar: "17.00", aktualMasuk: "08.20", aktualKeluar: "17.10", keterangan: "TERLAMBAT MASUK", tindakLanjut: "REVISI (PRESENSI)", },
    ];

    return (
        <div className="w-full px-4">
            <div className="flex justify-between items-start mb-3">
                {/* Displays user profile name and basic info */}
                <ProfileHeader name="Rangga" text="Silahkan lihat data kehadiranmu." />
                {/* Shows completion progress of the profile as a percentage */}
                <ProfileProgress text="PERSENTASE KEHADIRANMU HARI KERJA" value="7/21" percentage={33} />
            </div>
            <div>
                <h2 className="font-bold text-lg mb-2">WAKTU KEHADIRAN</h2>
                <div className="border-2 border-blue-400 rounded-md overflow-auto max-h-[400px]">
                    <table className="min-w-full text-sm text-left border-collapse">
                        <thead className="bg-blue-50 sticky top-0 z-10">
                            {/* Table header */}
                            <tr>
                                <th className="p-2 w-10 text-center">NO.</th>
                                <th className="p-2">TANGGAL</th>
                                <th className="p-2">HARI</th>
                                <th className="p-2">JADWAL MASUK</th>
                                <th className="p-2">JADWAL KELUAR</th>
                                <th className="p-2">AKTUAL MASUK</th>
                                <th className="p-2">AKTUAL KELUAR</th>
                                <th className="p-2">KETERANGAN</th>
                                <th className="p-2">TINDAK LANJUT</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Table rows */}
                            {data.map((item) => (
                                <tr key={item.no} className="hover:bg-gray-50">
                                    <td className="p-2 text-center">{item.no}</td>
                                    <td className="p-2">{item.tanggal}</td>
                                    <td className="p-2">{item.hari}</td>
                                    <td className="p-2 text-center">{item.jadwalMasuk}</td>
                                    <td className="p-2 text-center">{item.jadwalKeluar}</td>
                                    <td
                                        className={`p-2 text-center ${item.keterangan === "TERLAMBAT MASUK"
                                            ? "text-red-500 font-semibold"
                                            : ""
                                            }`}
                                    >
                                        {item.aktualMasuk}
                                    </td>
                                    <td className="p-2 text-center">{item.aktualKeluar}</td>
                                    <td className="p-2 text-center">{item.keterangan}</td>
                                    <td className="p-2">{item.tindakLanjut}</td>
                                </tr>
                            ))}
                            {/* Empty rows */}
                            {Array.from({ length: 11 }).map((_, i) => (
                                <tr key={`empty-${i}`}>
                                    <td className="p-2 text-center">{i + data.length + 1}</td>
                                    <td className="p-2" colSpan={8}></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}