import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Us', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Technologies', to: '/technologies' },
    { name: 'Portfolio', to: '/portfolio' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 pt-4 transition-all duration-300 bg-transparent`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl border border-slate-200/60 px-6 py-3 transition-all duration-300 
            ${isScrolled ? 'bg-white shadow-lg' : 'bg-white shadow-md backdrop-blur-sm'}`}
        >
          
          <Link to="/" className="flex items-center">
            <img src="/navlogoo.png" alt="Touchebouche" className="h-12 md:h-14 w-auto object-contain" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative font-medium transition-colors ${
                    isActive ? 'text-primary-600' : 'text-slate-600 hover:text-primary-600'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && <span className="absolute -bottom-2 left-0 w-full h-[2px] bg-primary-600 rounded"></span>}
                  </>
                )}
              </NavLink>
            ))}
            <Link to="/contact">
              <Button size="sm">Contact Us</Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 hover:text-primary-600">
              {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`fixed top-30 right-4 w-2/4 bg-white shadow-lg border border-slate-200/60 rounded-xl z-50 transform transition-transform duration-300
          ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
        `}
      >
        <div className="flex flex-col p-6 space-y-3 relative">

          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsMobileMenuOpen(false)}
              className={({ isActive }) =>
                `text-base font-medium transition-colors ${
                  isActive ? 'text-primary-600' : 'text-slate-700 hover:text-primary-600'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
            <Button size="sm" className="w-full mt-2">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}