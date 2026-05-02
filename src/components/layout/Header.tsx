'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { href: '/about', label: 'About' },
  { href: '/events', label: 'Events' },
  { href: '/blog', label: 'News' },
  { href: '/volunteer', label: 'Volunteer' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-brand-border shadow-sm">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="2nd Chance logo"
              width={88}
              height={88}
              className="object-contain"
            />
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="font-bold text-brand-dark text-xl">2nd Chance</span>
              <span className="text-brand-green text-sm font-semibold tracking-wide">Everyone deserves it</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-brand-green transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Button href="/donate" size="sm" className="hidden sm:inline-flex">
              Donate
            </Button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-brand-green hover:bg-brand-light transition-colors"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'md:hidden overflow-hidden transition-all duration-300',
          menuOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <nav className="px-4 pb-4 pt-2 border-t border-brand-border bg-white flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-2.5 px-3 rounded-lg text-gray-700 font-medium hover:bg-brand-light hover:text-brand-green transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/donate" className="mt-2 w-full">
            Donate
          </Button>
        </nav>
      </div>
    </header>
  )
}
