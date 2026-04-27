import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { ContactForm } from '@/components/forms/ContactForm'
import { Mail, MapPin, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with 2nd Chance. We\'d love to hear from you.',
}

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'info@2ndchance.org.uk',
    href: 'mailto:info@2ndchance.org.uk',
  },
  {
    icon: MapPin,
    label: 'Locations',
    value: 'United Kingdom & South Sudan',
    href: undefined,
  },
  {
    icon: Clock,
    label: 'Response Time',
    value: 'Within 2 working days',
    href: undefined,
  },
]

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-darker to-brand-dark py-16 sm:py-20">
        <Container>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Contact Us</h1>
          <p className="text-green-200 text-lg">
            Have a question, partnership idea, or just want to say hello? We&apos;d love to hear from you.
          </p>
        </Container>
      </section>

      <section className="py-14 bg-brand-light">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <div className="space-y-6">
              <h2 className="text-xl font-extrabold text-brand-dark">Get In Touch</h2>
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-brand-muted flex-shrink-0">
                    <Icon size={18} className="text-brand-green" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">{label}</p>
                    {href ? (
                      <a href={href} className="text-brand-dark font-medium hover:text-brand-green transition-colors">
                        {value}
                      </a>
                    ) : (
                      <p className="text-brand-dark font-medium">{value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="mt-8 p-6 rounded-2xl bg-brand-dark text-white">
                <h3 className="font-bold mb-2">Partnership Enquiries</h3>
                <p className="text-green-200 text-sm">
                  If you&apos;re an organisation interested in partnering with 2nd Chance, please get in touch via the form and we&apos;ll arrange a call.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-2xl border border-brand-border p-8">
              <h2 className="text-xl font-extrabold text-brand-dark mb-6">Send a Message</h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
