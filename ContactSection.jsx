
import { Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await axios.post(`${API}/contact`, formData);
      toast.success('Mensagem enviada com sucesso! Entraremos em contato em breve.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const phone = '5599999999999';
    const message = encodeURIComponent(`Olá! Gostaria de saber mais sobre os serviços da JANDER MARK Arquitetura.`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Telefone',
      value: '(99) 9 9999-9999',
      href: 'tel:+5599999999999'
    },
    {
      icon: Mail,
      label: 'E-mail',
      value: 'contato@jandermark.com',
      href: 'mailto:contato@jandermark.com'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Brasil',
      href: null
    }
  ];

  return (
    <section
      id=\"contact\"
      className=\"py-24 md:py-32 bg-[#0a0a0a]\"
      data-testid=\"contact-section\"
    >
      <div className=\"max-w-[1400px] mx-auto px-6 md:px-12\">
        <div className=\"grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24\">
          {/* Left Column - Info */}
          <div>
            <span className=\"font-archivo text-xs tracking-[0.3em] uppercase text-white/40 mb-4 block\">
              Vamos Conversar
            </span>
            <h2 className=\"font-archivo font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight uppercase text-white mb-8\">
              Contato
            </h2>

            <p className=\"font-manrope text-base md:text-lg text-white/60 mb-12 max-w-md text-left\">
              Tem um projeto em mente? Entre em contato conosco. Estamos prontos para transformar suas ideias em realidade.
            </p>

            {/* Contact Info */}
            <div className=\"space-y-8 mb-12\" data-testid=\"contact-info\">
              {contactInfo.map((item, index) => (
                <div key={index} className=\"flex items-start gap-4\">
                  <div className=\"w-12 h-12 border border-white/10 flex items-center justify-center flex-shrink-0\">
                    <item.icon className=\"w-5 h-5 text-white/50\" />
                  </div>
                  <div>
                    <span className=\"font-archivo text-xs tracking-[0.2em] uppercase text-white/40 block mb-1\">
                      {item.label}
                    </span>
                    {item.href ? (
                      <a
                        href={item.href}
                        className=\"font-manrope text-lg text-white hover:text-white/80 transition-colors\"
                        data-testid={`contact-${item.label.toLowerCase()}`}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className=\"font-manrope text-lg text-white\">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp Button */}
            <button
              onClick={handleWhatsApp}
              className=\"whatsapp-btn flex items-center justify-center gap-3 w-full md:w-auto h-14 px-8 text-sm uppercase tracking-widest font-bold text-white font-archivo\"
              data-testid=\"whatsapp-button\"
            >
              <MessageCircle size={20} />
              Falar pelo WhatsApp
            </button>
          </div>

          {/* Right Column - Form */}
          <div className=\"bg-[#121212] border border-white/5 p-8 md:p-12\">
            <h3 className=\"font-archivo font-bold text-xl uppercase tracking-wider text-white mb-8\">
              Envie sua mensagem
            </h3>

            <form onSubmit={handleSubmit} className=\"space-y-8\" data-testid=\"contact-form\">
              {/* Name Input */}
              <div>
                <label
                  htmlFor=\"name\"
                  className=\"font-archivo text-xs tracking-[0.2em] uppercase text-white/40 block mb-3\"
                >
                  Nome
                </label>
                <input
                  type=\"text\"
                  id=\"name\"
                  name=\"name\"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder=\"Seu nome completo\"
                  className=\"w-full bg-transparent border-b border-white/20 focus:border-white px-0 py-4 text-white placeholder:text-white/30 focus:outline-none transition-colors\"
                  data-testid=\"contact-input-name\"
                />
              </div>

              {/* Email Input */}
              <div>
                <label
                  htmlFor=\"email\"
                  className=\"font-archivo text-xs tracking-[0.2em] uppercase text-white/40 block mb-3\"
                >
                  E-mail
                </label>
                <input
                  type=\"email\"
                  id=\"email\"
                  name=\"email\"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder=\"seu@email.com\"
                  className=\"w-full bg-transparent border-b border-white/20 focus:border-white px-0 py-4 text-white placeholder:text-white/30 focus:outline-none transition-colors\"
                  data-testid=\"contact-input-email\"
                />
              </div>

              {/* Phone Input */}
              <div>
                <label
                  htmlFor=\"phone\"
                  className=\"font-archivo text-xs tracking-[0.2em] uppercase text-white/40 block mb-3\"
                >
                  Telefone
                </label>
                <input
                  type=\"tel\"
                  id=\"phone\"
                  name=\"phone\"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder=\"(00) 0 0000-0000\"
                  className=\"w-full bg-transparent border-b border-white/20 focus:border-white px-0 py-4 text-white placeholder:text-white/30 focus:outline-none transition-colors\"
                  data-testid=\"contact-input-phone\"
                />
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor=\"message\"
                  className=\"font-archivo text-xs tracking-[0.2em] uppercase text-white/40 block mb-3\"
                >
                  Mensagem
                </label>
                <textarea
                  id=\"message\"
                  name=\"message\"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder=\"Conte-nos sobre seu projeto...\"
                  className=\"w-full bg-transparent border-b border-white/20 focus:border-white px-0 py-4 text-white placeholder:text-white/30 focus:outline-none transition-colors resize-none\"
                  data-testid=\"contact-input-message\"
                />
              </div>

              {/* Submit Button */}
              <button
                type=\"submit\"
                disabled={isSubmitting}
                className=\"w-full h-14 px-8 text-sm uppercase tracking-widest font-bold transition-all duration-300 hover:bg-white hover:text-black border border-white/20 bg-transparent text-white font-archivo flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed\"
                data-testid=\"contact-submit-button\"
              >
                {isSubmitting ? (
                  'Enviando...'
                ) : (
                  <>
                    Enviar Mensagem
                    <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
