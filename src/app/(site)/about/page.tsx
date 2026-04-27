import type { Metadata } from 'next'
import Image from 'next/image'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { getTeamMembers } from '@/lib/sanity/queries'
import { urlFor } from '@/lib/sanity/image'
import { Linkedin, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about 2nd Chance — our mission, story and the team behind it.',
}

export default async function AboutPage() {
  const team = await getTeamMembers().catch(() => [])
  const ukTeam = team.filter((m) => m.country === 'uk' || m.country === 'both')
  const ssTeam = team.filter((m) => m.country === 'south-sudan')

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-darker to-brand-dark py-16 sm:py-24">
        <Container>
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">About 2nd Chance</h1>
            <p className="text-green-200 text-lg leading-relaxed">
              We believe every young person deserves the tools, connections and support to build a fulfilling future — regardless of where they come from.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 sm:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-brand-dark mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                2nd Chance exists to provide meaningful networking opportunities, mentoring relationships and practical support to young people in the UK and South Sudan who face barriers to personal and professional growth.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We believe that talent is equally distributed but opportunity is not. Through our programmes, we work to close that gap — one young person at a time.
              </p>
              <Button href="/volunteer">Join Our Mission</Button>
            </div>
            <div className="bg-brand-light rounded-2xl p-8 border border-brand-border">
              <h3 className="text-xl font-bold text-brand-dark mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                A world where every young person, regardless of background or geography, has access to the networks and support they need to thrive.
              </p>
              <h3 className="text-xl font-bold text-brand-dark mb-3">Our Values</h3>
              <ul className="space-y-2">
                {['Equality & Inclusion', 'Empowerment', 'Community', 'Integrity', 'Impact'].map((v) => (
                  <li key={v} className="flex items-center gap-2 text-gray-600">
                    <span className="w-2 h-2 rounded-full bg-brand-green flex-shrink-0" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Presence */}
      <section className="py-16 bg-brand-light">
        <Container>
          <h2 className="text-3xl font-extrabold text-brand-dark mb-10 text-center">Where We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                flag: '🇬🇧',
                country: 'United Kingdom',
                description:
                  'Based in the UK, we run mentoring programmes, networking events and employability workshops for young people from disadvantaged communities across Britain.',
              },
              {
                flag: '🇸🇸',
                country: 'South Sudan',
                description:
                  'In South Sudan, we focus on youth empowerment, skills development and creating pathways to education and employment for young people in challenging circumstances.',
              },
            ].map(({ flag, country, description }) => (
              <div key={country} className="bg-white rounded-2xl p-8 border border-brand-border">
                <div className="text-4xl mb-3">{flag}</div>
                <h3 className="text-xl font-bold text-brand-dark mb-3">{country}</h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Team */}
      {team.length > 0 && (
        <section className="py-16 sm:py-20 bg-white">
          <Container>
            <h2 className="text-3xl font-extrabold text-brand-dark mb-10 text-center">Meet the Team</h2>

            {ukTeam.length > 0 && (
              <>
                <h3 className="text-xl font-bold text-brand-dark mb-6 flex items-center gap-2">
                  🇬🇧 UK Team
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                  {ukTeam.map((member) => (
                    <div key={member._id} className="text-center p-6 rounded-2xl border border-brand-border hover:border-brand-green transition-colors">
                      {member.photo ? (
                        <Image
                          src={urlFor(member.photo).width(200).height(200).url()}
                          alt={member.name}
                          width={80}
                          height={80}
                          className="rounded-full mx-auto mb-4 object-cover"
                        />
                      ) : (
                        <div className="w-20 h-20 rounded-full bg-brand-muted flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-brand-dark">
                          {member.name[0]}
                        </div>
                      )}
                      <h4 className="font-bold text-brand-dark">{member.name}</h4>
                      <p className="text-brand-green text-sm font-medium mb-2">{member.role}</p>
                      {member.bio && <p className="text-gray-500 text-sm line-clamp-3">{member.bio}</p>}
                      {member.linkedIn && (
                        <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-brand-green hover:text-brand-dark mt-3 text-sm">
                          <Linkedin size={14} /> LinkedIn
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </>
            )}

            {ssTeam.length > 0 && (
              <>
                <h3 className="text-xl font-bold text-brand-dark mb-6 flex items-center gap-2">
                  🇸🇸 South Sudan Team
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ssTeam.map((member) => (
                    <div key={member._id} className="text-center p-6 rounded-2xl border border-brand-border hover:border-brand-green transition-colors">
                      {member.photo ? (
                        <Image
                          src={urlFor(member.photo).width(200).height(200).url()}
                          alt={member.name}
                          width={80}
                          height={80}
                          className="rounded-full mx-auto mb-4 object-cover"
                        />
                      ) : (
                        <div className="w-20 h-20 rounded-full bg-brand-muted flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-brand-dark">
                          {member.name[0]}
                        </div>
                      )}
                      <h4 className="font-bold text-brand-dark">{member.name}</h4>
                      <p className="text-brand-green text-sm font-medium mb-2">{member.role}</p>
                      {member.bio && <p className="text-gray-500 text-sm line-clamp-3">{member.bio}</p>}
                    </div>
                  ))}
                </div>
              </>
            )}
          </Container>
        </section>
      )}
    </>
  )
}
