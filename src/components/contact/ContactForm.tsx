import { useState, type FormEvent } from 'react'
import { Button } from '../ui/Button'
import { contactFormConfig } from '../../data/personal'
import { personalInfo } from '../../data/personal'
import { FOCUS_RING } from '../../utils/constants'

interface FormState {
  name: string
  email: string
  subject: string
  message: string
}

type Status = 'idle' | 'loading' | 'success' | 'error'

const initialState: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Partial<FormState>>({})
  const [status, setStatus] = useState<Status>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const validate = () => {
    const next: Partial<FormState> = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) next.email = 'Please enter your email.'
    else if (!isValidEmail(form.email.trim()))
      next.email = 'Please enter a valid email address.'
    if (!form.subject.trim()) next.subject = 'Please enter a subject.'
    if (!form.message.trim()) next.message = 'Please enter a message.'
    else if (form.message.trim().length < 10)
      next.message = 'Message should be at least 10 characters.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const submitMailto = () => {
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    )
    const subject = encodeURIComponent(form.subject)
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
    setStatus('success')
    setStatusMessage('Opening your email client to send the message.')
    setForm(initialState)
  }

  const submitFormspree = async () => {
    if (!contactFormConfig.formspreeEndpoint) {
      throw new Error('Formspree endpoint is not configured.')
    }

    const response = await fetch(contactFormConfig.formspreeEndpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })

    if (!response.ok) {
      throw new Error('Formspree request failed.')
    }
  }

  const submitEmailJs = async () => {
    const { emailjsPublicKey, emailjsServiceId, emailjsTemplateId } =
      contactFormConfig

    if (!emailjsPublicKey || !emailjsServiceId || !emailjsTemplateId) {
      throw new Error('EmailJS is not fully configured.')
    }

    const response = await fetch(
      'https://api.emailjs.com/api/v1.0/email/send',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_id: emailjsServiceId,
          template_id: emailjsTemplateId,
          user_id: emailjsPublicKey,
          template_params: {
            from_name: form.name,
            from_email: form.email,
            subject: form.subject,
            message: form.message,
          },
        }),
      },
    )

    if (!response.ok) {
      throw new Error('EmailJS request failed.')
    }
  }

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validate()) {
      setStatus('error')
      setStatusMessage('Please fix the highlighted fields and try again.')
      return
    }

    setStatus('loading')
    setStatusMessage('Sending your message…')

    try {
      if (contactFormConfig.provider === 'formspree') {
        await submitFormspree()
      } else if (contactFormConfig.provider === 'emailjs') {
        await submitEmailJs()
      } else {
        submitMailto()
        return
      }

      setStatus('success')
      setStatusMessage('Thank you — your message was sent successfully.')
      setForm(initialState)
      setErrors({})
    } catch {
      setStatus('error')
      setStatusMessage(
        'Something went wrong while sending. You can also email me directly.',
      )
    }
  }

  const fieldClass =
    `mt-2 w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)]/70 px-4 py-3 text-sm text-[var(--color-heading)] outline-none transition placeholder:text-[var(--color-text-muted)] ${FOCUS_RING}`

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="surface-card rounded-[1.75rem] p-6 sm:p-7"
      aria-describedby="contact-form-status"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, name: event.target.value }))
            }
            className={fieldClass}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
          />
          {errors.name ? (
            <p id="contact-name-error" className="mt-1 text-sm text-[#a14a4a]">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div>
          <label htmlFor="contact-email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) =>
              setForm((prev) => ({ ...prev, email: event.target.value }))
            }
            className={fieldClass}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
          />
          {errors.email ? (
            <p id="contact-email-error" className="mt-1 text-sm text-[#a14a4a]">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="contact-subject" className="text-sm font-medium">
          Subject
        </label>
        <input
          id="contact-subject"
          name="subject"
          value={form.subject}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, subject: event.target.value }))
          }
          className={fieldClass}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
        />
        {errors.subject ? (
          <p id="contact-subject-error" className="mt-1 text-sm text-[#a14a4a]">
            {errors.subject}
          </p>
        ) : null}
      </div>

      <div className="mt-4">
        <label htmlFor="contact-message" className="text-sm font-medium">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={form.message}
          onChange={(event) =>
            setForm((prev) => ({ ...prev, message: event.target.value }))
          }
          className={`${fieldClass} resize-y`}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
        />
        {errors.message ? (
          <p id="contact-message-error" className="mt-1 text-sm text-[#a14a4a]">
            {errors.message}
          </p>
        ) : null}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <Button type="submit" disabled={status === 'loading'}>
          {status === 'loading' ? 'Sending…' : 'Send message'}
        </Button>
        <p
          id="contact-form-status"
          role="status"
          aria-live="polite"
          className={`text-sm ${
            status === 'error'
              ? 'text-[#a14a4a]'
              : status === 'success'
                ? 'text-[#3f5f3a]'
                : 'text-[var(--color-text-muted)]'
          }`}
        >
          {statusMessage}
        </p>
      </div>
    </form>
  )
}
