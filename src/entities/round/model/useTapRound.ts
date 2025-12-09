import { useMutation, useQueryClient } from '@tanstack/react-query'
import { tapRound } from '@/entities/round/api/tapRound'

export function useTapRound(id: string | undefined) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => {
      if (!id) throw new Error('Missing round id')
      return tapRound(id)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['round', id] })
      queryClient.invalidateQueries({ queryKey: ['rounds'] })
    },
  })
}