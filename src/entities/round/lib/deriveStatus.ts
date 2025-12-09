import { RoundStatus } from "@/entities/round/model/constants";
import type { RoundStatusValue } from "@/entities/round/model/types";
import type { RoundDetail } from "@/entities/round/api/types";

export function deriveStatus(round: RoundDetail | undefined, nowMs: number = Date.now()): RoundStatusValue {
  if (!round) return RoundStatus.Active;
  const start = Date.parse(round.round.startTime);
  const end = Date.parse(round.round.endTime);

  if (Number.isNaN(start) || Number.isNaN(end)) return RoundStatus.Active;
  if (nowMs < start) return RoundStatus.Cooldown;
  if (nowMs >= start && nowMs < end) return RoundStatus.Active;
  return RoundStatus.Finished;
}
