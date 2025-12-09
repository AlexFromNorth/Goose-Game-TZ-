import { Link } from "react-router-dom";
import { RoundStatusColor, RoundStatusLabel } from "@/entities/round/model/constants";
import type { RoundCardProps } from "../model/types";

export function RoundCard({ round }: RoundCardProps) {
  return (
    <>
      <Link to={`/rounds/${round.id}`} className="text-lg font-semibold break-all underline-offset-4 transition hover:text-text ">
        <article className="rounded-xl border border-border bg-base/80 p-4 shadow-lg shadow-black/40 transition hover:bg-black/5">
          <div className="space-y-1">
            <div className="flex justify-between">
              <p className="text-sm text-muted">Round ID</p>
              <span className={`text-sm font-semibold ${RoundStatusColor[round.status]}`}>
                ● {RoundStatusLabel[round.status]}
              </span>
            </div>
            <span> {round.id}</span>
            <div className="text-sm text-muted">
              <div>Start: {round.start}</div>
              <div>End: {round.end}</div>
            </div>
          </div>
        </article>
      </Link>
    </>
  );
}
