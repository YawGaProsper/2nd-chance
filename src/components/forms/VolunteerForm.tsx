'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { CheckCircle, AlertCircle } from 'lucide-react'

const schema = z.object({
  firstName:    z.string().min(1, 'Required'),
  lastName:     z.string().min(1, 'Required'),
  email:        z.string().email('Valid email required'),
  phone:        z.string().optional(),
  country:      z.string().min(1, 'Please select your country'),
  skills:       z.string().min(10, 'Please describe your skills (min 10 characters)'),
  availability: z.string().min(1, 'Please select your availability'),
  motivation:   z.string().min(30, 'Please tell us a bit more (min 30 characters)'),
})
type FormValues = z.infer<typeof schema>

const Field = ({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1.5">{label}</label>
    {children}
    {error && <p className="mt-1 text-red-500 text-xs">{error}</p>}
  </div>
)

const inputClass = 'w-full px-4 py-2.5 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent text-sm'

export function VolunteerForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  })

  async function onSubmit(data: FormValues) {
    try {
      const res = await fetch('/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error()
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
        <h3 className="text-xl font-bold text-brand-dark">Application Received!</h3>
        <p className="text-gray-500 max-w-sm">
          Thank you for wanting to volunteer with 2nd Chance. We&apos;ll review your application and be in touch within 5 working days.
        </p>
        <Button variant="outline" onClick={() => setStatus('idle')}>Submit Another</Button>
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
        <Field label="First Name" error={errors.firstName?.message}>
          <input {...register('firstName')} placeholder="Jane" className={inputClass} />
        </Field>
        <Field label="Last Name" error={errors.lastName?.message}>
          <input {...register('lastName')} placeholder="Doe" className={inputClass} />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Email Address" error={errors.email?.message}>
          <input {...register('email')} type="email" placeholder="jane@example.com" className={inputClass} />
        </Field>
        <Field label="Phone (optional)" error={errors.phone?.message}>
          <input {...register('phone')} type="tel" placeholder="+44 7700 000000" className={inputClass} />
        </Field>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Country" error={errors.country?.message}>
          <select {...register('country')} className={inputClass}>
            <option value="">Select country</option>
            <option value="uk">United Kingdom</option>
            <option value="south-sudan">South Sudan</option>
            <option value="other">Other</option>
          </select>
        </Field>
        <Field label="Availability" error={errors.availability?.message}>
          <select {...register('availability')} className={inputClass}>
            <option value="">Select availability</option>
            <option value="weekday-mornings">Weekday mornings</option>
            <option value="weekday-evenings">Weekday evenings</option>
            <option value="weekends">Weekends</option>
            <option value="flexible">Flexible</option>
          </select>
        </Field>
      </div>

      <Field label="Skills & Experience" error={errors.skills?.message}>
        <textarea
          {...register('skills')}
          rows={3}
          placeholder="e.g. Business coaching, IT support, career guidance, event management..."
          className={`${inputClass} resize-none`}
        />
      </Field>

      <Field label="Why do you want to volunteer with us?" error={errors.motivation?.message}>
        <textarea
          {...register('motivation')}
          rows={4}
          placeholder="Tell us what motivates you to support young people..."
          className={`${inputClass} resize-none`}
        />
      </Field>

      <Button type="submit" disabled={isSubmitting} size="lg" className="w-full">
        {isSubmitting ? 'Submitting…' : 'Submit Application'}
      </Button>
    </form>
  )
}
