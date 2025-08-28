
import React, { useState } from 'react';
import { PhoneIcon, MailIcon, MapPinIcon, FacebookIcon, InstagramIcon, SearchIcon, MenuIcon } from './icons';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'INICIO', href: '#' },
    { name: 'PRODUCTOS', href: '#' },
    { name: 'QUIENES SOMOS', href: '#' },
    { name: 'CONTACTO', href: '#' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-gray-100 text-gray-600 text-sm">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="hidden md:flex items-center space-x-4">
            <a href="tel:+541144445555" className="flex items-center space-x-1 hover:text-yellow-500">
              <PhoneIcon />
              <span>(011) 4918-6704</span>
            </a>
            <a href="mailto:info@herrajesveiga.com.ar" className="flex items-center space-x-1 hover:text-yellow-500">
              <MailIcon />
              <span>info@herrajesveiga.com.ar</span>
            </a>
            <div className="flex items-center space-x-1">
              <MapPinIcon />
              <span>Av. Sáenz 1143, CABA</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 ml-auto">
            <a href="#" aria-label="Facebook" className="hover:text-yellow-500"><FacebookIcon /></a>
            <a href="#" aria-label="Instagram" className="hover:text-yellow-500"><InstagramIcon /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-3xl font-black text-gray-800 tracking-wider">
          VEIGA
        </a>

        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-600 font-semibold hover:text-yellow-500 transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <div className="relative hidden sm:block">
            <input 
              type="text" 
              placeholder="Buscar productos..." 
              className="border border-gray-300 rounded-full py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
              <SearchIcon />
            </button>
          </div>
          <button className="lg:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Open menu">
            <MenuIcon />
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white pb-4">
            <nav className="flex flex-col items-center space-y-4">
                {navLinks.map((link) => (
                    <a key={link.name} href={link.href} className="text-gray-600 font-semibold hover:text-yellow-500 transition-colors">
                    {link.name}
                    </a>
                ))}
                <div className="relative sm:hidden w-4/5">
                    <input 
                    type="text" 
                    placeholder="Buscar productos..." 
                    className="border border-gray-300 rounded-full py-2 pl-4 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />
                    <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <SearchIcon />
                    </button>
                </div>
            </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
