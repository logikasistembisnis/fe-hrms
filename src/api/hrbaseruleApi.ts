import axios from "axios";
import { HRBaseRule } from "./data";

interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const getHRBaseRule = async (): Promise<ApiResponse<HRBaseRule[]>> => {
  const response = await axios.get<ApiResponse<HRBaseRule[]>>(`${API_BASE}/hrbaserule`);
  return response.data;
};
