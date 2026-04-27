import { Container } from '@/components/ui/Container'

const stats = [
  { value: '500+', label: 'Young People Supported' },
  { value: '80+',  label: 'Volunteer Mentors' },
  { value: '2',    label: 'Countries Reached' },
  { value: '5+',   label: 'Years of Impact' },
]

export function StatsSection() {
  return (
    <section className="py-14 bg-brand-dark">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl sm:text-5xl font-extrabold text-white mb-1">{value}</p>
              <p className="text-green-300 font-medium text-sm sm:text-base">{label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
