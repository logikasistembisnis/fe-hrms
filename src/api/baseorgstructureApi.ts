import axios from "axios";
import { BaseOrgStructure } from "./data";

interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const getBaseOrgStructure = async (): Promise<ApiResponse<BaseOrgStructure[]>> => {
  const response = await axios.get<ApiResponse<BaseOrgStructure[]>>(`${API_BASE}/baseorgstructure`);
  return response.data;
};
