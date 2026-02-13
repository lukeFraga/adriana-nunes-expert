import React, { useState } from 'react';
import { Button } from './components/Button';
import { Section } from './components/Section';
import { Lightbox } from './components/Lightbox';
import { IMAGES, ADDRESS, INSTAGRAM_LINK, MAPS_LINK } from './constants';
import { 
  CheckCircle2, 
  MapPin, 
  Instagram, 
  Star, 
  HeartHandshake, 
  Search, 
  ShieldCheck, 
  CalendarCheck 
} from 'lucide-react';

export default function App() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <div className="min-h-screen font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-8 pb-16 bg-gradient-to-br from-stone-100 to-stone-200 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-secondary/10 -skew-x-12 translate-x-1/3 z-0" />
        
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <span className="inline-block bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase mb-2">
              Odontologia Humanizada
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
              Olá, sou a <br/>
              <span className="text-primary">Dra. Adriana Nunes</span>
            </h1>
            
            {/* Mobile Image Position: Between Headline and Description */}
            <div className="md:hidden w-full max-w-[280px] mx-auto relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[3/4] my-6">
               <img 
                 src={IMAGES.hero} 
                 alt="Dra. Adriana Nunes" 
                 className="w-full h-full object-cover object-top"
               />
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white">
                 <p className="font-serif italic text-sm">"Cuidar do sorriso é cuidar da vida."</p>
               </div>
            </div>

            <p className="text-lg md:text-xl text-gray-600 font-medium max-w-lg mx-auto md:mx-0 leading-relaxed">
              Realizo tratamentos de clínica geral e ortodontia devolvendo a confiança do seu sorriso em Curitiba.
            </p>
            <div className="pt-4">
              <Button />
            </div>
          </div>

          {/* Desktop Hero Image (Hidden on Mobile) */}
          <div className="hidden md:block flex-1 w-full max-w-md md:max-w-full relative">
            {/* Adjusted aspect ratio to 4/5 for better portrait framing and object position to 20% from top */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-[3/4] md:aspect-[4/5]">
               <img 
                 src={IMAGES.hero} 
                 alt="Dra. Adriana Nunes Sorrindo" 
                 className="w-full h-full object-cover object-[50%_20%]"
               />
               <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 text-white md:hidden">
                 <p className="font-serif italic">"Cuidar do sorriso é cuidar da vida."</p>
               </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg hidden md:block animate-bounce-slow">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                  <Star size={16} fill="currentColor" />
                </div>
                <span className="text-sm font-bold text-gray-700">Satisfação Garantida</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <Section background="white" id="sobre">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative group">
             <div className="absolute inset-0 bg-secondary rounded-2xl transform rotate-3 transition-transform group-hover:rotate-0"></div>
             <img 
               src={IMAGES.about} 
               alt="Dra. Adriana Nunes no consultório" 
               className="relative rounded-2xl shadow-xl w-full object-cover aspect-[4/5] z-10"
             />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              Mais que uma dentista, uma parceira do seu sorriso.
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Eu sei que ir ao dentista pode causar ansiedade em muita gente. Por isso, meu consultório foi pensado para ser um ambiente seguro, acolhedor e livre de julgamentos.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Minha missão não é apenas "consertar dentes", é ouvir você, entender suas queixas e propor a solução mais honesta e eficaz para o seu caso.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary flex-shrink-0" />
                <span className="font-medium text-gray-700">Atendimento sem pressa</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary flex-shrink-0" />
                <span className="font-medium text-gray-700">Mão leve e cuidadosa</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary flex-shrink-0" />
                <span className="font-medium text-gray-700">Explicação clara</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="text-primary flex-shrink-0" />
                <span className="font-medium text-gray-700">Materiais de alta qualidade</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 3. RESULTADOS REAIS */}
      <Section background="light" id="resultados">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
            Resultados que falam por si
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Veja algumas transformações realizadas aqui no consultório. Clique nas imagens para ampliar.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {IMAGES.gallery.map((imgSrc, index) => (
            <div 
              key={index} 
              className="cursor-pointer group relative overflow-hidden rounded-xl shadow-md aspect-square bg-white"
              onClick={() => setLightboxImage(imgSrc)}
            >
              <img 
                src={imgSrc} 
                alt={`Resultado do paciente ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <Search className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-xs text-gray-500 mt-6 italic">
          *Imagens autorizadas pelos pacientes. Os resultados podem variar de acordo com cada organismo e caso clínico.
        </p>
      </Section>

      {/* 4. POR QUE CONFIAR */}
      <Section background="white">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
            Por que agendar comigo?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-surface p-8 rounded-2xl border border-stone-200 hover:shadow-lg transition-shadow text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <ShieldCheck size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Honestidade</h3>
            <p className="text-gray-600">
              Não invento tratamentos. Você fará apenas o que for realmente necessário para sua saúde e estética.
            </p>
          </div>
          
          <div className="bg-surface p-8 rounded-2xl border border-stone-200 hover:shadow-lg transition-shadow text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <HeartHandshake size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Atendimento Pessoal</h3>
            <p className="text-gray-600">
              Você será atendido por mim do início ao fim. Acompanho de perto cada etapa da sua evolução.
            </p>
          </div>

          <div className="bg-surface p-8 rounded-2xl border border-stone-200 hover:shadow-lg transition-shadow text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <CalendarCheck size={32} />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Facilidade</h3>
            <p className="text-gray-600">
              Agendamento descomplicado pelo WhatsApp e horários flexíveis para se adequar à sua rotina.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-medium text-gray-800 mb-6">
            Dê o primeiro passo para o sorriso que você merece.
          </h3>
          <Button variant="secondary" text="Falar com a Dra. Adriana agora" />
        </div>
      </Section>

      {/* 5. COMO FUNCIONA */}
      <Section background="dark" className="relative overflow-hidden">
        <div className="relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-12">
            Sua primeira consulta é simples
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
             {/* Step 1 */}
             <div className="relative">
                <div className="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">1</div>
                <h3 className="text-xl font-bold text-white mb-2">Envie um "Oi"</h3>
                <p className="text-white/80">
                  Clique no botão do WhatsApp e envie uma mensagem. Minha equipe (ou eu mesma) responderá rapidamente.
                </p>
             </div>
             {/* Step 2 */}
             <div className="relative">
                <div className="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">2</div>
                <h3 className="text-xl font-bold text-white mb-2">Agendamento</h3>
                <p className="text-white/80">
                  Escolhemos o melhor horário para você. Sem burocracia e sem compromisso financeiro nessa etapa.
                </p>
             </div>
             {/* Step 3 */}
             <div className="relative">
                <div className="w-16 h-16 bg-white text-primary rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-lg">3</div>
                <h3 className="text-xl font-bold text-white mb-2">Avaliação Gratuita</h3>
                <p className="text-white/80">
                  Venha ao consultório, tomamos um café e eu avalio seu caso detalhadamente para montar seu plano.
                </p>
             </div>
          </div>
        </div>
      </Section>

      {/* 6. CTA FINAL */}
      <Section background="white" className="py-24">
        <div className="max-w-3xl mx-auto text-center space-y-8">
           <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
             Pare de esconder seu sorriso nas fotos.
           </h2>
           <p className="text-xl text-gray-600">
             A avaliação é gratuita, o café é cortesia e a transformação é para a vida toda.
           </p>
           <div className="transform hover:scale-105 transition-transform duration-300">
             <Button text="Quero agendar minha consulta grátis" />
           </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
        <div className="container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h4 className="text-white font-serif text-xl font-bold mb-2">Dra. Adriana Nunes</h4>
            <p className="text-sm">Clínica Geral e Ortodontia</p>
            <p className="text-sm mt-1">CRO-PR</p>
          </div>

          <div className="text-center md:text-right text-sm space-y-2">
            <a 
              href={MAPS_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-end gap-2 hover:text-white transition-colors"
            >
              <MapPin size={16} />
              {ADDRESS}
            </a>
            <a 
              href={INSTAGRAM_LINK} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-end gap-2 hover:text-white transition-colors"
            >
              <Instagram size={16} />
              @dra.adriananunes
            </a>
          </div>
        </div>
        <div className="text-center mt-12 text-xs text-stone-600">
          © {new Date().getFullYear()} Dra. Adriana Nunes. Todos os direitos reservados.
        </div>
      </footer>

      {/* Sticky CTA Mobile */}
      <div className="md:hidden">
        <Button variant="fixed" text="Agendar Consulta Grátis" />
      </div>

      <Lightbox 
        isOpen={!!lightboxImage} 
        src={lightboxImage || ''} 
        onClose={() => setLightboxImage(null)} 
      />
    </div>
  );
}