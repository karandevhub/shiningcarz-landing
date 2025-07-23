import { Car, Wrench, Heart, Leaf } from 'lucide-react';
// Using placeholder image since generation failed
const aboutImage = '/assets/tjsexr0betyk3ttnlife.webp';

const AboutSection = () => {
  const achievements = [
    {
      icon: Car,
      title: 'Experience',
      value: '13 Years',
      description: 'Decade of automotive care expertise and innovation'
    },
    {
      icon: Wrench,
      title: 'Service Centres',
      value: '23 Locations',
      description: 'Conveniently located across major cities'
    },
    {
      icon: Heart,
      title: 'Happy Customers',
      value: '500+',
      description: 'Satisfied customers who trust our premium services'
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly Technology',
      value: '100% Green',
      description: 'Environmentally conscious products and processes'
    }
  ];

  return (
    <section id="about" className="py-20 luxury-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold font-playfair mb-6 text-foreground">
            About
            <span className="block gold-gradient bg-clip-text text-transparent">
              Shining Carz
            </span>
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            We are passionate about delivering exceptional automotive care services that exceed expectations. 
            Our commitment to quality, innovation, and customer satisfaction drives everything we do.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Left side - Achievements */}
          <div className="lg:w-1/2 space-y-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="luxury-card p-6 shine-effect"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full gold-gradient">
                    <achievement.icon className="w-6 h-6 text-background" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <achievement.icon className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-semibold">{achievement.title}</h3>
                    </div>
                    <div className="text-2xl font-bold text-primary mb-2">
                      {achievement.value}
                    </div>
                    <p className="text-foreground/70">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - Image */}
          <div className="lg:w-1/2">
            <div className="relative">
              <img
                src={aboutImage}
                alt="Professional team servicing cars"
                className="w-full h-[600px] object-cover rounded-lg shadow-luxury"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg"></div>
              
              {/* Floating stats */}
              <div className="absolute top-6 left-6 luxury-card p-4">
                <div className="text-2xl font-bold text-primary">98%</div>
                <div className="text-sm text-foreground/70">Customer Satisfaction</div>
              </div>
              
              <div className="absolute bottom-6 right-6 luxury-card p-4">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-foreground/70">Premium Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Values */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold font-playfair mb-8">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="luxury-card p-6">
              <h4 className="text-xl font-semibold mb-3">Excellence</h4>
              <p className="text-foreground/70">
                We strive for perfection in every service, ensuring your vehicle receives the highest quality care.
              </p>
            </div>
            <div className="luxury-card p-6">
              <h4 className="text-xl font-semibold mb-3">Innovation</h4>
              <p className="text-foreground/70">
                Constantly evolving our techniques and technology to provide cutting-edge automotive solutions.
              </p>
            </div>
            <div className="luxury-card p-6">
              <h4 className="text-xl font-semibold mb-3">Sustainability</h4>
              <p className="text-foreground/70">
                Committed to eco-friendly practices that protect both your vehicle and our environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;