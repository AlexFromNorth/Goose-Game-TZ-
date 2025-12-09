export interface LoginFormValues {
  username: string
  password: string
}

export interface LoginFieldProps {
  label: string
  type?: 'text' | 'password'
  placeholder?: string
  value: string
  error?: string | null
  onChange: (value: string) => void
}
