import axios from "axios";
import { CompanyBaseOrgStruc } from "./data";

// Tipe standar respons dari backend
interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

// Ambil semua data perusahaan
export const getCompanyBaseOrgStruc = async (): Promise<ApiResponse<CompanyBaseOrgStruc[]>> => {
  const response = await axios.get<ApiResponse<CompanyBaseOrgStruc[]>>(`${API_BASE}/companybaseorgstruc`);
  return response.data;
};

// Simpan data
export const saveCompanyBaseOrgStruc = async (
  companybaseorgstruc: Partial<CompanyBaseOrgStruc>[]
): Promise<ApiResponse<CompanyBaseOrgStruc[]>> => {
  const response = await axios.put<ApiResponse<CompanyBaseOrgStruc[]>>(
    `${API_BASE}/companybaseorgstruc`,
    companybaseorgstruc,
    { headers: { "Content-Type": "application/json" } }
  );
  return response.data;
};