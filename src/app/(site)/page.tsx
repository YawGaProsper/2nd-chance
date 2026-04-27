import { Hero } from '@/components/home/Hero'
import { MissionSection } from '@/components/home/MissionSection'
import { StatsSection } from '@/components/home/StatsSection'
import { EventsPreview } from '@/components/home/EventsPreview'
import { DonateSection } from '@/components/home/DonateSection'
import { getFeaturedEvents } from '@/lib/sanity/queries'

export default async function HomePage() {
  const events = await getFeaturedEvents().catch(() => [])

  return (
    <>
      <Hero />
      <MissionSection />
      <StatsSection />
      <EventsPreview events={events} />
      <DonateSection />
    </>
  )
}
