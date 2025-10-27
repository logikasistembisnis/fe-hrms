import axios from "axios";
import { Company } from "./data";

// Tipe standar respons dari backend
interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

// Ambil semua data perusahaan
export const getCompanies = async (): Promise<ApiResponse<Company[]>> => {
  const response = await axios.get<ApiResponse<Company[]>>(`${API_BASE}/company`);
  return response.data;
};

// Simpan data umum perusahaan (Form Perusahaan)
export const saveCompany = async (
  companies: Partial<Company>[]
): Promise<ApiResponse<Company[]>> => {
  const response = await axios.put<ApiResponse<Company[]>>(
    `${API_BASE}/company`,
    companies,
    { headers: { "Content-Type": "application/json" } }
  );
  return response.data;
};

// Simpan detail perusahaan (Form Detail Perusahaan)
export const saveCompanyDetails = async (
  id: number,
  formData: FormData
): Promise<ApiResponse<Company>> => {
  const response = await axios.post<ApiResponse<Company>>(
    `${API_BASE}/company/${id}/details`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
  return response.data;
};

// Simpan desain perusahaan (Form Desain Perusahaan)
export const saveCompanyDesign = async (companies: Partial<Company>[]): Promise<ApiResponse<null>> => {
  const response = await axios.put<ApiResponse<null>>(
    `${API_BASE}/company/companydesign`,
    companies,
    { headers: { "Content-Type": "application/json" } }
  );
  return response.data;
};

// Hapus perusahaan
export const deleteCompany = async (id: number): Promise<ApiResponse<null>> => {
  const response = await axios.delete<ApiResponse<null>>(`${API_BASE}/company/${id}`);
  return response.data;
};