
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id=\"home\"
      className=\"relative h-screen flex items-center justify-center overflow-hidden\"
      data-testid=\"hero-section\"
    >
      {/* Background Image */}
      <div className=\"absolute inset-0 z-0\">
        <img
          src=\"https://images.unsplash.com/photo-1758846946209-52fd824f8a67?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJlJTIwZGFyayUyMGV4dGVyaW9yJTIwY29uY3JldGV8ZW58MHx8fHwxNzY2MTQ2Mjk1fDA&ixlib=rb-4.1.0&q=85\"
          alt=\"Modern Architecture\"
          className=\"w-full h-full object-cover\"
        />
        {/* Gradient Overlay */}
        <div className=\"absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#0a0a0a]\" />
      </div>

      {/* Content */}
      <div className=\"relative z-10 text-center px-6 max-w-[1400px] mx-auto\">
        {/* Logo */}
        <div className=\"mb-8 animate-fade-in opacity-0\" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
          <img
            src=\"https://customer-assets.emergentagent.com/job_6d5d5dac-7542-4f5a-88c2-5f4f3da2bdef/artifacts/1kihj7ny_7a95f5c2-99a1-47d1-81de-999179a05b05.jpg\"
            alt=\"JANDER MARK Arquitetura\"
            className=\"h-24 md:h-32 w-auto mx-auto\"
            data-testid=\"hero-logo\"
          />
        </div>

        {/* Main Slogan */}
        <h1
          className=\"font-archivo font-bold text-4xl sm:text-5xl lg:text-7xl xl:text-8xl tracking-tight uppercase text-white mb-6 animate-fade-in-up opacity-0\"
          style={{ animationDelay: '400ms', animationFillMode: 'forwards' }}
          data-testid=\"hero-title\"
        >
          DESIGNING THE VOID.
        </h1>

        {/* Sub Slogan */}
        <p
          className=\"font-manrope text-base md:text-lg text-white/60 max-w-xl mx-auto mb-12 animate-fade-in-up opacity-0\"
          style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}
          data-testid=\"hero-subtitle\"
        >
          Arquitetura minimalista para a era moderna.
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToPortfolio}
          className=\"h-12 px-8 text-sm uppercase tracking-widest font-bold transition-all duration-300 hover:bg-white hover:text-black border border-white/30 bg-transparent text-white font-archivo animate-fade-in-up opacity-0 btn-animate\"
          style={{ animationDelay: '800ms', animationFillMode: 'forwards' }}
          data-testid=\"hero-cta\"
        >
          Ver Projetos
        </button>
      </div>

      {/* Scroll Indicator */}
      <div
        className=\"absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer\"
        onClick={scrollToPortfolio}
        data-testid=\"scroll-indicator\"
      >
        <ChevronDown className=\"text-white/50\" size={32} />
      </div>
    </section>
  );
};

export default HeroSection;

