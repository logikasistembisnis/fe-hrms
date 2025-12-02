import axios from "axios";
import { HRBaseRule, CompanyHRRule } from "./data";

// Tipe standar respons dari backend
interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export const getHRBaseRule = async (): Promise<ApiResponse<HRBaseRule[]>> => {
  const response = await axios.get<ApiResponse<HRBaseRule[]>>(`${API_BASE}/hrbaserule`);
  return response.data;
};

// Ambil semua data 
export const getCompanyHRRule = async (): Promise<ApiResponse<CompanyHRRule[]>> => {
  const response = await axios.get<ApiResponse<CompanyHRRule[]>>(`${API_BASE}/companyhrrule`);
  return response.data;
};

// Simpan data
export const saveCompanyHRRule = async (
  companyhrrule: Partial<CompanyHRRule>[]
): Promise<ApiResponse<CompanyHRRule[]>> => {
  const response = await axios.put<ApiResponse<CompanyHRRule[]>>(
    `${API_BASE}/companyhrrule`,
    companyhrrule,
    { headers: { "Content-Type": "application/json" } }
  );
  return response.data;
};