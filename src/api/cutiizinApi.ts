import axios from "axios";
import { DaftarCuti, DaftarIzin, CompanyCuti, CompanyIzin } from "./data";

interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const getDaftarCuti = async (): Promise<ApiResponse<DaftarCuti[]>> => {
  const response = await axios.get<ApiResponse<DaftarCuti[]>>(`${API_BASE}/daftarcuti`);
  return response.data;
};

export const getDaftarIzin = async (): Promise<ApiResponse<DaftarIzin[]>> => {
  const response = await axios.get<ApiResponse<DaftarIzin[]>>(`${API_BASE}/daftarizin`);
  return response.data;
};

export const getCompanyCuti = async (): Promise<ApiResponse<CompanyCuti[]>> => {
  const response = await axios.get<ApiResponse<CompanyCuti[]>>(`${API_BASE}/companycuti`);
  return response.data;
};

export const getCompanyIzin = async (): Promise<ApiResponse<CompanyIzin[]>> => {
  const response = await axios.get<ApiResponse<CompanyIzin[]>>(`${API_BASE}/companyizin`);
  return response.data;
};

// Simpan data
export const saveCompanyCuti = async (
  companycuti: Partial<CompanyCuti>[]
): Promise<ApiResponse<CompanyCuti[]>> => {
  const response = await axios.put<ApiResponse<CompanyCuti[]>>(
    `${API_BASE}/companycuti`,
    companycuti,
    { headers: { "Content-Type": "application/json" } }
  );
  return response.data;
};

export const saveCompanyIzin = async (companyizin: Partial<CompanyIzin>[]): Promise<ApiResponse<CompanyIzin[]>> => {
  const response = await axios.put<ApiResponse<CompanyIzin[]>>(
    `${API_BASE}/companyizin`,
    companyizin,
    { headers: { "Content-Type": "application/json" } }
  );
  return response.data;
};