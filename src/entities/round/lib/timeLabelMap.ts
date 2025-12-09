import { RoundStatus } from "@/entities/round/model/constants";
import type { RoundStatusValue } from "@/entities/round/model/types";

export const timeLabelMap: Record<RoundStatusValue, string> = {
  [RoundStatus.Active]: "Time Left",
  [RoundStatus.Cooldown]: "Starts In",
  [RoundStatus.Finished]: "Round Finished",
};
