import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
  const quickLinks = [
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
    //{ name: 'Services', href: '#services' },
    //{ name: 'Locations', href: '#locations' },
    //{ name: 'Careers', href: '#careers' }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/shiningcarz', name: 'Facebook' },
    { icon: Twitter, href: 'https://twitter.com/shiningcarz', name: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/shiningcarz', name: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/shining-carz/', name: 'LinkedIn' }
  ];

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setShowThankYou(true);
      setNewsletterEmail("");
      setTimeout(() => setShowThankYou(false), 2000);
    }
  };
  return (
    <footer className="bg-luxury-dark text-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold font-playfair gold-gradient bg-clip-text text-transparent mb-6">
              Shining Carz
            </h3>
            <p className="text-foreground/80 mb-6 leading-relaxed max-w-md">
              Premium automotive care services that transform your vehicle with professional detailing, 
              eco-friendly products, and unmatched quality. Experience the ultimate shine with Shining Carz.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-foreground/80">D-14, 1st Floor, Sector 10, Noida - 201301</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-foreground/80">+91 70043 03889</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-foreground/80">info@shiningcarz.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold font-playfair mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h4 className="text-xl font-bold font-playfair mb-6">Stay Connected</h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-3 rounded-lg bg-accent/10 hover:bg-primary/20 text-foreground/80 hover:text-primary transition-all duration-300 hover:scale-110"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <div className="luxury-card p-4">
              <h5 className="font-semibold mb-2">Newsletter</h5>
              <p className="text-sm text-foreground/70 mb-3">
                Get updates on new services and exclusive offers.
              </p>
              <form className="flex gap-2" onSubmit={handleNewsletterSubmit}>
                <input
                  type="email"
                  placeholder="Your email"
                  value={newsletterEmail}
                  onChange={e => setNewsletterEmail(e.target.value)}
                  className="flex-0 px-1 py-1 bg-background/50 border border-accent/30 rounded text-sm focus:outline-none focus:border-primary"
                  required
                />
                <button type="submit" className="px-1 py-1 gold-gradient rounded text-background font-semibold text-sm hover:scale-105 transition-transform">
                  Subscribe
                </button>
              </form>
              {showThankYou && (
                <div className="mt-3 p-2 rounded bg-primary/10 text-primary text-center font-semibold shadow-lg animate-fade-in">
                  Thank you for subscribing!
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-accent/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-foreground/70 text-sm">
              © {new Date().getFullYear()} Shining Carz. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a
                href="/terms-and-conditions"
                className="text-foreground/70 hover:text-primary transition-colors duration-300"
              >
                Terms and Conditions
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;