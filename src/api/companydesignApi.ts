import axios from "axios";
import { CompanyDesign } from "./data";

interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const getCompanyDesign = async (): Promise<ApiResponse<CompanyDesign[]>> => {
  const response = await axios.get<ApiResponse<CompanyDesign[]>>(`${API_BASE}/companydesign`);
  return response.data;
};
