import axios from "axios";
import { Tenant } from "@/api/data";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:8000";

export async function getTenant(id: number): Promise<{ data: Tenant }> {
  const res = await axios.get(`${API_BASE}/tenant/${id}`);
  return res.data;
}

export async function updateTenant(id: number, data: Partial<Tenant>): Promise<{ data: Tenant }> {
  const res = await axios.put(`${API_BASE}/tenant/${id}`, data);
  return res.data;
}
