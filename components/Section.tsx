import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'dark';
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id = '',
  background = 'white'
}) => {
  const bgColors = {
    white: 'bg-white',
    light: 'bg-surface',
    dark: 'bg-primary text-white'
  };

  return (
    <section id={id} className={`${bgColors[background]} py-16 md:py-24 px-6 md:px-12 lg:px-24 ${className}`}>
      <div className="max-w-5xl mx-auto">
        {children}
      </div>
    </section>
  );
};