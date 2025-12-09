export type HttpOptions = {
  method?: 'GET' | 'POST' | 'PATCH' | 'DELETE'
  body?: Record<string, unknown>
  headers?: Record<string, string>
  withAuth?: boolean
}