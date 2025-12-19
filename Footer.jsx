import { Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/jandermark', label: 'Instagram' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:contato@jandermark.com', label: 'Email' },
  ];

  const quickLinks = [
    { href: '#home', label: 'Início' },
    { href: '#portfolio', label: 'Portfólio' },
    { href: '#about', label: 'Sobre' },
    { href: '#services', label: 'Serviços' },
    { href: '#contact', label: 'Contato' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className=\"bg-[#0a0a0a] border-t border-white/5\" data-testid=\"footer\">
      <div className=\"max-w-[1400px] mx-auto px-6 md:px-12\">
        {/* Main Footer */}
        <div className=\"py-16 md:py-24 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8\">
          {/* Logo & Description */}
          <div className=\"md:col-span-1\">
            <img
              src=\"https://customer-assets.emergentagent.com/job_6d5d5dac-7542-4f5a-88c2-5f4f3da2bdef/artifacts/1kihj7ny_7a95f5c2-99a1-47d1-81de-999179a05b05.jpg\"
              alt=\"JANDER MARK Arquitetura\"
              className=\"h-16 w-auto mb-6\"
              data-testid=\"footer-logo\"
            />
            <p className=\"font-manrope text-sm text-white/50 max-w-xs text-left\">
              Transformando espaços em experiências através do design minimalista e da arquitetura contemporânea.
            </p>
          </div>

          {/* Quick Links */}
          <div className=\"md:col-span-1\">
            <h4 className=\"font-archivo text-xs tracking-[0.2em] uppercase text-white/40 mb-6\">
              Navegação
            </h4>
            <nav className=\"flex flex-col space-y-3\">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className=\"font-manrope text-sm text-white/60 hover:text-white transition-colors text-left\"
                  data-testid={`footer-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className=\"md:col-span-1\">
            <h4 className=\"font-archivo text-xs tracking-[0.2em] uppercase text-white/40 mb-6\">
              Redes Sociais
            </h4>
            <div className=\"flex gap-4\" data-testid=\"social-links\">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target=\"_blank\"
                  rel=\"noopener noreferrer\"
                  className=\"w-10 h-10 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all duration-300\"
                  aria-label={social.label}
                  data-testid={`social-${social.label.toLowerCase()}`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className=\"py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4\">
          <p className=\"font-manrope text-xs text-white/30\" data-testid=\"copyright\">
            © {currentYear} JANDER MARK Arquitetura. Todos os direitos reservados.
          </p>
          <p className=\"font-manrope text-xs text-white/30\">
            Design & Desenvolvimento por Emergent
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
