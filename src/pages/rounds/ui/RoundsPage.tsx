import { useAuthStore } from '@/processes/auth/model/store'
import { UserRoles } from '@/processes/auth/model/types'
import { Button } from '@/shared/ui/Button/Button'
import { RoundsList } from './RoundsList'
import { useRoundsPage } from '../model/useRoundsPage'

export function RoundsPage() {
  const user = useAuthStore((state) => state.user)
  const isAdmin = user?.role === UserRoles.Admin
  const {
    rounds,
    isLoading,
    error,
    loadMoreRef,
    hasNextPage,
    isFetchingNextPage,
    createRoundMutation,
    handleCreateRound,
  } = useRoundsPage()

  return (
    <>
      {isAdmin && (
        <div className="flex justify-end">
          <Button className="mt-0 w-auto px-5 py-2" onClick={handleCreateRound} disabled={createRoundMutation.isPending}>
            {createRoundMutation.isPending ? 'Creating...' : 'Create Round'}
          </Button>
        </div>
      )}

      <section className="rounded-2xl border border-border bg-surface/90 p-6 shadow-xl shadow-black/50">
        <RoundsList
          rounds={rounds}
          isLoading={isLoading}
          error={error}
          loadMoreRef={loadMoreRef as React.RefObject<HTMLDivElement>}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      </section>
    </>
  )
}
