export const UserRoles = {
  Survivor: 'SURVIVOR',
  Admin: 'ADMIN',
} as const

export type UserRole = (typeof UserRoles)[keyof typeof UserRoles]

export interface AuthUser {
  username: string
  role: UserRole
  token?: string
}

export interface AuthState {
  user: AuthUser | null
  setUser: (user: AuthUser | null) => void
}
