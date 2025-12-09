import { useMemo, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRounds } from '@/entities/round/model/useRounds'
import { useCreateRound } from '@/entities/round/model/useCreateRound'
import { formatDateTime } from '@/shared/lib/formatDate'
import { RoundStatus } from '@/entities/round/model/constants'
import type { RoundStatusValue } from '@/entities/round/model/types'

export function useRoundsPage() {
  const navigate = useNavigate()
  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = useRounds()
  const createRoundMutation = useCreateRound()
  const loadMoreRef = useRef<HTMLDivElement | null>(null)

  const rounds = useMemo(
    () =>
      data?.pages.flatMap((page) =>
        page.data.map((round) => ({
          id: round.id,
          start: formatDateTime(round.startTime),
          end: formatDateTime(round.endTime),
          status: resolveStatus(round.startTime, round.endTime),
        }))
      ) ?? [],
    [data]
  )

  useEffect(() => {
    if (!hasNextPage || !loadMoreRef.current) return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) fetchNextPage()
      })
    })
    observer.observe(loadMoreRef.current)
    return () => observer.disconnect()
  }, [fetchNextPage, hasNextPage])

  function handleCreateRound() {
    createRoundMutation.mutate(undefined, {
      onSuccess: (round) => navigate(`/rounds/${round.id}`),
    })
  }

  return { rounds, isLoading, error, loadMoreRef, hasNextPage, isFetchingNextPage, createRoundMutation, handleCreateRound }
}

function resolveStatus(start: string, end: string): RoundStatusValue {
  const now = Date.now()
  const startMs = Date.parse(start)
  const endMs = Date.parse(end)

  if (Number.isNaN(startMs) || Number.isNaN(endMs)) return RoundStatus.Finished
  if (now < startMs) return RoundStatus.Cooldown
  if (now >= startMs && now < endMs) return RoundStatus.Active
  return RoundStatus.Finished
}
