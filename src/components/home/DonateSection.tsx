import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Heart, Users } from 'lucide-react'

export function DonateSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="rounded-3xl bg-gradient-to-br from-brand-dark to-brand-darker p-10 sm:p-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Help Us Change More Lives
          </h2>
          <p className="text-green-200 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
            Your donation funds mentoring sessions, networking events, and support programmes for young people who need it most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/donate"
              size="lg"
              className="bg-white text-brand-dark hover:bg-green-50"
            >
              <Heart size={18} />
              Donate Today
            </Button>
            <Button
              href="/volunteer"
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-brand-dark"
            >
              <Users size={18} />
              Volunteer With Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
