import { cn } from '@/lib/utils'
import Link from 'next/link'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseProps {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

type ButtonProps = ButtonAsButton | ButtonAsLink

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-brand-green text-white hover:bg-brand-dark shadow-sm',
  secondary:
    'bg-brand-dark text-white hover:bg-brand-darker shadow-sm',
  outline:
    'border-2 border-brand-green text-brand-green hover:bg-brand-green hover:text-white',
  ghost:
    'text-brand-green hover:bg-brand-light',
}

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3.5 text-lg',
}

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-green focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
    variants[variant],
    sizes[size],
    className
  )

  if ('href' in props && props.href !== undefined) {
    const { href, ...rest } = props
    return (
      <Link href={href} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
