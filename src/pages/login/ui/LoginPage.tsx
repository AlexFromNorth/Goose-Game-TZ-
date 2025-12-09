import { LoginForm } from './LoginForm'

export function LoginPage() {
  return (
    <div className="min-h-screen bg-base text-text flex items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-2xl border border-border bg-surface/90 p-8 shadow-2xl shadow-black/60 backdrop-blur">
        <header className="mb-6 text-center pb-5">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-muted">press the goose</p>
        </header>
        <LoginForm />
      </div>
    </div>
  )
}
