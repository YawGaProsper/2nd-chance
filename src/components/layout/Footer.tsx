import Link from 'next/link'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin } from 'lucide-react'

const footerLinks = {
  Organisation: [
    { href: '/about', label: 'About Us' },
    { href: '/events', label: 'Events' },
    { href: '/blog', label: 'News & Blog' },
    { href: '/volunteer', label: 'Volunteer' },
  ],
  'Get Involved': [
    { href: '/donate', label: 'Donate' },
    { href: '/volunteer', label: 'Become a Mentor' },
    { href: '/contact', label: 'Partner With Us' },
  ],
  Legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Use' },
  ],
}

const socialLinks = [
  { href: '#', icon: Facebook, label: 'Facebook' },
  { href: '#', icon: Instagram, label: 'Instagram' },
  { href: '#', icon: Twitter, label: 'Twitter / X' },
  { href: '#', icon: Linkedin, label: 'LinkedIn' },
]

export function Footer() {
  return (
    <footer className="bg-brand-darker text-white">
      <Container className="py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image src="/logo.png" alt="2nd Chance logo" width={64} height={64} className="object-contain" />
              <span className="font-bold text-white text-lg">2nd Chance</span>
            </Link>
            <p className="text-green-300 text-sm leading-relaxed mb-5">
              Everyone deserves it. Networking, mentoring and support for young people in the UK and South Sudan.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2 rounded-lg bg-brand-dark hover:bg-brand-green transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                {heading}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-green-300 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="mt-10 pt-8 border-t border-brand-dark flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-green-300">
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:info@2ndchance.org.uk" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={14} /> info@2ndchance.org.uk
            </a>
            <span className="flex items-center gap-2">
              <MapPin size={14} /> United Kingdom &amp; South Sudan
            </span>
          </div>
          <p className="text-green-400 text-xs">
            © {new Date().getFullYear()} 2nd Chance. Registered charity in England &amp; Wales.
          </p>
        </div>
      </Container>
    </footer>
  )
}
