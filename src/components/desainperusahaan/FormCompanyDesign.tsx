"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
// Impor React Flow
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  MarkerType,
  Node,
  Edge,
} from "reactflow";
// Impor CSS wajib untuk React Flow
import "reactflow/dist/style.css";

// Impor Dagre untuk layout otomatis
import dagre from "dagre";

import { getCompanies, saveCompanyDesign } from "@/api/companyApi";
import { getCompanyDesign } from "@/api/companydesignApi";
import { Company, CompanyDesign } from "@/api/data";

type DesignType =
  | ""
  | "Super Holding"
  | "Holding"
  | "Country Operation"
  | "Subsidiary"
  | "Stand Alone";

interface DesignCompany extends Company {
  design: DesignType;
  reportTo: string;
}

// --- Helper Styling React Flow ---
const getNodeStyle = (design: DesignType) => {
  const baseStyle = {
    padding: "8px 16px",
    borderWidth: "1px",
    borderRadius: "8px",
    fontSize: "12px",
    textAlign: "center" as const,
  };

  switch (design) {
    case "Super Holding":
      return {
        ...baseStyle,
        backgroundColor: "#DBEAFE",
        borderColor: "#93C5FD",
        color: "#1E3A8A",
      };
    case "Holding":
      return {
        ...baseStyle,
        backgroundColor: "#E0F2FE",
        borderColor: "#7DD3FC",
        color: "#075985",
      };
    case "Country Operation":
      return {
        ...baseStyle,
        backgroundColor: "#FEF9C3",
        borderColor: "#FDE047",
        color: "#713F12",
      };
    case "Subsidiary":
      return {
        ...baseStyle,
        backgroundColor: "#DCFCE7",
        borderColor: "#86EFAC",
        color: "#166534",
      };
    case "Stand Alone":
      return {
        ...baseStyle,
        backgroundColor: "#F3F4F6",
        borderColor: "#D1D5DB",
        color: "#374151",
      };
    default:
      return {
        ...baseStyle,
        backgroundColor: "#FFFFFF",
        borderColor: "#D1D5DB",
      };
  }
};

// --- Konstanta untuk Layout Dagre ---
const nodeWidth = 180;
const nodeHeight = 60;

const getLayoutedElements = (
  nodesToLayout: Node[],
  edgesToLayout: Edge[]
) => {
  const g = new dagre.graphlib.Graph();
  g.setGraph({ rankdir: 'TB', nodesep: 50, ranksep: 60 });
  g.setDefaultEdgeLabel(() => ({}));

  nodesToLayout.forEach((node) => {
    g.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edgesToLayout.forEach((edge) => {
    g.setEdge(edge.source, edge.target);
  });

  dagre.layout(g);

  const layoutedNodes = nodesToLayout.map((node) => {
    const { x, y } = g.node(node.id);
    return {
      ...node,
      position: { x: x - nodeWidth / 2, y: y - nodeHeight / 2 },
    };
  });

  return { nodes: layoutedNodes, edges: edgesToLayout };
};


// --- Komponen Diagram React Flow ---
function CompanyChart({ companies }: { companies: DesignCompany[] }) {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const nodeTypes = useMemo(() => ({}), []); 

  useEffect(() => {
    // 1. Filter perusahaan yang memiliki desain
    const validCompanies = companies.filter((c) => c.design !== "");

    // 2. Buat Nodes (TANPA 'position' awal)
    const initialNodes = validCompanies.map((c) => ({
      id: c.companyid.toString(),
      type: "default",
      data: {
        label: (
          // Beri style agar lebar node konsisten
          <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}> {/* 32px = 16px padding L/R */}
            <p className="font-semibold whitespace-normal">{c.name}</p>
            <p className="text-xs italic">{c.design}</p>
          </div>
        ),
      },
      position: { x: 0, y: 0 }, // Tidak ada posisi awal
      style: getNodeStyle(c.design),
    }));

    // 3. Buat Edges (sama seperti sebelumnya)
    const initialEdges = validCompanies
      .filter((c) => c.reportTo !== "") // Hanya yg "melapor ke"
      .map((c) => {
        // Cari parent
        const parent = companies.find((p) => p.name === c.reportTo);
        if (!parent) return null; // Jika parent tidak ditemukan

        return {
          id: `e-${parent.companyid}-${c.companyid}`,
          source: parent.companyid.toString(), // ID parent
          target: c.companyid.toString(), // ID child
          type: "smoothstep", // Tipe garis
          markerEnd: { type: MarkerType.ArrowClosed, color: "#6b7280" }, // Tanda panah
          style: { stroke: "#6b7280" },
        };
      })
      .filter((e): e is NonNullable<typeof e> => e !== null); // Hapus yg null

    // 4. Hitung Layout menggunakan Dagre
    const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
      initialNodes,
      initialEdges
    );

    setNodes(layoutedNodes);
    setEdges(layoutedEdges);
  }, [companies, setNodes, setEdges]); // Dijalankan ulang saat `companies` berubah

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      fitView // Otomatis zoom & pan agar semua node terlihat
      nodesDraggable={true} // Node bisa digeser
    >
      <Controls />
      <Background />
    </ReactFlow>
  );
}

