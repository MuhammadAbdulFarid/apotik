'use client'

import { Package, Zap, Clock, MapPin } from 'lucide-react'

const features = [
  {
    icon: Package,
    title: 'Harga Terjangkau',
    description: 'Obat murah tanpa kompromi kualitas. Kami percaya kesehatan adalah hak semua orang.'
  },
  {
    icon: Zap,
    title: 'Stok Lengkap',
    description: 'Ribuan jenis obat tersedia setiap saat untuk kebutuhan Anda.'
  },
  {
    icon: Clock,
    title: 'Buka Hingga 22.00',
    description: 'Siap melayani Anda malam hari. Apotek tidak pernah tutup saat Anda butuh.'
  },
  {
    icon: MapPin,
    title: 'Mudah Dijangkau',
    description: 'Lokasi strategis di Jl. Rappocini Raya, Makassar.'
  }
]

export default function Features() {
  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Mengapa Memilih Apotek Sejati Farma?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami berkomitmen untuk memberikan layanan terbaik dengan harga yang bersahabat untuk seluruh keluarga Indonesia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
