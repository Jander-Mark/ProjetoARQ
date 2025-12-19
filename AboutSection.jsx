
import { Award, Clock, Users } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Clock, value: '15+', label: 'Anos de Experiência' },
    { icon: Award, value: '200+', label: 'Projetos Realizados' },
    { icon: Users, value: '150+', label: 'Clientes Satisfeitos' },
  ];

  return (
    <section
      id=\"about\"
      className=\"py-24 md:py-32 bg-[#0a0a0a]\"
      data-testid=\"about-section\"
    >
      <div className=\"max-w-[1400px] mx-auto px-6 md:px-12\">
        <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center\">
          {/* Image Column */}
          <div className=\"relative\" data-testid=\"about-image-container\">
            <div className=\"relative overflow-hidden border border-white/10\">
              <img
                src=\"https://images.unsplash.com/photo-1565011447367-85026d8b3880?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3QlMjB3b3JraW5nJTIwb24lMjBibHVlcHJpbnRzJTIwY2xvc2UlMjB1cHxlbnwwfHx8fDE3NjYxNDYyOTl8MA&ixlib=rb-4.1.0&q=85\"
                alt=\"Arquiteto trabalhando\"
                className=\"w-full h-[500px] object-cover\"
              />
            </div>
            {/* Decorative Element */}
            <div className=\"absolute -bottom-6 -right-6 w-48 h-48 border border-white/10 hidden lg:block\" />
          </div>

          {/* Content Column */}
          <div>
            <span className=\"font-archivo text-xs tracking-[0.3em] uppercase text-white/40 mb-4 block\">
              Quem Somos
            </span>
            <h2 className=\"font-archivo font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight uppercase text-white mb-8\">
              Sobre Nós
            </h2>

            <div className=\"space-y-6 text-left\">
              <p className=\"font-manrope text-base md:text-lg text-white/70 leading-relaxed\" data-testid=\"about-text-1\">
                A <strong className=\"text-white\">JANDER MARK Arquitetura</strong> nasceu da paixão por criar espaços que transcendem o convencional. Nossa filosofia é simples: menos é mais. Acreditamos que a verdadeira beleza reside na simplicidade, nas linhas puras e na harmonia entre forma e função.
              </p>

              <p className=\"font-manrope text-base md:text-lg text-white/70 leading-relaxed\" data-testid=\"about-text-2\">
                Cada projeto é uma tela em branco onde desenhamos sonhos. Com mais de uma década de experiência, desenvolvemos uma linguagem arquitetônica própria que combina minimalismo contemporâneo com funcionalidade excepcional.
              </p>

              <p className=\"font-manrope text-base md:text-lg text-white/70 leading-relaxed\" data-testid=\"about-text-3\">
                Nosso compromisso vai além da estética. Buscamos criar ambientes que inspirem, que tragam paz e que se integrem perfeitamente ao estilo de vida de cada cliente. Arquitetura, para nós, é a arte de projetar o vazio — o espaço entre as paredes que dá vida à construção.
              </p>
            </div>

            {/* Stats */}
            <div
              className=\"grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/10\"
              data-testid=\"about-stats\"
            >
              {stats.map((stat, index) => (
                <div key={index} className=\"text-center lg:text-left\">
                  <stat.icon className=\"w-6 h-6 text-white/40 mb-3 mx-auto lg:mx-0\" />
                  <div className=\"font-archivo font-bold text-2xl md:text-3xl text-white mb-1\">
                    {stat.value}
                  </div>
                  <div className=\"font-manrope text-xs md:text-sm text-white/50\">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
