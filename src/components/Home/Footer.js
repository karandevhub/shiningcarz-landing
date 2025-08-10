'use client'
import siteMetadata from '@/src/utils/siteMetaData';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaXTwitter,
  FaMapLocation,
  FaPhone,
} from "react-icons/fa6";

const Footer = () => {
  const quickLinks = [
    { name: 'Products', href: '#products' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setShowThankYou(true);
      setNewsletterEmail("");
      setTimeout(() => setShowThankYou(false), 2000);
    }
  };
  return (
    <footer className="bg-background dark:bg-luxury-dark border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold font-playfair gold-gradient bg-clip-text text-transparent mb-6">
              Shining Carz
            </h3>
            <p className="text-foreground/80 dark:text-foreground/80 mb-6 leading-relaxed max-w-md">
              Premium automotive care services that transform your vehicle with professional detailing,
              eco-friendly products, and unmatched quality. Experience the ultimate shine with Shining Carz.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaMapLocation className="w-5 h-5 text-primary dark:text-primary" />
                <span className="text-foreground/80 dark:text-foreground/80">D-14, 1st Floor, Sector 10, Noida - 201301</span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="w-5 h-5 text-primary dark:text-primary" />
                <span className="text-foreground/80 dark:text-foreground/80">+91 70043 03889</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary dark:text-primary" />
                <span className="text-foreground/80 dark:text-foreground/80">info@shiningcarz.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold font-playfair mb-6 text-foreground dark:text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-foreground/80 dark:text-foreground/80 hover:text-primary dark:hover:text-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h4 className="text-xl font-bold font-playfair mb-6 text-foreground dark:text-foreground">Stay Connected</h4>
            <div className="flex gap-4 mb-6">
              <div className=" hidden sm:flex items-center gap-2">
                <Link
                  href={siteMetadata.facebook}
                  className="bg-white/10 p-2 rounded-full hover:bg-[#a81313] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <FaFacebookF className="w-4 h-4" />
                </Link>
                <Link
                  href={siteMetadata.instagram}
                  className="bg-white/10 p-2 rounded-full hover:bg-[#a81313] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <FaInstagram className="w-4 h-4" />
                </Link>
                <Link
                  href={siteMetadata.youtube}
                  className="bg-white/10 p-2 rounded-full hover:bg-[#a81313] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <FaYoutube className="w-4 h-4" />
                </Link>
                <Link
                  href={siteMetadata.linkedin}
                  className="bg-white/10 p-2 rounded-full hover:bg-[#a81313] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedinIn className="w-4 h-4" />
                </Link>
                <Link
                  href={siteMetadata.twitter}
                  className="bg-white/10 p-2 rounded-full hover:bg-[#a81313] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <FaXTwitter className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-accent/20 dark:border-accent/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-foreground/70 dark:text-foreground/70 text-sm">
              © {new Date().getFullYear()} Shining Carz. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-foreground/70 dark:text-foreground/70 hover:text-primary dark:hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="text-foreground/70 dark:text-foreground/70 hover:text-primary dark:hover:text-primary transition-colors duration-300"
              >
                Terms and Conditions
              </a>
              <a href="#" className="text-foreground/70 dark:text-foreground/70 hover:text-primary dark:hover:text-primary transition-colors duration-300">
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