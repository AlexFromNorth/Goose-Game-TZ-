import { http } from '@/shared/api/http'
import type { LoginRequest, LoginResponse } from './types'

export async function loginRequest(payload: LoginRequest): Promise<LoginResponse> {
  const { data } = await http<LoginResponse>('/api/v1/auth/login', {
    method: 'POST',
    body: payload,
  })

  return data
}
