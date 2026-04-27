'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { CheckCircle, AlertCircle } from 'lucide-react'

const schema = z.object({
  name:    z.string().min(2, 'Please enter your full name'),
  email:   z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Please enter a subject'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})
type FormValues = z.infer<typeof schema>

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) })

  async function onSubmit(data: FormValues) {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <CheckCircle size={48} className="text-brand-green" />
        <h3 className="text-xl font-bold text-brand-dark">Message Sent!</h3>
        <p className="text-gray-500">Thank you for reaching out. We&apos;ll get back to you within 2 working days.</p>
        <Button variant="outline" onClick={() => setStatus('idle')}>Send Another</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {status === 'error' && (
        <div className="flex items-center gap-2 p-4 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
          <AlertCircle size={16} />
          Something went wrong. Please try again or email us directly.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name</label>
          <input
            {...register('name')}
            placeholder="Jane Doe"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent text-sm"
          />
          {errors.name && <p className="mt-1 text-red-500 text-xs">{errors.name.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
          <input
            {...register('email')}
            type="email"
            placeholder="jane@example.com"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent text-sm"
          />
          {errors.email && <p className="mt-1 text-red-500 text-xs">{errors.email.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject</label>
        <input
          {...register('subject')}
          placeholder="How can we help?"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent text-sm"
        />
        {errors.subject && <p className="mt-1 text-red-500 text-xs">{errors.subject.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">Message</label>
        <textarea
          {...register('message')}
          rows={6}
          placeholder="Tell us more..."
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent text-sm resize-none"
        />
        {errors.message && <p className="mt-1 text-red-500 text-xs">{errors.message.message}</p>}
      </div>

      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full">
        {isSubmitting ? 'Sending…' : 'Send Message'}
      </Button>
    </form>
  )
}
