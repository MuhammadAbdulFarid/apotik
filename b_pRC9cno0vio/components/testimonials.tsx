'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Mutiah Sari',
    role: 'Local Guide',
    rating: 5,
    text: 'Aku rekomendasikan Apotek Sejati buat teman-teman yang butuh obat murah dan lengkap. Pelayanannya ramah dan cepat.',
    avatar: '👩‍⚕️'
  },
  {
    name: 'Ahmad Suryanto',
    role: 'Pelanggan Setia',
    rating: 5,
    text: 'Obatnya murah-murah, cocok buat kebutuhan sehari-hari keluarga. Selalu lengkap apa yang kami cari.',
    avatar: '👨‍💼'
  },
  {
    name: 'Siti Rahma',
    role: 'Pengguna Reguler',
    rating: 5,
    text: 'Harga yang ditawarkan sangat kompetitif, kualitas obat terjamin. Pelayanan ramah dan profesional.',
    avatar: '👩‍🌾'
  },
  {
    name: 'Budi Santoso',
    role: 'Pelanggan Lama',
    rating: 5,
    text: 'Sudah menjadi langganan bertahun-tahun. Kepercayaan saya pada Apotek Sejati sangat tinggi.',
    avatar: '👨‍🍳'
  }
]

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Kepercayaan Pelanggan Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Bergabunglah dengan 670+ pelanggan yang telah merasakan manfaatnya
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">670+</p>
            <p className="text-sm text-muted-foreground">Ulasan Pelanggan</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">10+</p>
            <p className="text-sm text-muted-foreground">Tahun Melayani</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">1000+</p>
            <p className="text-sm text-muted-foreground">Jenis Obat</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">7/7</p>
            <p className="text-sm text-muted-foreground">Hari Buka</p>
          </div>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          {/* Current Testimonial */}
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">{testimonials[activeIndex].avatar}</div>
            <div className="flex justify-center gap-1 mb-4">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} size={20} className="fill-accent text-accent" />
              ))}
            </div>
            <blockquote className="text-xl text-foreground italic mb-6 leading-relaxed max-w-2xl mx-auto">
              &quot;{testimonials[activeIndex].text}&quot;
            </blockquote>
            <div>
              <p className="font-semibold text-lg text-foreground">{testimonials[activeIndex].name}</p>
              <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={prev}
              className="p-2 hover:bg-secondary rounded-full transition"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} className="text-primary" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex ? 'bg-primary w-8' : 'bg-border w-2'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-2 hover:bg-secondary rounded-full transition"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} className="text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
