import { http } from "@/shared/api/http";
import type { RoundDetail } from "./types";

export async function getRoundById(id: string) {
const { data } = await http<RoundDetail>(`/api/v1/rounds/${id}`);
return data;
}