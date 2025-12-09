import { authStore } from '@/processes/auth/model/store'
import type { HttpOptions } from './types';


const API_BASE = 'http://v2991160.hosted-by-vdsina.ru'

export async function http<TResponse = unknown>(
  path: string,
  { method = 'GET', body, headers = {}, withAuth = true }: HttpOptions = {},
): Promise<{ data: TResponse; response: Response }> {
  const token = authStore.getState().user?.token

  const authHeader =
    withAuth && token
      ? {
          Authorization: `Bearer ${token}`,
        }
      : undefined

  const baseHeaders: Record<string, string> = { ...headers }

  if (body) {
    baseHeaders['Content-Type'] = 'application/json'
  }

  const response = await fetch(`${API_BASE}${path}`, {
    method,
    headers: {
      ...baseHeaders,
      ...authHeader,
    },
    body: body ? JSON.stringify(body) : undefined,
    credentials: 'include',
  })

  const data = (await response.json().catch(() => ({}))) as TResponse

  if (!response.ok) {
    const message = (data as { message?: string })?.message ?? 'Server Error'
    throw new Error(message)
  }

  return { data, response }
}
