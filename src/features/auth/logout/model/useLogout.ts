import { useMutation, useQueryClient } from '@tanstack/react-query'
import { logoutRequest } from '../api/logoutRequest'
import { useAuthStore } from '@/processes/auth/model/store'

export function useLogout() {
  const setUser = useAuthStore((state) => state.setUser)
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: logoutRequest,
    onSettled: () => {
      setUser(null)
      queryClient.clear()
    },
  })
}
