import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const FloatingWhatsAppRedirect = ({ whatsappLink }) => {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
    >
      <div className="relative w-14 h-14">
        {/* Wave animation */}
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping"></span>

        {/* WhatsApp Button */}
        <div className="relative w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300">
          <FaWhatsapp size={28} />
        </div>
      </div>
    </a>
  )
}

export default FloatingWhatsAppRedirect