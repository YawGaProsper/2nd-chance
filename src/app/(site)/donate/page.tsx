import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { Heart, Users, BookOpen, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Donate',
  description: 'Support 2nd Chance with a donation and help young people in the UK and South Sudan.',
}

const impacts = [
  { amount: '£10', icon: BookOpen, description: 'Funds one mentoring session for a young person' },
  { amount: '£25', icon: Users, description: 'Covers a young person\'s place at a networking event' },
  { amount: '£50', icon: Globe, description: 'Supports our outreach work in South Sudan for a week' },
  { amount: '£100', icon: Heart, description: 'Sponsors a month-long mentoring programme for one young person' },
]

export default function DonatePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-darker to-brand-dark py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl text-center mx-auto">
            <Heart size={48} className="text-green-300 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
              Support 2nd Chance
            </h1>
            <p className="text-green-200 text-lg leading-relaxed">
              Your donation funds mentoring sessions, networking events and support programmes for young people who need it most — in the UK and South Sudan.
            </p>
          </div>
        </Container>
      </section>

      {/* Impact */}
      <section className="py-14 bg-white">
        <Container>
          <h2 className="text-2xl font-extrabold text-brand-dark text-center mb-10">Your Donation In Action</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impacts.map(({ amount, icon: Icon, description }) => (
              <div key={amount} className="text-center p-6 rounded-2xl bg-brand-light border border-brand-border">
                <div className="inline-flex p-3 rounded-xl bg-brand-muted mb-4">
                  <Icon size={22} className="text-brand-green" />
                </div>
                <p className="text-3xl font-extrabold text-brand-dark mb-2">{amount}</p>
                <p className="text-gray-500 text-sm">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Donation widget */}
      <section className="py-14 bg-brand-light">
        <Container className="max-w-xl">
          <div className="bg-white rounded-2xl border border-brand-border p-8 sm:p-10 text-center">
            <h2 className="text-2xl font-extrabold text-brand-dark mb-2">Make a Donation</h2>
            <p className="text-gray-500 mb-8 text-sm">
              Secure payments powered by Stripe. Donations to 2nd Chance may be eligible for Gift Aid.
            </p>

            {/* Preset amounts */}
            <div className="grid grid-cols-4 gap-3 mb-6">
              {['£10', '£25', '£50', '£100'].map((amt) => (
                <button
                  key={amt}
                  className="py-3 rounded-lg border-2 border-brand-border text-brand-dark font-bold text-sm hover:border-brand-green hover:bg-brand-light transition-colors"
                >
                  {amt}
                </button>
              ))}
            </div>

            <div className="relative mb-6">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">£</span>
              <input
                type="number"
                placeholder="Other amount"
                min="1"
                className="w-full pl-8 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green text-sm"
              />
            </div>

            <a
              href="#"
              className="block w-full py-3.5 rounded-lg bg-brand-green text-white font-bold text-base hover:bg-brand-dark transition-colors"
            >
              Donate Securely
            </a>

            <p className="text-xs text-gray-400 mt-4">
              🔒 Secure payment via Stripe. We never store your card details.
            </p>
          </div>
        </Container>
      </section>

      {/* Other ways to give */}
      <section className="py-14 bg-white">
        <Container className="max-w-2xl text-center">
          <h2 className="text-2xl font-extrabold text-brand-dark mb-4">Other Ways to Support</h2>
          <p className="text-gray-500 mb-6">
            Can&apos;t donate financially? There are other ways to help 2nd Chance make a difference.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/volunteer" className="px-6 py-3 rounded-lg border-2 border-brand-green text-brand-green font-semibold hover:bg-brand-green hover:text-white transition-colors">
              Volunteer Your Time
            </a>
            <a href="/contact" className="px-6 py-3 rounded-lg border-2 border-brand-dark text-brand-dark font-semibold hover:bg-brand-dark hover:text-white transition-colors">
              Partner With Us
            </a>
          </div>
        </Container>
      </section>
    </>
  )
}
