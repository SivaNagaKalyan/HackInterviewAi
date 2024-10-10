import Hero from '../components/Hero';
import Features from '../components/Features';
import Benefits from '../components/Benefits';
import RemotePlatforms from '../components/RemotePlatforms';
import UserTestimonials from '../components/UserTestimonials';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import CompanyLogoCarousel from '../components/CompanyLogoCarousel';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <Features />
      <Benefits />
      <RemotePlatforms />
      <CompanyLogoCarousel />
      <UserTestimonials />
      <FAQ />
      <CTA />
    </div>
  );
}