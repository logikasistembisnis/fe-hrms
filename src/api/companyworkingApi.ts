import axios from "axios";
import { WorkingBreak, WorkingHours } from "./data";

// Tipe standar respons dari backend
interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export const getCompanyWorkingHours = async (): Promise<
  ApiResponse<WorkingHours[]>
> => {
  const response = await axios.get<ApiResponse<WorkingHours[]>>(
    `${API_BASE}/companyworkinghours`
  );
  return response.data;
};

export const saveCompanyWorkingHours = async (
  companyworkinghours: Partial<WorkingHours>[]
): Promise<ApiResponse<WorkingHours[]>> => {
  const response = await axios.put<ApiResponse<WorkingHours[]>>(
    `${API_BASE}/companyworkinghours`,
    companyworkinghours,
    { headers: { "Content-Type": "application/json" } }
  );
  return response.data;
};

// Hapus data
export const deleteCompanyWorkingHours = async (id: number): Promise<ApiResponse<null>> => {
  const response = await axios.delete<ApiResponse<null>>(`${API_BASE}/companyworkinghours/${id}`);
  return response.data;
};

export const getCompanyWorkingBreak = async (): Promise<
  ApiResponse<WorkingBreak[]>
> => {
  const response = await axios.get<ApiResponse<WorkingBreak[]>>(
    `${API_BASE}/companyworkingbreaktime`
  );
  return response.data;
};

// Simpan data
export const saveCompanyWorkingBreak = async (
  companyworkingbreaktime: Partial<WorkingBreak>[]
): Promise<ApiResponse<WorkingBreak[]>> => {
  const response = await axios.put<ApiResponse<WorkingBreak[]>>(
    `${API_BASE}/companyworkingbreaktime`,
    companyworkingbreaktime,
    { headers: { "Content-Type": "application/json" } }
  );
  return response.data;
};

export const deleteCompanyWorkingBreak = async (id: number): Promise<ApiResponse<null>> => {
  const response = await axios.delete<ApiResponse<null>>(`${API_BASE}/companyworkingbreaktime/${id}`);
  return response.data;
};