import { RoundStatus } from "@/entities/round/model/constants";
import type { RoundStatusValue } from "@/entities/round/model/types";
import type { RoundDetail } from "@/entities/round/api/types";

export function formatCountdown(status: RoundStatusValue, round: RoundDetail | undefined, nowMs: number) {
  if (!round) return "—";

  const target =
    status === RoundStatus.Active
      ? Date.parse(round.round.endTime)
      : status === RoundStatus.Cooldown
        ? Date.parse(round.round.startTime)
        : null;

  if (!target || Number.isNaN(target)) return "—";

  const diff = Math.max(target - nowMs, 0);
  if (diff <= 0) return "00:00";

  const totalSeconds = Math.floor(diff / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const pad = (n: number) => n.toString().padStart(2, "0");

  return hours > 0 ? `${pad(hours)}:${pad(minutes)}:${pad(seconds)}` : `${pad(minutes)}:${pad(seconds)}`;
}
