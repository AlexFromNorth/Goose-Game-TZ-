import { useEffect, useState, useMemo, useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useRound } from "@/entities/round/model/useRound";
import { useTapRound } from "@/entities/round/model/useTapRound";
import { deriveStatus } from "@/entities/round/lib/deriveStatus";
import { formatCountdown } from "@/entities/round/lib/formatCountdown";
import { timeLabelMap } from "@/entities/round/lib/timeLabelMap";
import { RoundStatusLabel } from "@/entities/round/model/constants";
import type { UseRoundPageReturn } from "./types";
import type { RoundStatusValue } from "@/entities/round/model/types";

export function useRoundPage(): UseRoundPageReturn {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const roundQuery = useRound(id);
  const tapMutation = useTapRound(id);
  const [nowMs, setNowMs] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => setNowMs(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  const roundData = roundQuery.data ?? null;

  const status: RoundStatusValue | null = useMemo(() => {
    if (!roundData) return null;
    return deriveStatus(roundData, nowMs);
  }, [roundData, nowMs]);

  const statusText = useMemo(() => (status ? RoundStatusLabel[status] : "Loading..."), [status]);
  const timeLabel = useMemo(() => (status ? timeLabelMap[status] : "—"), [status]);
  const countdown = useMemo(
    () => (status && roundData ? formatCountdown(status, roundData, nowMs) : "—"),
    [status, roundData, nowMs]
  );

  const navigateBack = useCallback(() => navigate("/rounds"), [navigate]);

  return {
    roundData,
    status,
    statusText,
    timeLabel,
    countdown,
    tapMutation,
    navigateBack,
    nowMs,
  };
}
