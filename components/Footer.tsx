import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="font-display text-3xl font-bold text-brand-yellow">Vinu's Igloo</h2>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Serving Chennai's favorite affordable treats since 1995. The home of the legendary softy cone in West Mambalam.
            </p>
            <div className="flex gap-4 pt-2">
              <a href={SOCIAL_LINKS.instagram} className="bg-white/10 p-2 rounded-full hover:bg-brand-pink transition-colors">
                <Instagram size={20} />
              </a>
              <a href={SOCIAL_LINKS.whatsapp} className="bg-white/10 p-2 rounded-full hover:bg-green-500 transition-colors">
                <Phone size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/menu" className="text-gray-400 hover:text-brand-yellow transition-colors">Our Menu</Link></li>
              <li><Link to="/locations" className="text-gray-400 hover:text-brand-yellow transition-colors">Find a Store</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-brand-yellow transition-colors">Our History</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-brand-yellow transition-colors">Catering Services</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 border-b border-gray-700 pb-2 inline-block">Visit Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="text-brand-pink shrink-0 mt-1" size={18} />
                <span className="text-sm">35, Thambiah Rd, AGS Colony, West Mambalam, Chennai – 600033</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="text-brand-pink shrink-0" size={18} />
                <span className="text-sm">+91 95516 99999</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="text-brand-pink shrink-0" size={18} />
                <span className="text-sm">hello@vinusigloo.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Vinu's Igloo. All rights reserved. 
            <span className="hidden md:inline"> | </span> 
            <br className="md:hidden"/>
            Designed with <span className="text-brand-pink">♥</span> in Chennai.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
