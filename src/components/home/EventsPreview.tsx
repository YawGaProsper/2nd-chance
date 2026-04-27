import Link from 'next/link'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { Calendar, MapPin } from 'lucide-react'
import { formatEventDate } from '@/lib/utils'
import type { Event } from '@/types'

interface EventsPreviewProps {
  events: Event[]
}

export function EventsPreview({ events }: EventsPreviewProps) {
  return (
    <section className="py-16 sm:py-24 bg-brand-light">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-dark mb-2">
              Upcoming Events
            </h2>
            <p className="text-gray-500">Join us at one of our upcoming events.</p>
          </div>
          <Button href="/events" variant="outline">
            View All Events
          </Button>
        </div>

        {events.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No upcoming events at the moment. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <Link
                key={event._id}
                href={`/events/${event.slug.current}`}
                className="group bg-white rounded-2xl p-6 border border-brand-border hover:border-brand-green hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-2 text-brand-green text-sm font-medium mb-3">
                  <Calendar size={15} />
                  {formatEventDate(event.date, event.endDate)}
                </div>
                <h3 className="font-bold text-brand-dark text-lg mb-2 group-hover:text-brand-green transition-colors line-clamp-2">
                  {event.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-4">{event.description}</p>
                <div className="flex items-center gap-1.5 text-gray-400 text-sm">
                  <MapPin size={13} />
                  {event.isOnline ? 'Online' : event.location}
                </div>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </section>
  )
}
