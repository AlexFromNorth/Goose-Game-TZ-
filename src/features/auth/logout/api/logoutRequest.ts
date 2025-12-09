import { http } from '@/shared/api/http'
import type { LogoutResponse } from './types'

export async function logoutRequest(): Promise<LogoutResponse> {
  const { data } = await http<LogoutResponse>('/api/v1/auth/logout', {
    method: 'POST',
  })

  return data
}
