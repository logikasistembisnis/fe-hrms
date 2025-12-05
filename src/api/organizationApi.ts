import axios from "axios";
import { CompanyDirectorate, CompanyDivision, CompanyDepartment, CompanyUnitKerja } from "./data";

interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const getOrganization = async (
  companyid: number
): Promise<ApiResponse<CompanyDirectorate[]>> => {
  const response = await axios.get<ApiResponse<CompanyDirectorate[]>>(
    `${API_BASE}/organization`,
    {
      params: { companyid },
    }
  );
  return response.data;
};

export const saveHierarchy = async (formData: FormData): Promise<ApiResponse<CompanyDirectorate[]>> => {
  const response = await axios.post<ApiResponse<CompanyDirectorate[]>>(
    `${API_BASE}/organization`,
    formData,{
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};

// Payload ini bisa berisi field APAPUN yang ada di Directorate, Division, Department, ATAU UnitKerja
type NonActiveData = Partial<CompanyDirectorate & CompanyDivision & CompanyDepartment & CompanyUnitKerja>;

export const saveNonactive = async (
  nonactive: NonActiveData
): Promise<ApiResponse<CompanyDirectorate[]>> => {
  const response = await axios.post<ApiResponse<CompanyDirectorate[]>>(
    `${API_BASE}/organization/nonactive`,
    nonactive,
    { headers: { "Content-Type": "application/json" } }
  );
  return response.data;
};