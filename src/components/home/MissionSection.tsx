import { Container } from '@/components/ui/Container'
import { Network, BookOpen, HandHeart } from 'lucide-react'

const pillars = [
  {
    icon: Network,
    title: 'Networking',
    description:
      'Connecting young people with professionals, entrepreneurs and community leaders who can open doors and create life-changing opportunities.',
  },
  {
    icon: BookOpen,
    title: 'Mentoring',
    description:
      'Pairing young people with experienced mentors who guide them through education, career decisions, and personal development challenges.',
  },
  {
    icon: HandHeart,
    title: 'Support',
    description:
      'Providing practical and emotional support to ensure every young person has the foundation they need to succeed, regardless of their background.',
  },
]

export function MissionSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-4">
            What We Do
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-lg">
            Three pillars that form the foundation of our work with young people in the UK and South Sudan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group p-8 rounded-2xl border border-brand-border hover:border-brand-green hover:shadow-lg transition-all duration-300 bg-white"
            >
              <div className="inline-flex p-3 rounded-xl bg-brand-light group-hover:bg-brand-muted transition-colors mb-5">
                <Icon size={28} className="text-brand-green" />
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{title}</h3>
              <p className="text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
