import axios from "axios";
import { Menu, GroupRole } from "./data";

// Tipe standar respons dari backend
interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export const getGroupRole = async (): Promise<
  ApiResponse<GroupRole[]>
> => {
  const response = await axios.get<ApiResponse<GroupRole[]>>(
    `${API_BASE}/grouprole`
  );
  return response.data;
};

export const getMenu = async (): Promise<
  ApiResponse<Menu[]>
> => {
  const response = await axios.get<ApiResponse<Menu[]>>(
    `${API_BASE}/menu`
  );
  return response.data;
};

// Simpan data
export const saveMenu = async (
  menu: Partial<Menu>[]
): Promise<ApiResponse<Menu[]>> => {
  const response = await axios.put<ApiResponse<Menu[]>>(
    `${API_BASE}/menu`,
    menu,
    { headers: { "Content-Type": "application/json" } }
  );
  return response.data;
};

export const deleteMenu = async (id: number): Promise<ApiResponse<null>> => {
  const response = await axios.delete<ApiResponse<null>>(`${API_BASE}/menu/${id}`);
  return response.data;
};