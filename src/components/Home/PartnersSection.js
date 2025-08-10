import { Sparkles } from 'lucide-react';

const PartnersSection = () => {
  const partners = [
    { name: 'Kuber', logo: '/images/KBF.png' },
    { name: 'DC Studio', logo: '/images/DC F.png' },
    { name: 'MN Cars', logo: '/images/MN F.png' },
    { name: 'Bright Car Wash', logo: '/images/BCW F.png' },
    { name: 'RS Detailing', logo: '/images/RS F.png' },
    { name: 'Volvo', logo: '/images/volvo-removebg-preview (1).avif' },
    { name: 'Detailing Devils', logo: '/images/DD F.png' },
    { name: 'Classique', logo: '/images/classic.avif' },
  ];

  return (
    <section id="partners" className="py-20 bg-muted/10 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Trusted By The Best
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-playfair mb-6">
            Our Trusted
            <span className="block gold-gradient bg-clip-text text-transparent">
              Clients
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            We collaborate with the world's leading automotive brands to deliver exceptional service and quality.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="luxury-card p-6 shine-effect group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className="w-full h-20 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <h3 className="text-center mt-4 font-semibold text-foreground/80 group-hover:text-primary transition-colors duration-300">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="luxury-card p-6">
            <div className="text-3xl font-bold text-primary mb-2">13</div>
            <div className="text-foreground/70">Years of Clients</div>
          </div>
          <div className="luxury-card p-6">
            <div className="text-3xl font-bold text-primary mb-2">15K+</div>
            <div className="text-foreground/70">Vehicles Serviced</div>
          </div>
          <div className="luxury-card p-6">
            <div className="text-3xl font-bold text-primary mb-2">99.8%</div>
            <div className="text-foreground/70">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;