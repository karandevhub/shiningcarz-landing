'use client'
import siteMetadata from '@/src/utils/siteMetaData';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
  FaMapLocation,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa6";

const Footer = () => {
  const quickLinks = [
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: "Terms of Service", href: '/terms-of-service' }
  ];

  const handleWhatsAppClick = () => {
    const message = "Hi, I'm interested in your car detailing services. Can you provide more information?";
    const whatsappUrl = `https://wa.me/919211074136?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="luxury-gradient border-t relative">
      <button
        onClick={handleWhatsAppClick}
        className="group fixed bottom-8 right-6 w-14 h-14 bg-[#25D366]  rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
        aria-label="Contact us on WhatsApp"
      >
        <FaWhatsapp className="w-6 h-6 group-hover:scale-110 transition-transform" />
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat with us
          <div className="absolute top-full right-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
        </div>
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
      </button>
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-4xl font-bold font-playfair gold-gradient bg-clip-text text-transparent mb-8">
              Shining Carz
            </h3>
            <p className="text-foreground/90 text-lg mb-8 leading-relaxed max-w-md">
              Premium automotive care services that transform your vehicle with professional detailing,
              eco-friendly products, and unmatched quality. Experience the ultimate shine with Shining Carz.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="bg-white/10 p-3 rounded-full">
                  <FaMapLocation className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground/90">D-14, 1st Floor, Sector 10, Noida - 201301</span>
              </div>
              <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="bg-white/10 p-3 rounded-full">
                  <FaPhone className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground/90">+91 92110 74136</span>
              </div>
              <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                <div className="bg-white/10 p-3 rounded-full">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground/90">info@shiningcarz.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h4 className="text-2xl font-bold font-playfair mb-8 text-foreground">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-foreground/90 hover:text-primary group flex items-center gap-2 transition-all duration-300"
                  >
                    <span className="h-px w-4 bg-primary transform origin-left group-hover:w-6 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-2xl font-bold font-playfair mb-8 text-foreground">Connect With Us</h4>
            <div className="grid grid-cols-3 gap-4">
              <Link
                href={siteMetadata.facebook}
                className="bg-white/10 aspect-square flex items-center justify-center rounded-lg hover:bg-[#a81313] hover:text-white transition-all duration-300 hover:scale-105 group"
              >
                <FaFacebookF className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href={siteMetadata.instagram}
                className="bg-white/10 aspect-square flex items-center justify-center rounded-lg hover:bg-[#a81313] hover:text-white transition-all duration-300 hover:scale-105 group"
              >
                <FaInstagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href={siteMetadata.youtube}
                className="bg-white/10 aspect-square flex items-center justify-center rounded-lg hover:bg-[#a81313] hover:text-white transition-all duration-300 hover:scale-105 group"
              >
                <FaYoutube className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href={siteMetadata.linkedin}
                className="bg-white/10 aspect-square flex items-center justify-center rounded-lg hover:bg-[#a81313] hover:text-white transition-all duration-300 hover:scale-105 group"
              >
                <FaLinkedinIn className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                href={siteMetadata.twitter}
                className="bg-white/10 aspect-square flex items-center justify-center rounded-lg hover:bg-[#a81313] hover:text-white transition-all duration-300 hover:scale-105 group"
              >
                <FaXTwitter className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </Link>
              <button
                onClick={handleWhatsAppClick}
                className="bg-white/10 aspect-square flex items-center justify-center rounded-lg hover:bg-[#25D366] hover:text-white transition-all duration-300 hover:scale-105 group"
              >
                <FaWhatsapp className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-foreground/70 text-sm order-2 md:order-1">
              © {new Date().getFullYear()} Shining Carz. All rights reserved.
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm order-1 md:order-2">
              <a
                href="#"
                className="text-foreground/70 hover:text-primary relative group transition-colors duration-300"
              >
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-foreground/70 hover:text-primary relative group transition-colors duration-300"
              >
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
                Terms and Conditions
              </a>
              <a
                href="#"
                className="text-foreground/70 hover:text-primary relative group transition-colors duration-300"
              >
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full"></span>
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