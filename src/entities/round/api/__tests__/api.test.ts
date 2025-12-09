import { describe, it, expect, vi } from "vitest";
import { http } from "@/shared/api/http";
import { createRound } from "../createRound";
import { getRoundById } from "../getRoundById";
import { getRounds } from "../getRounds";
import { tapRound } from "../tapRound";

vi.mock("@/shared/api/http", () => ({
  http: vi.fn(),
}));

describe("Round API", () => {
  it("createRound works", async () => {
    (http as any).mockResolvedValue({ data: { id: "1" } });
    const data = await createRound();
    expect(data.id).toBe("1");
  });

  it("getRoundById works", async () => {
    (http as any).mockResolvedValue({ data: { round: { id: "10" } } });
    const data = await getRoundById("10");
    expect(data.round.id).toBe("10");
  });

  it("getRounds works", async () => {
    (http as any).mockResolvedValue({ data: { data: [] } });
    const data = await getRounds();
    expect(Array.isArray(data.data)).toBe(true);
  });

  it("tapRound works", async () => {
    (http as any).mockResolvedValue({ data: { taps: 1, score: 10 } });
    const data = await tapRound("5");
    expect(data.taps).toBe(1);
  });
});
