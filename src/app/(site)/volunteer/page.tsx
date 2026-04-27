import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { VolunteerForm } from '@/components/forms/VolunteerForm'
import { Users, Clock, Globe, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Volunteer',
  description: 'Volunteer and become a mentor with 2nd Chance. Help young people in the UK and South Sudan.',
}

const reasons = [
  { icon: Users, title: 'Make Real Impact', description: 'Directly improve the lives of young people who need guidance and support.' },
  { icon: Clock, title: 'Flexible Commitment', description: 'Volunteer on your own schedule — we work around you.' },
  { icon: Globe, title: 'International Reach', description: 'Connect with communities in the UK and South Sudan.' },
  { icon: Heart, title: 'Build Your Skills', description: 'Develop leadership, coaching and cross-cultural communication skills.' },
]

export default function VolunteerPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-darker to-brand-dark py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">Volunteer With Us</h1>
            <p className="text-green-200 text-lg leading-relaxed">
              Whether you&apos;re a seasoned professional or just starting out, your time and skills can change a young person&apos;s life. Join our community of mentors and volunteers today.
            </p>
          </div>
        </Container>
      </section>

      {/* Why volunteer */}
      <section className="py-14 bg-white">
        <Container>
          <h2 className="text-2xl font-extrabold text-brand-dark mb-8 text-center">Why Volunteer?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center p-6 rounded-2xl bg-brand-light border border-brand-border">
                <div className="inline-flex p-3 rounded-xl bg-brand-muted mb-4">
                  <Icon size={22} className="text-brand-green" />
                </div>
                <h3 className="font-bold text-brand-dark mb-2">{title}</h3>
                <p className="text-gray-500 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Form */}
      <section className="py-14 bg-brand-light">
        <Container className="max-w-2xl">
          <div className="bg-white rounded-2xl border border-brand-border p-8 sm:p-10">
            <h2 className="text-2xl font-extrabold text-brand-dark mb-2">Apply to Volunteer</h2>
            <p className="text-gray-500 mb-8">
              Fill in the form below and we&apos;ll be in touch within 5 working days.
            </p>
            <VolunteerForm />
          </div>
        </Container>
      </section>
    </>
  )
}
