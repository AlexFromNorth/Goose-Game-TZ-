import { http } from "@/shared/api/http";
import type { RoundsResponse } from "./types";

export async function getRounds(params?: { cursor?: string; limit?: number; status?: "active" | "cooldown" | "finished" }) {
const search = new URLSearchParams();

if (params?.cursor) search.set("cursor", params.cursor);
if (params?.limit) search.set("limit", String(params.limit));
if (params?.status) search.set("status", params.status);

const query = search.toString();
const path = `/api/v1/rounds${query ? `?${query}` : ""}`;
const { data } = await http<RoundsResponse>(path);

return data;
}