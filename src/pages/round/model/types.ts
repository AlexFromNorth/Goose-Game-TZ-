import type { RoundDetail, TapResponse } from "@/entities/round/api/types";
import type { RoundStatusValue } from "@/entities/round/model/types";
import type { UseMutationResult } from "@tanstack/react-query";

export type UseTapRoundReturn = UseMutationResult<TapResponse, Error, void, unknown>;

export interface UseRoundPageReturn {
  roundData: RoundDetail | null;
  status: RoundStatusValue | null;
  statusText: string;
  timeLabel: string;
  countdown: string;
  tapMutation: UseTapRoundReturn;
  navigateBack: () => void;
  nowMs: number;
}

export type tapButtonProps = {
  status: RoundStatusValue | null;
  tapMutation: UseTapRoundReturn;
};

export type RoundStatusProps = {
  status: RoundStatusValue | null;
  statusText: string;
  onBack: () => void;
};
