import axios from "axios";
import { Tenant } from "@/api/data";

interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const getTenant = async (id: number): Promise<
  ApiResponse<Tenant>
> => {
  const response = await axios.get<ApiResponse<Tenant>>(
    `${API_BASE}/tenant/${id}`
  );
  return response.data;
};

export const saveTenant = async (
  tenant: Partial<Tenant>[]
): Promise<ApiResponse<Tenant[]>> => {
  const response = await axios.put<ApiResponse<Tenant[]>>(
    `${API_BASE}/tenant`,
    tenant,
    { headers: { "Content-Type": "application/json" } }
  );
  return response.data;
};

export const deleteTenant = async (id: number): Promise<ApiResponse<null>> => {
  const response = await axios.delete<ApiResponse<null>>(`${API_BASE}/tenant/${id}`);
  return response.data;
};