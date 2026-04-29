'use client'

import { MessageCircle } from 'lucide-react'

export default function CallToAction() {
  const whatsappLink = 'https://wa.me/6285233533368'

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-primary/90">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-primary-foreground mb-4">
          Butuh Obat Malam Ini?
        </h2>
        <p className="text-lg text-primary-foreground/90 mb-8 leading-relaxed">
          Kami ada untuk Anda 24 jam dengan jam operasional hingga pukul 22.00 setiap hari. Kunjungi kami sebelum tutup atau hubungi langsung via WhatsApp.
        </p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-lg hover:shadow-lg transition font-semibold text-lg group"
        >
          <MessageCircle size={24} />
          Chat WhatsApp Sekarang
        </a>
      </div>
    </section>
  )
}
