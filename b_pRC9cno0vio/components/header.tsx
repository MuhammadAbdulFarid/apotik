'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  const whatsappLink = 'https://wa.me/6285233533368'

  return (
    <header className={`transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 right-0 bg-background shadow-lg z-50' : 'relative'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-lg">
              ⊕
            </div>
            <div>
              <h1 className="font-display font-bold text-primary text-xl">Apotek Sejati</h1>
              <p className="text-xs text-muted-foreground">Farma</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition">
              Beranda
            </button>
            <button onClick={() => scrollToSection('products')} className="text-foreground hover:text-primary transition">
              Produk
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition">
              Layanan
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition">
              Tentang Kami
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition">
              Kontak
            </button>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:opacity-90 transition font-medium">
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left text-foreground hover:text-primary transition py-2">
              Beranda
            </button>
            <button onClick={() => scrollToSection('products')} className="block w-full text-left text-foreground hover:text-primary transition py-2">
              Produk
            </button>
            <button onClick={() => scrollToSection('services')} className="block w-full text-left text-foreground hover:text-primary transition py-2">
              Layanan
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left text-foreground hover:text-primary transition py-2">
              Tentang Kami
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left text-foreground hover:text-primary transition py-2">
              Kontak
            </button>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block w-full bg-primary text-primary-foreground text-center px-6 py-2 rounded-lg hover:opacity-90 transition font-medium">
              Hubungi Kami
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
