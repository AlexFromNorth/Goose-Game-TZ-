import { RoundCard } from './RoundCard'
import { RoundsSkeleton } from './RoundsSkeleton'
import type { RoundsListProps } from '../model/types'

export function RoundsList({
  rounds,
  isLoading,
  error,
  loadMoreRef,
  hasNextPage,
  isFetchingNextPage,
}: RoundsListProps) {
  if (isLoading) return <RoundsSkeleton />
  if (error) return <p className="text-danger">Failed to load rounds: {String(error)}</p>
  if (rounds.length === 0) return <p className="text-muted">No rounds available.</p>

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
      {rounds.map((round) => (
        <RoundCard key={round.id} round={round} />
      ))}
      <div ref={loadMoreRef} className="h-6 col-span-full">
        {isFetchingNextPage && (
          <div className="h-6 w-full animate-pulse rounded border border-border bg-base/60" />
        )}
        {!hasNextPage && !isFetchingNextPage && (
          <p className="text-center text-sm text-muted">No more rounds</p>
        )}
      </div>
    </div>
  )
}
