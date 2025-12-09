import { http } from "@/shared/api/http";
import type { RoundDto } from "./types";

export async function createRound() {
  const { data } = await http<RoundDto>("/api/v1/rounds", { method: "POST" });
  return data;
}
