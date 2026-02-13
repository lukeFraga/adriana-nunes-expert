import React from 'react';
import { WHATSAPP_LINK } from '../constants';
import { MessageCircle } from 'lucide-react';

interface ButtonProps {
  text?: string;
  subtext?: string;
  variant?: 'primary' | 'secondary' | 'fixed';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  text = "Agendar primeira consulta gratuita", 
  subtext = "Resposta rápida • Sem compromisso",
  variant = 'primary',
  className = ''
}) => {
  const baseStyles = "inline-flex flex-col items-center justify-center transition-all duration-300 font-bold rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95";
  
  const variants = {
    primary: "bg-whatsapp text-white px-8 py-4 w-full md:w-auto text-lg",
    secondary: "bg-secondary text-white px-8 py-4 w-full md:w-auto text-lg",
    fixed: "fixed bottom-4 left-4 right-4 z-50 bg-whatsapp text-white py-4 shadow-2xl animate-pulse-subtle border-2 border-white/20"
  };

  return (
    <a 
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <div className="flex items-center gap-2">
        <MessageCircle size={24} fill="currentColor" className="text-white" />
        <span>{text}</span>
      </div>
      {subtext && variant !== 'fixed' && (
        <span className="text-[10px] font-medium opacity-90 mt-1 uppercase tracking-wide">
          {subtext}
        </span>
      )}
    </a>
  );
};