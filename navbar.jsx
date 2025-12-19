import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
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
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      data-testid=\"navbar\"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className=\"max-w-[1400px] mx-auto px-6 md:px-12\">
        <div className=\"flex items-center justify-between h-20\">
          {/* Logo */}
          <a
            href=\"#home\"
            onClick={(e) => scrollToSection(e, '#home')}
            className=\"flex items-center\"
            data-testid=\"navbar-logo\"
          >
            <img
              src=\"https://customer-assets.emergentagent.com/job_6d5d5dac-7542-4f5a-88c2-5f4f3da2bdef/artifacts/1kihj7ny_7a95f5c2-99a1-47d1-81de-999179a05b05.jpg\"
              alt=\"JANDER MARK Arquitetura\"
              className=\"h-12 w-auto\"
            />
          </a>

          {/* Desktop Navigation */}
          <div className=\"hidden md:flex items-center gap-8\">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className=\"font-archivo text-xs tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors duration-300 hover-underline-expand\"
                data-testid={`nav-link-${link.label.toLowerCase()}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className=\"md:hidden text-white p-2\"
            data-testid=\"mobile-menu-button\"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            className=\"md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/5\"
            data-testid=\"mobile-menu\"
          >
            <div className=\"flex flex-col py-6\">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className=\"font-archivo text-sm tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors duration-300 px-6 py-4\"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
