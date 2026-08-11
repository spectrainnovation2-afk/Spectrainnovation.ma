'use client'

import { useRef, useState, useEffect } from 'react'
import emailjs from 'emailjs-com'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import type { Dictionary } from '@/lib/i18n/dictionaries'
import { Sparkles } from 'lucide-react'

export function ContactForm({ dict }: { dict: Dictionary }) {
  const formRef = useRef<HTMLFormElement>(null)
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  useEffect(() => {
    if (status === 'success' && typeof window !== 'undefined' && typeof (window as unknown as { gtag?: Function }).gtag === 'function') {
      ;(window as unknown as { gtag: Function }).gtag('event', 'conversion', {
        send_to: 'AW-17676323420/I4BKCOjriLgbENyU3exB',
        value: 1.0,
        currency: 'MAD',
      })
    }
  }, [status])

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setLoading(true)
    setStatus('sending')

    let timeInput = formRef.current.querySelector('input[name="time"]') as HTMLInputElement | null
    if (!timeInput) {
      timeInput = document.createElement('input')
      timeInput.type = 'hidden'
      timeInput.name = 'time'
      formRef.current.appendChild(timeInput)
    }
    timeInput.value = new Date().toLocaleString()

    try {
      await emailjs.sendForm(
        'service_0tjq212',
        'template_wiwldk6',
        formRef.current,
        '7shS3CJXIF9EZfuXy'
      )
      setStatus('success')
      formRef.current.reset()
    } catch {
      setStatus('error')
    } finally {
      setLoading(false)
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={onSubmit}
      className="space-y-5 sm:space-y-6 bg-white/25 backdrop-blur-sm p-5 sm:p-10 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/30"
    >
      {status === 'sending' && (
        <p className="text-center text-black font-medium" role="status">
          {dict.contactPage.form.sending}
        </p>
      )}
      {status === 'success' && (
        <p className="text-center text-green-800 bg-green-100 rounded-xl px-3 py-2 font-semibold" role="status">
          {dict.contactPage.form.success}
        </p>
      )}
      {status === 'error' && (
        <p className="text-center text-red-800 bg-red-100 rounded-xl px-3 py-2 font-semibold" role="alert">
          {dict.contactPage.form.error}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nom" className="sr-only">{dict.contactPage.form.firstName}</label>
          <Input id="nom" name="nom" required placeholder={dict.contactPage.form.firstName} className="bg-white/90 border-2 border-transparent focus:border-black rounded-xl p-4 text-base" />
        </div>
        <div>
          <label htmlFor="prenom" className="sr-only">{dict.contactPage.form.lastName}</label>
          <Input id="prenom" name="prenom" required placeholder={dict.contactPage.form.lastName} className="bg-white/90 border-2 border-transparent focus:border-black rounded-xl p-4 text-base" />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="sr-only">{dict.contactPage.form.email}</label>
        <Input id="email" name="email" type="email" required placeholder={dict.contactPage.form.email} className="bg-white/90 border-2 border-transparent focus:border-black rounded-xl p-4 text-base" />
      </div>
      <div>
        <label htmlFor="telephone" className="sr-only">{dict.contactPage.form.phone}</label>
        <Input id="telephone" name="telephone" placeholder={dict.contactPage.form.phone} className="bg-white/90 border-2 border-transparent focus:border-black rounded-xl p-4 text-base" />
      </div>
      <div>
        <label htmlFor="sujet" className="sr-only">{dict.contactPage.form.subject}</label>
        <Input id="sujet" name="sujet" required placeholder={dict.contactPage.form.subject} className="bg-white/90 border-2 border-transparent focus:border-black rounded-xl p-4 text-base" />
      </div>
      <div>
        <label htmlFor="message" className="sr-only">{dict.contactPage.form.message}</label>
        <Textarea id="message" name="message" required rows={4} placeholder={dict.contactPage.form.message} className="bg-white/90 border-2 border-transparent focus:border-black rounded-xl p-4 text-base resize-none" />
      </div>
      <input type="hidden" name="time" />
      <Button
        type="submit"
        disabled={loading}
        className="bg-black text-white hover:bg-gray-800 w-full rounded-xl py-4 text-base font-semibold shadow-xl"
      >
        {dict.contactPage.form.submit}
        <Sparkles className="ms-2 w-5 h-5" />
      </Button>
    </form>
  )
}
