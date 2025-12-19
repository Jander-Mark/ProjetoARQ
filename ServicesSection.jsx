
import { Home, Building2, Palette, MapPin, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 'residential',
      icon: Home,
      title: 'Projetos Residenciais',
      description: 'Criamos lares que refletem a essência de seus moradores. Desde casas minimalistas até residências de luxo, cada projeto é único e personalizado.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200',
      features: ['Casas Unifamiliares', 'Apartamentos', 'Reformas Completas', 'Projetos Sustentáveis']
    },
    {
      id: 'commercial',
      icon: Building2,
      title: 'Espaços Comerciais',
      description: 'Desenvolvemos ambientes corporativos que inspiram produtividade e transmitem profissionalismo. Design funcional com identidade marcante.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200',
      features: ['Escritórios', 'Lojas & Varejo', 'Restaurantes', 'Hotéis & Hospedagem']
    },
    {
      id: 'interior',
      icon: Palette,
      title: 'Design de Interiores',
      description: 'Transformamos espaços internos em experiências sensoriais únicas. Cada detalhe é pensado para criar atmosferas que emocionam.',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200',
      features: ['Mobiliário Personalizado', 'Iluminação', 'Materiais & Acabamentos', 'Decoração']
    },
    {
      id: 'urban',
      icon: MapPin,
      title: 'Planejamento Urbano',
      description: 'Projetamos espaços públicos e privados que contribuem para o desenvolvimento sustentável das cidades.',
      image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200',
      features: ['Masterplans', 'Espaços Públicos', 'Condomínios', 'Áreas de Lazer']
    }
  ];

  const currentImage = hoveredService
    ? services.find(s => s.id === hoveredService)?.image
    : services[0].image;

  return (
    <section
      id=\"services\"
      className=\"py-24 md:py-32 bg-[#0a0a0a] relative overflow-hidden\"
      data-testid=\"services-section\"
    >
      {/* Background Image */}
      <div className=\"absolute inset-0 z-0\">
        <img
          src={currentImage}
          alt=\"Service background\"
          className=\"w-full h-full object-cover opacity-10 transition-opacity duration-700\"
        />
        <div className=\"absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/90 to-[#0a0a0a]/70\" />
      </div>

      <div className=\"max-w-[1400px] mx-auto px-6 md:px-12 relative z-10\">
        {/* Section Header */}
        <div className=\"mb-16 md:mb-24\">
          <span className=\"font-archivo text-xs tracking-[0.3em] uppercase text-white/40 mb-4 block\">
            O Que Fazemos
          </span>
          <h2 className=\"font-archivo font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight uppercase text-white\">
            Serviços
          </h2>
        </div>

        {/* Services List */}
        <div className=\"space-y-0\" data-testid=\"services-list\">
          {services.map((service, index) => (
            <div
              key={service.id}
              className=\"group border-t border-white/10 py-8 md:py-12 cursor-pointer transition-all duration-500 hover:bg-white/[0.02]\"
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              data-testid={`service-item-${service.id}`}
            >
              <div className=\"flex flex-col md:flex-row md:items-center gap-6 md:gap-12\">
                {/* Number & Icon */}
                <div className=\"flex items-center gap-4 md:w-32 flex-shrink-0\">
                  <span className=\"font-archivo text-sm text-white/30\">
                    0{index + 1}
                  </span>
                  <service.icon className=\"w-6 h-6 text-white/50 group-hover:text-white transition-colors duration-300\" />
                </div>

                {/* Title */}
                <h3 className=\"font-archivo font-bold text-xl md:text-3xl lg:text-4xl tracking-tight uppercase text-white group-hover:translate-x-2 transition-transform duration-300 md:w-96 flex-shrink-0\">
                  {service.title}
                </h3>

                {/* Description (visible on hover or always on mobile) */}
                <div className=\"flex-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500\">
                  <p className=\"font-manrope text-sm md:text-base text-white/60 mb-4\">
                    {service.description}
                  </p>
                  <div className=\"flex flex-wrap gap-2\">
                    {service.features.map((feature, i) => (
                      <span
                        key={i}
                        className=\"font-archivo text-xs tracking-wider uppercase text-white/40 border border-white/10 px-3 py-1\"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <ArrowRight className=\"w-6 h-6 text-white/30 group-hover:text-white group-hover:translate-x-2 transition-all duration-300 hidden md:block\" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className=\"mt-16 text-center md:text-left\">
          <a
            href=\"#contact\"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className=\"inline-flex items-center gap-3 h-12 px-8 text-sm uppercase tracking-widest font-bold transition-all duration-300 hover:bg-white hover:text-black border border-white/20 bg-transparent text-white font-archivo\"
            data-testid=\"services-cta\"
          >
            Solicitar Orçamento
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
