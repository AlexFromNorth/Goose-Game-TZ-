// src/shared/ui/Button/Button.tsx
import classNames from 'classnames'
import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ className = '', children, ...rest }: ButtonProps) {
  const base =
    'inline-flex items-center justify-center rounded-2xl px-5 py-3 font-medium transition-all duration-200 ' +
    'bg-primary text-surface hover:bg-primary-hover active:scale-[0.97] ' +
    'focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:opacity-50 disabled:pointer-events-none'

  const responsive =
    'w-full sm:w-auto text-sm sm:text-base'

  return (
    <button className={classNames(base, responsive, className)} {...rest}>
      {children}
    </button>
  )
}
