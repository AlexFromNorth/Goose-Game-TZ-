import type { RoundDetail } from "@/entities/round/api/types"

type Props = {
  round: RoundDetail
}

export function RoundStats({ round }: Props) {
  return (
    <div className="mt-8 rounded-xl border border-border bg-base/80 p-4 shadow-lg shadow-black/40">
      <p className="text-sm text-muted">Round Statistics</p>
      <div className="mt-2 space-y-1 text-sm">
        <div className="flex justify-between">
          <span>Total</span>
          <span className="font-semibold">{round.round.totalScore}</span>
        </div>
        <div className="flex justify-between">
          <span>Winner — {round.topStats[0]?.user.username ?? '—'}</span>
          <span className="font-semibold">{round.topStats[0]?.score ?? '—'}</span>
        </div>
        <div className="flex justify-between">
          <span>My Score</span>
          <span className="font-semibold">{round.myStats.score}</span>
        </div>
      </div>
    </div>
  )
}