export default function FormCompanyDesign({
  onNextStep,
  onBack,
}: {
  onNextStep: () => void;
  onBack: () => void;
}) {
  const [companies, setCompanies] = useState<DesignCompany[]>([]);
  const [companyDesign, setCompanyDesign] = useState<CompanyDesign[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Ambil data perusahaan & desain dari API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [resCompanies, resDesigns] = await Promise.all([
          getCompanies(),
          getCompanyDesign(),
        ]);

        const apiCompanies = resCompanies.data.map((c) => ({
          ...c,
          design: (c.companydesign?.name || "") as DesignType,
          reportTo: c.reporttocompany?.name || "",
        }));

        setCompanies(apiCompanies);
        setCompanyDesign(resDesigns.data);
      } catch (err) {
        console.error("Gagal memuat data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle perubahan dropdown
  const handleChange = (
    index: number,
    field: keyof DesignCompany,
    value: string
  ) => {
    const updated = [...companies];
    updated[index] = { ...updated[index], [field]: value };

    // Jika ubah design, reset reportTo
    if (field === "design") {
      updated[index].reportTo = "";
    }

    setCompanies(updated);
  };

  // Tentukan opsi "melapor ke" berdasarkan desain
  const getReportToOptions = (currentDesign: DesignType) => {
    switch (currentDesign) {
      case "Super Holding":
      case "Stand Alone":
        return [];
      case "Holding":
        return companies.filter((c) => c.design === "Super Holding");
      case "Country Operation":
        return companies.filter(
          (c) => c.design === "Super Holding" || c.design === "Holding"
        );
      case "Subsidiary":
        return companies.filter(
          (c) =>
            c.design === "Super Holding" ||
            c.design === "Holding" ||
            c.design === "Country Operation"
        );
      default:
        return [];
    }
  };

  // Simpan ke backend
  const handleSave = async () => {
    try {
      setSaving(true);

      const payload = companies
        .filter((c) => c.design !== "")
        .map((c) => {
          const selectedDesign = companyDesign.find(
            (d) => d.name === c.design
          );
          const reportToCompany = companies.find(
            (r) => r.name === c.reportTo
          );

          return {
            companyid: c.companyid,
            companydesignid: selectedDesign?.companydesignid ?? null,
            reporttocompanyid: reportToCompany?.companyid ?? null,
          };
        });

      await saveCompanyDesign(payload);
      // Menggunakan alert bawaan seperti kode asli
      alert("Desain perusahaan berhasil disimpan!");
      onNextStep();
    } catch (err) {
      console.error("Gagal menyimpan desain perusahaan:", err);
      alert("Terjadi kesalahan saat menyimpan data.");
    } finally {
      setSaving(false);
    }
  };

  // Memoize nilai-nilai ini agar tidak dihitung ulang pada setiap render
  const { hasAnyDesign, hasRoot } = useMemo(() => {
    const anyDesign = companies.some((c) => c.design !== "");
    const root = companies.some(
      (c) => c.design === "Super Holding" || c.design === "Stand Alone"
    );
    return { hasAnyDesign: anyDesign, hasRoot: root };
  }, [companies]);

  if (loading) return <p className="p-6 text-gray-600">Memuat data...</p>;

  // --- Render utama (Form + Diagram) ---
  return (
    <div className="p-6 w-full mx-auto">
      <h3 className="text-lg font-semibold mb-4">
        5. Masukan informasi group perusahaan
      </h3>

      {/* Header */}
      <div className="grid grid-cols-4 font-semibold text-sm bg-gray-100 border border-gray-300 rounded-t-md">
        <div className="p-2 border-r border-gray-300">Nama Perusahaan</div>
        <div className="p-2 border-r border-gray-300">Negara</div>
        <div className="p-2 border-r border-gray-300">Desain Perusahaan</div>
        <div className="p-2">Melapor Ke</div>
      </div>

      {/* Rows */}
      {companies.map((company, index) => {
        const reportOptions = getReportToOptions(company.design);
        const isReportToDisabled =
          company.design === "Super Holding" ||
          company.design === "Stand Alone" ||
          reportOptions.length === 0;

        return (
          <div
            key={index}
            className="grid grid-cols-4 border-x border-b border-gray-300 text-sm"
          >
            <div className="p-2 border-r border-gray-300">{company.name}</div>
            <div className="p-2 border-r border-gray-300">
              {company.country?.name || ""}
            </div>

            <div className="p-2 border-r border-gray-300">
              <select
                value={company.design}
                onChange={(e) =>
                  handleChange(index, "design", e.target.value)
                }
                className="w-full border border-gray-300 rounded-md p-1 bg-blue-50 focus:ring-2 focus:ring-blue-400"
              >
                <option value="">Pilih</option>
                {companyDesign.map((opt) => (
                  <option key={opt.companydesignid} value={opt.name}>
                    {opt.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="p-2">
              <select
                value={company.reportTo}
                onChange={(e) =>
                  handleChange(index, "reportTo", e.target.value)
                }
                disabled={isReportToDisabled}
                className={`w-full border border-gray-300 rounded-md p-1 ${isReportToDisabled
                    ? "bg-gray-100 text-gray-400"
                    : "bg-blue-50 focus:ring-2 focus:ring-blue-400"
                  }`}
              >
                <option value="">—</option>
                {reportOptions.map((c) => (
                  <option key={c.name} value={c.name}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        );
      })}

      {/* Diagram React Flow */}
      <div
        className="mt-6 w-full p-6 bg-gray-50 rounded-lg border overflow-hidden"
        style={{ height: "500px" }}
      >
        <h4 className="text-md font-semibold mb-4 text-center">
          Bagan Struktur Organisasi (Live Preview)
        </h4>

        {/* Logika untuk menampilkan placeholder atau error */}
        {!hasAnyDesign && (
          <div className="h-full flex flex-col justify-center items-center text-center text-gray-500">
            <p>Bagan struktur akan muncul di sini.</p>
            <p className="text-sm">
              Mulai dengan memilih &quot;Super Holding&quot; atau &quot;Stand
              Alone&quot; pada tabel di atas.
            </p>
          </div>
        )}

        {hasAnyDesign && !hasRoot && (
          <div className="h-full flex flex-col justify-center items-center text-center text-red-600">
            <p className="font-semibold">Struktur Tidak Valid</p>
            <p className="text-sm">
              Tidak ditemukan &quot;Super Holding&quot; atau &quot;Stand
              Alone&quot; sebagai akar struktur.
            </p>
          </div>
        )}

        {/* Render chart hanya jika ada desain DAN ada root */}
        {hasAnyDesign && hasRoot && <CompanyChart companies={companies} />}
      </div>

      {/* Tombol Navigasi */}
      <div className="flex gap-4 justify-end mt-6">
        <button
          onClick={onBack}
          className="bg-green-100 hover:bg-green-300 text-sm text-gray-700 font-semibold py-2 px-6 rounded-full transition"
          disabled={saving}
        >
          Kembali
        </button>

        <button
          onClick={handleSave}
          disabled={saving}
          className={`${saving ? "bg-gray-400" : "bg-green-500 hover:bg-green-700"
            } text-sm text-white font-semibold py-2 px-6 rounded-full transition`}
        >
          {saving ? "Menyimpan..." : "Simpan & Lanjut"}
        </button>
      </div>
    </div>
  );
}

