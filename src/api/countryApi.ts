import axios from "axios";
import { Country } from "./data";

interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export const getCountries = async (): Promise<ApiResponse<Country[]>> => {
  const response = await axios.get<ApiResponse<Country[]>>(`${API_BASE}/country`);
  return response.data;
};
