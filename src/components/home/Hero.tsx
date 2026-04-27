import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Heart, Users } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-brand-darker via-brand-dark to-brand-green overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white" />
        <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-white" />
      </div>

      <Container className="relative py-20 sm:py-28 lg:py-36">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
            UK &amp; South Sudan
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
            Everyone Deserves a{' '}
            <span className="text-green-300">2nd Chance</span>
          </h1>

          <p className="text-green-100 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
            We provide networking, mentoring and support for young people in the UK and South Sudan — helping them unlock their potential and build brighter futures.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button href="/donate" size="lg" className="bg-white text-brand-dark hover:bg-green-50">
              <Heart size={18} />
              Donate Now
            </Button>
            <Button href="/volunteer" size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-dark">
              <Users size={18} />
              Get Involved
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
