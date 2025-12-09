import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createRound } from '@/entities/round/api/createRound'

export function useCreateRound() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: createRound,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['rounds'] })
      return data
    },
  })
}