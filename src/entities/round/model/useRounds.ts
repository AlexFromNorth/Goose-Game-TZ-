import { useInfiniteQuery } from '@tanstack/react-query'
import { getRounds } from '@/entities/round/api/getRounds'

export function useRounds(limit = 20) {
  return useInfiniteQuery({
    queryKey: ['rounds', limit],
    initialPageParam: null as string | null,
    queryFn: ({ pageParam }) => getRounds({ cursor: pageParam ?? undefined, limit }),
    getNextPageParam: (lastPage) => lastPage.pagination.nextCursor ?? undefined,
    staleTime: 10_000,
  })
}