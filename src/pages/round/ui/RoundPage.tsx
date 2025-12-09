import { RoundTapButton } from "./RoundTapButton";
import { RoundStats } from "./RoundStats";
import { useRoundPage } from "../model/useRoundPage";
import { RoundStatus } from "./RoundStatus";

export function RoundPage() {
  const { roundData, status, statusText, timeLabel, countdown, tapMutation, navigateBack } = useRoundPage();

  return (
    <div className="rounded-2xl border border-border bg-surface/90 p-6 shadow-xl shadow-black/50 pt-14">
      {!roundData ? (
        <div className="flex justify-center">
          <div className="h-64 w-64 animate-pulse rounded-full border border-border bg-base/60" />
        </div>
      ) : (
        <>
          <div className="flex flex-col items-center gap-6">

            <RoundTapButton status={status} tapMutation={tapMutation} />
            <div className="text-center">
              <p className="text-lg font-semibold">{statusText}</p>
              <p className="text-sm text-muted">
                {timeLabel}: {countdown}
              </p>
              {status === "active" && <p className="mt-2 text-lg font-semibold">My Score — {roundData.myStats.score}</p>}
              {tapMutation.error && <p className="mt-2 text-sm text-danger">Failed to send tap: {String(tapMutation.error)}</p>}
            </div>
          </div>

          <RoundStatus status={status} statusText={statusText} onBack={navigateBack} />
          {status === "finished" && <RoundStats round={roundData} />}
        </>
      )}
    </div>
  );
}
