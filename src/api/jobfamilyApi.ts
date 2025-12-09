import axios from "axios";
import { CompanyJobFamily, CompanySubFamily } from "./data";

interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const getJobFamily = async (
  companyid: number
): Promise<ApiResponse<CompanyJobFamily[]>> => {
  const response = await axios.get<ApiResponse<CompanyJobFamily[]>>(
    `${API_BASE}/jobfamily`,
    {
      params: { companyid },
    }
  );
  return response.data;
};

export const saveJobFamily = async (formData: FormData): Promise<ApiResponse<CompanyJobFamily[]>> => {
  const response = await axios.post<ApiResponse<CompanyJobFamily[]>>(
    `${API_BASE}/jobfamily`,
    formData,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

// Payload ini bisa berisi field APAPUN yang ada
type NonActiveData = Partial<CompanyJobFamily & CompanySubFamily>;

export const saveNonactive = async (
  nonactive: NonActiveData
): Promise<ApiResponse<CompanyJobFamily[]>> => {
  const response = await axios.post<ApiResponse<CompanyJobFamily[]>>(
    `${API_BASE}/jobfamily/nonactive`,
    nonactive,
    { headers: { "Content-Type": "application/json" } }
  );
  return response.data;
};