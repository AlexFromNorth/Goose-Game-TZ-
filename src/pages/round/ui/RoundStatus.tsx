import { Button } from '@/shared/ui/Button/Button'
import { RoundStatusColor } from '@/entities/round/model/constants'
import type { RoundStatusProps } from '../model/types'

export function RoundStatus({ status, statusText, onBack }: RoundStatusProps) {
  return (
    <div className="flex flex-wrap justify-between gap-3 rounded-xl border border-border bg-base/80 p-4 shadow-lg shadow-black/40 px-4 py-3 my-8 ">
      <div className="rounded-full border border-border px-3 py-2 text-sm font-semibold">
        <span className={status ? RoundStatusColor[status] : 'text-muted'}>
          ● {statusText}
        </span>
      </div>
      <Button
        className="mt-0 w-auto px-4 py-2 border-border text-muted hover:bg-base/60"
        onClick={onBack}
      >
        Back to Rounds
      </Button>
    </div>
  )
}
