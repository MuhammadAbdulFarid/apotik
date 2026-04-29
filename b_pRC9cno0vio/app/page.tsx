'use client'

import Header from '@/components/header'
import Hero from '@/components/hero'
import Features from '@/components/features'
import Products from '@/components/products'
import Testimonials from '@/components/testimonials'
import Location from '@/components/location'
import CallToAction from '@/components/cta'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <Products />
      <Testimonials />
      <Location />
      <CallToAction />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
