import { useQuery } from '@tanstack/react-query'
import { getRoundById } from '@/entities/round/api/getRoundById'
import type { RoundDetail } from '@/entities/round/api/types'

export function getRoundRefetchInterval(data: RoundDetail | undefined, nowMs: number) {
  if (!data) return 1_000
  const end = Date.parse(data.round.endTime)
  if (Number.isNaN(end)) return 1_000
  return nowMs >= end ? false : 1_000
}

export function useRound(id: string | undefined) {
  return useQuery({
    queryKey: ['round', id],
    enabled: Boolean(id),
    queryFn: async () => {
      if (!id) throw new Error('Missing round id')
      return getRoundById(id)
    },
    refetchInterval: (query) => {
      const data = query.state.data as RoundDetail | undefined
      return getRoundRefetchInterval(data, Date.now())
    },
  })
}