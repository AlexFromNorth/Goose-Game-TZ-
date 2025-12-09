export const RoundStatus = {
  Active: 'active',
  Cooldown: 'cooldown',
  Finished: 'finished',
} as const

export const RoundStatusLabel: Record<(typeof RoundStatus)[keyof typeof RoundStatus], string> = {
  [RoundStatus.Active]: 'Active',
  [RoundStatus.Cooldown]: 'Cooldown',
  [RoundStatus.Finished]: 'Finished',
}

export const RoundStatusColor: Record<(typeof RoundStatus)[keyof typeof RoundStatus], string> = {
  [RoundStatus.Active]: 'text-emerald-400',
  [RoundStatus.Cooldown]: 'text-slate-300',
  [RoundStatus.Finished]: 'text-muted',
}
