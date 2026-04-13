import React, { useState, useEffect } from 'react';
import { Menu, X, IceCream, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Our Story', path: '/about' },
    { name: 'Locations', path: '/locations' },
    { name: 'Bulk Orders', path: '/contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-brand-pink p-2 rounded-full text-white transform group-hover:rotate-12 transition-transform">
              <IceCream size={24} />
            </div>
            <div>
              <h1 className="font-display text-2xl font-bold text-brand-dark leading-none">
                Vinu's <span className="text-brand-pink">Igloo</span>
              </h1>
              <p className="text-[10px] text-gray-500 font-bold tracking-widest uppercase">Since 1995</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold tracking-wide transition-colors ${
                  location.pathname === link.path 
                    ? 'text-brand-pink' 
                    : 'text-gray-600 hover:text-brand-pink'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href="tel:+919551699999"
              className="bg-brand-yellow text-brand-dark px-5 py-2 rounded-full font-bold text-sm shadow-md hover:bg-yellow-300 transition-colors flex items-center gap-2"
            >
              <Phone size={16} />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-brand-dark p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-xl transition-all duration-300 ease-in-out origin-top ${
        isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0 overflow-hidden'
      }`}>
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-lg font-medium ${
                location.pathname === link.path ? 'text-brand-pink' : 'text-gray-800'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <a 
            href="tel:+919551699999"
            className="bg-brand-pink text-white text-center py-3 rounded-xl font-bold mt-2"
          >
            Order Now
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
