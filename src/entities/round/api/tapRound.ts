import { http } from "@/shared/api/http";
import type { TapResponse } from "./types";

export async function tapRound(id: string) {
const { data } = await http<TapResponse>(`/api/v1/rounds/${id}/tap`, { method: "POST" });
return data;
}