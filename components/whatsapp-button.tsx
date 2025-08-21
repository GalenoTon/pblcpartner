'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = '5521979159999';
    const message = 'Olá! Gostaria de saber mais sobre o Public Partner.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      aria-label="Abrir conversa no WhatsApp"
      title="Falar sobre o projeto no WhatsApp"
    >
      <FontAwesomeIcon 
        icon={faWhatsapp} 
        className="text-2xl" 
      />
    </button>
  );
}
