import Link from 'next/link'
import { Calendar, MapPin, ExternalLink } from 'lucide-react'
import { formatEventDate } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import type { Event } from '@/types'

export function EventCard({ event }: { event: Event }) {
  return (
    <div className="group rounded-2xl border border-brand-border bg-white p-6 hover:border-brand-green hover:shadow-lg transition-all duration-300 flex flex-col">
      {event.isFeatured && (
        <span className="inline-block text-xs font-semibold bg-brand-muted text-brand-dark px-2.5 py-1 rounded-full mb-3 w-fit">
          Featured
        </span>
      )}
      <div className="flex items-center gap-2 text-brand-green text-sm mb-3">
        <Calendar size={14} />
        {formatEventDate(event.date, event.endDate)}
      </div>
      <h3 className="font-bold text-brand-dark text-lg mb-2 group-hover:text-brand-green transition-colors">
        {event.title}
      </h3>
      <p className="text-gray-500 text-sm line-clamp-3 flex-1 mb-4">{event.description}</p>
      <div className="flex items-center gap-1.5 text-gray-400 text-sm mb-5">
        <MapPin size={13} />
        {event.isOnline ? 'Online Event' : event.location}
      </div>
      {event.registrationUrl ? (
        <a
          href={event.registrationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-lg bg-brand-green text-white text-sm font-semibold hover:bg-brand-dark transition-colors"
        >
          Register <ExternalLink size={14} />
        </a>
      ) : (
        <Button href={`/events/${event.slug.current}`} variant="outline" className="w-full">
          Learn More
        </Button>
      )}
    </div>
  )
}
