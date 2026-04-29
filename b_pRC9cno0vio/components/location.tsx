'use client'

import { MapPin, Phone, Clock, ParkingCircle } from 'lucide-react'

export default function Location() {
  const whatsappLink = 'https://wa.me/6285233533368'
  const mapsLink = 'https://maps.google.com/?q=Apotek+Sejati+Farma+Makassar'

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground mb-12 text-center">
          Kunjungi Kami
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Info Section */}
          <div className="space-y-6">
            {/* Address */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Alamat</h3>
                <p className="text-muted-foreground">
                  Jl. Rappocini Raya No.107, Rappocini,<br />
                  Kec. Rappocini, Kota Makassar,<br />
                  Sulawesi Selatan 90222
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Telepon</h3>
                <a href="tel:+6285233533368" className="text-primary hover:underline">
                  0852-3353-3368
                </a>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Jam Operasional</h3>
                <p className="text-muted-foreground">
                  Senin - Minggu: 08.00 - 22.00 WITA
                </p>
              </div>
            </div>

            {/* Parking */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <ParkingCircle className="text-primary" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Fasilitas</h3>
                <p className="text-muted-foreground">
                  Tersedia parkir motor dan mobil
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={mapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg hover:bg-primary hover:text-primary-foreground transition font-medium text-center"
              >
                Buka di Google Maps
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:opacity-90 transition font-medium text-center"
              >
                Hubungi Sekarang
              </a>
            </div>
          </div>

          {/* Map Section */}
          <div className="rounded-xl overflow-hidden shadow-lg h-96 lg:h-full min-h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.743698869906!2d119.42150731530456!3d-5.154835996277607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee3b1f6f6f6f7%3A0x1234567890abcdef!2sJl.%20Rappocini%20Raya%20No.107%2C%20Makassar!5e0!3m2!1sid!2sid!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Apotek Sejati Farma Location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
