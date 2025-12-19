import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import PortfolioSection from '../components/PortfolioSection';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <main className=\"min-h-screen bg-[#0a0a0a]\" data-testid=\"home-page\">
      <Navbar />
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default HomePage;
