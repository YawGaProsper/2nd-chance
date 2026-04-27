import { NextResponse } from 'next/server'
import { z } from 'zod'

const schema = z.object({
  name:    z.string().min(2),
  email:   z.string().email(),
  subject: z.string().min(5),
  message: z.string().min(20),
})

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const data = schema.parse(body)

    // Send email via Resend when RESEND_API_KEY is configured
    if (process.env.RESEND_API_KEY && process.env.RESEND_API_KEY !== 're_your_key_here') {
      const { Resend } = await import('resend')
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: 'website@2ndchance.org.uk',
        to: process.env.CONTACT_EMAIL ?? 'info@2ndchance.org.uk',
        subject: `New contact: ${data.subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, '<br>')}</p>
        `,
        replyTo: data.email,
      })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid form data' }, { status: 400 })
    }
    console.error('[contact]', error)
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 })
  }
}
