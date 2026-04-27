import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  firstName:    z.string().min(1),
  lastName:     z.string().min(1),
  email:        z.string().email(),
  phone:        z.string().optional(),
  country:      z.string().min(1),
  skills:       z.string().min(10),
  availability: z.string().min(1),
  motivation:   z.string().min(30),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = schema.parse(body)

    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 're_your_key_here') {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: 'website@2ndchance.org.uk',
        to: process.env.CONTACT_EMAIL ?? 'info@2ndchance.org.uk',
        subject: `New volunteer application — ${data.firstName} ${data.lastName}`,
        html: `
          <h2>New Volunteer Application</h2>
          <p><strong>Name:</strong> ${data.firstName} ${data.lastName}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone ?? 'Not provided'}</p>
          <p><strong>Country:</strong> ${data.country}</p>
          <p><strong>Availability:</strong> ${data.availability}</p>
          <p><strong>Skills:</strong><br>${data.skills.replace(/\n/g, '<br>')}</p>
          <p><strong>Motivation:</strong><br>${data.motivation.replace(/\n/g, '<br>')}</p>
        `,
        reply_to: data.email,
      })

      // Confirmation email to applicant
      await resend.emails.send({
        from: 'hello@2ndchance.org.uk',
        to: data.email,
        subject: 'We received your volunteer application — 2nd Chance',
        html: `
          <p>Hi ${data.firstName},</p>
          <p>Thank you for applying to volunteer with <strong>2nd Chance</strong>! We've received your application and will be in touch within 5 working days.</p>
          <p>In the meantime, feel free to follow us on social media for the latest news and events.</p>
          <p>Best wishes,<br>The 2nd Chance Team</p>
        `,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
    }
    console.error('[volunteer]', error)
    return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 })
  }
}
