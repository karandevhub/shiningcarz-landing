import { Button } from '@/components/ui/button';
import { Sparkles, Car, Shield } from 'lucide-react';
import heroImage from '@/assets/hero-car-wash.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Premium car washing service" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <Sparkles className="w-6 h-6 text-primary" />
            <span className="text-primary font-semibold tracking-wide uppercase text-sm">
              Premium Car Care
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6 leading-tight">
            Experience the
            <span className="block gold-gradient bg-clip-text text-transparent">
              Ultimate Shine
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 leading-relaxed max-w-2xl">
            Transform your vehicle with our premium car care services. 
            Professional detailing that brings out the best in every ride.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              className="luxury-button text-lg px-8 py-4"
              onClick={() => {
                // First scroll to products section
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                // Set active category to 'exterior'
                const productsSection = document.getElementById('products');
                if (productsSection) {
                  const exteriorButton = productsSection.querySelector('[data-category="exterior"]') as HTMLButtonElement;
                  if (exteriorButton) {
                    exteriorButton.click();
                  }
                }
              }}
            >
              <Car className="w-5 h-5 mr-2" />
              Book Service Now
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-accent text-foreground hover:bg-accent/10 text-lg px-8 py-4"
              onClick={() => {
                // First scroll to products section
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                // Set active category to 'tools'
                const productsSection = document.getElementById('products');
                if (productsSection) {
                  const toolsButton = productsSection.querySelector('[data-category="tools"]') as HTMLButtonElement;
                  if (toolsButton) {
                    toolsButton.click();
                  }
                }
              }}
            >
              <Shield className="w-5 h-5 mr-2" />
              Products
            </Button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="luxury-card p-6 shine-effect">
              <div className="text-primary text-2xl font-bold mb-2">500+</div>
              <div className="text-foreground/80">Happy Clients</div>
            </div>
            <div className="luxury-card p-6 shine-effect">
              <div className="text-primary text-2xl font-bold mb-2">12</div>
              <div className="text-foreground/80">Years Experience</div>
            </div>
            <div className="luxury-card p-6 shine-effect">
              <div className="text-primary text-2xl font-bold mb-2">100%</div>
              <div className="text-foreground/80">Eco-Friendly</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-20 h-20 rounded-full bg-primary/20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-10 w-32 h-32 rounded-full bg-accent/10 blur-2xl animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;