import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'
import { EventCard } from '@/components/events/EventCard'
import { getEvents } from '@/lib/sanity/queries'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Upcoming networking events, workshops and mentoring sessions from 2nd Chance.',
}

export default async function EventsPage() {
  const events = await getEvents(true).catch(() => [])

  return (
    <>
      <section className="bg-gradient-to-br from-brand-darker to-brand-dark py-16 sm:py-20">
        <Container>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-3">Events</h1>
          <p className="text-green-200 text-lg">
            Join us at one of our upcoming networking events, workshops and mentoring sessions.
          </p>
        </Container>
      </section>

      <section className="py-14 bg-brand-light min-h-[40vh]">
        <Container>
          {events.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No upcoming events at the moment. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event) => (
                <EventCard key={event._id} event={event} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </>
  )
}
