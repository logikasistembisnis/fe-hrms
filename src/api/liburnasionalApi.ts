import axios from "axios";
import { HariLiburNasional, CompLiburNasional } from "./data";

interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: string;
}

const API_BASE =  process.env.NEXT_PUBLIC_API_URL ||"http://localhost:8000";

export const getHariLiburNasional = async (): Promise<ApiResponse<HariLiburNasional[]>> => {
  const response = await axios.get<ApiResponse<HariLiburNasional[]>>(`${API_BASE}/hariliburnasional`);
  return response.data;
};

export const getCompLiburNasional = async (): Promise<ApiResponse<CompLiburNasional[]>> => {
  const response = await axios.get<ApiResponse<CompLiburNasional[]>>(`${API_BASE}/compliburnasional`);
  return response.data;
};

// Simpan data
export const saveCompLiburNasional = async (
  formData: FormData
): Promise<ApiResponse<CompLiburNasional>> => {
  const response = await axios.post<ApiResponse<CompLiburNasional>>(
    `${API_BASE}/compliburnasional`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" },
    }
  );
  return response.data;
};

// Hapus data
export const deleteCompLiburNasional = async (id: number): Promise<ApiResponse<null>> => {
  const response = await axios.delete<ApiResponse<null>>(`${API_BASE}/compliburnasional/${id}`);
  return response.data;
};