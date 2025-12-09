import type { RoundStatusValue } from "@/entities/round/model/types"

export type RoundItem = {
  id: string
  start: string
  end: string
  status: RoundStatusValue
}

export type RoundCardProps = {
  round: RoundItem
}

export type RoundsListProps = {
  rounds: RoundItem[]
  isLoading: boolean
  error: unknown
  loadMoreRef: React.RefObject<HTMLDivElement>
  hasNextPage: boolean
  isFetchingNextPage: boolean
}