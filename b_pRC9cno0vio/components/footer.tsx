'use client'

import { MapPin, Phone, Clock, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-foreground font-bold">
                ⊕
              </div>
              <div>
                <p className="font-display font-bold text-lg">Apotek Sejati</p>
              </div>
            </div>
            <p className="text-sm opacity-75">
              Solusi kesehatan terpercaya untuk keluarga Indonesia dengan harga terjangkau.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-2 text-sm opacity-75">
              <li><a href="#home" className="hover:opacity-100 transition">Beranda</a></li>
              <li><a href="#products" className="hover:opacity-100 transition">Produk</a></li>
              <li><a href="#services" className="hover:opacity-100 transition">Layanan</a></li>
              <li><a href="#about" className="hover:opacity-100 transition">Tentang Kami</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Kontak</h3>
            <ul className="space-y-3 text-sm opacity-75">
              <li className="flex gap-2">
                <Phone size={16} className="flex-shrink-0 mt-0.5" />
                <a href="tel:+6285233533368" className="hover:opacity-100 transition">0852-3353-3368</a>
              </li>
              <li className="flex gap-2">
                <Clock size={16} className="flex-shrink-0 mt-0.5" />
                <span>08.00 - 22.00 WITA</span>
              </li>
              <li className="flex gap-2">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                <span>Jl. Rappocini Raya No.107, Makassar</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-semibold mb-4">Jam Operasional</h3>
            <ul className="space-y-2 text-sm opacity-75">
              <li>Senin - Sabtu</li>
              <li>08.00 - 22.00 WITA</li>
              <li className="pt-2 border-t border-background/30">Minggu</li>
              <li>08.00 - 22.00 WITA</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/30 my-8" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-sm opacity-75">
          <p>© 2025 Apotek Sejati Farma. Semua hak cipta dilindungi.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <a href="#" className="hover:opacity-100 transition">Kebijakan Privasi</a>
            <a href="#" className="hover:opacity-100 transition">Syarat & Ketentuan</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
