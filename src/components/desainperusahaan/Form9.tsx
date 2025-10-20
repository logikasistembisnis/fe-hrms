"use client";
import React from "react";

export default function Form9() {
  const columns = [
    "Direktur Utama",
    "Direksi",
    "Group Divisi",
    "Divisi",
    "Group Departemen",
    "Departemen",
    "Group Unit Kerja",
    "Unit Kerja",
    "Team",
    "Individu",
  ];

  const modules = [
    {
      title: "Modul Master Admin",
      menus: ["Menu 1", "Menu 2", "Menu 3"],
    },
    {
      title: "Modul Layanan Mandiri",
      menus: ["Menu 1", "Menu 2", "Menu 3"],
    },
  ];

  return (
    <main className="min-h-screen p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          11. Security Group - SG
        </h1>
        <select className="border border-gray-300 rounded-lg px-3 py-1 text-sm">
          <option>SG - HR</option>
          <option>SG - Non HR</option>
        </select>
      </div>

      <div className="overflow-x-auto bg-white rounded-2xl shadow p-6">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="text-center border-b">
              <th className="text-left px-4 py-2 w-48">Modul / Menu</th>
              {columns.map((col, idx) => (
                <th key={idx} className="px-2 py-2 text-gray-700 font-medium">
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {modules.map((mod, i) => (
              <React.Fragment key={i}>
                {/* Modul Header */}
                <tr className="bg-blue-50">
                  <td
                    colSpan={columns.length + 1}
                    className="font-semibold text-gray-700 px-4 py-2"
                  >
                    {mod.title}
                  </td>
                </tr>

                {/* Menu Rows */}
                {mod.menus.map((menu, j) => (
                  <tr
                    key={j}
                    className={`border-b ${
                      j % 2 === 0 ? "bg-white" : "bg-gray-50"
                    }`}
                  >
                    <td className="px-4 py-2 text-gray-800">{menu}</td>
                    {columns.map((_, k) => (
                      <td key={k} className="text-center">
                        <input
                          type="checkbox"
                          className="h-4 w-4 accent-blue-600"
                          defaultChecked={Math.random() > 0.6}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
