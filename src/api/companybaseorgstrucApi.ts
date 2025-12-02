import axios from "axios";
import { BaseOrgStructure, CompanyBaseOrgStruc } from "./data";

// Tipe standar respons dari backend
interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export const getBaseOrgStructure = async (): Promise<
  ApiResponse<BaseOrgStructure[]>
> => {
  const response = await axios.get<ApiResponse<BaseOrgStructure[]>>(
    `${API_BASE}/baseorgstructure`
  );
  return response.data;
};

// Ambil semua data perusahaan
export const getCompanyBaseOrgStruc = async (): Promise<
  ApiResponse<CompanyBaseOrgStruc[]>
> => {
  const response = await axios.get<ApiResponse<CompanyBaseOrgStruc[]>>(
    `${API_BASE}/companybaseorgstruc`
  );
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
