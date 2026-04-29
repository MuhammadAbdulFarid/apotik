'use client'

import { Badge } from '@/components/ui/badge'
import { ArrowRight } from 'lucide-react'

const categories = [
  {
    title: 'Obat Resep Dokter',
    description: 'Obat resep lengkap dengan konsultasi gratis',
    icon: '💊'
  },
  {
    title: 'Obat Bebas & OTC',
    description: 'Obat bebas untuk berbagai keluhan umum',
    icon: '📦'
  },
  {
    title: 'Vitamin & Suplemen',
    description: 'Vitamin berkualitas untuk kesehatan optimal',
    icon: '🥗'
  },
  {
    title: 'Alat Kesehatan',
    description: 'Alat medis dan perlengkapan kesehatan',
    icon: '🩺'
  },
  {
    title: 'Obat Herbal & Tradisional',
    description: 'Produk herbal alami terpercaya',
    icon: '🌿'
  },
  {
    title: 'Produk Bayi & Ibu',
    description: 'Khusus untuk ibu dan bayi tercinta',
    icon: '👶'
  },
  {
    title: 'Skincare & Kecantikan',
    description: 'Produk kecantikan dan perawatan kulit',
    icon: '✨'
  },
  {
    title: 'Obat Khusus',
    description: 'Untuk diabetes, hipertensi, dan lainnya',
    icon: '⚕️'
  }
]

export default function Products() {
  return (
    <section id="products" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Kategori Produk Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Lengkap dari A sampai Z untuk semua kebutuhan kesehatan keluarga Anda
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Badge */}
              <Badge className="mb-3 bg-accent text-accent-foreground">
                HARGA TERJANGKAU
              </Badge>

              <div className="relative z-10">
                <p className="text-3xl mb-3">{category.icon}</p>
                <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {category.description}
                </p>
                <button className="text-primary font-medium text-sm flex items-center gap-2 group-hover:translate-x-1 transition">
                  Lihat Selengkapnya
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8">
          <p className="text-foreground mb-4">
            Produk yang Anda cari tidak ada di sini?
          </p>
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:opacity-90 transition font-medium">
            Hubungi Kami untuk Ketersediaan
          </button>
        </div>
      </div>
    </section>
  )
}
