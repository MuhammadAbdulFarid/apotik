'use client'

import { MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)
  const whatsappLink = 'https://wa.me/6285233533368'

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 w-14 h-14 bg-accent text-accent-foreground rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-40 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Chat with WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  )
}
