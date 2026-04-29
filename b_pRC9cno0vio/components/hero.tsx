'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  const whatsappLink = 'https://wa.me/6285233533368'

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="inline-block bg-accent/20 text-accent px-4 py-1 rounded-full text-sm font-medium">
              670+ Pelanggan Mempercayai Kami
            </div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl text-pretty text-foreground leading-tight">
              Obat Lengkap, Harga <span className="text-primary">Terjangkau</span> di Makassar
            </h2>
            <p className="text-lg text-muted-foreground max-w-lg text-pretty">
              Melayani kebutuhan kesehatan keluarga Anda setiap hari hingga pukul 22.00 dengan harga yang tidak akan menguras kantong.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => scrollToSection('products')}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition font-medium flex items-center justify-center gap-2 group"
            >
              Lihat Produk Kami
              <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition font-medium flex items-center justify-center gap-2"
            >
              Hubungi via WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
            <div>
              <p className="text-2xl font-bold text-primary">1000+</p>
              <p className="text-sm text-muted-foreground">Jenis Obat</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground">Tahun Melayani</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-primary">7x</p>
              <p className="text-sm text-muted-foreground">Buka Seminggu</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative h-96 md:h-full min-h-96">
          <Image
            src="/pharmacy-hero.jpg"
            alt="Apotek Sejati Farma"
            fill
            className="object-cover rounded-2xl shadow-2xl"
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Floating Badge */}
          <div className="absolute -bottom-8 -left-4 bg-white shadow-lg rounded-xl p-4 max-w-xs">
            <p className="text-sm font-semibold text-foreground">Harga Terjangkau ⭐</p>
            <p className="text-xs text-muted-foreground">Tanpa kompromi kualitas</p>
          </div>
        </div>
      </div>
    </section>
  )
}
