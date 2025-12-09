import type { UserRole } from "@/processes/auth/model/types"

export type LoginRequest = {
  username: string
  password: string
}

export type LoginResponse = {
  username: string
  role: UserRole
  token: string
}
