import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        {/* Logo */}
        <Link to="/" className="nav-logo">
          <span className="logo-text">ZavqFlix</span>
        </Link>
        
        {/* Desktop Navigation */}
        <ul className="nav-menu desktop-menu">
          <li className="nav-item">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Bosh sahifa
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/movies" 
              className={`nav-link ${location.pathname === '/movies' ? 'active' : ''}`}
            >
              Kinolar
            </Link>
          </li>

        </ul>

        {/* Right Side Actions */}
        <div className="nav-actions">




          {/* Mobile Menu Toggle */}
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          <li>
            <Link 
              to="/" 
              className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Bosh sahifa
            </Link>
          </li>
          <li>
            <Link 
              to="/movies" 
              className={`mobile-nav-link ${location.pathname === '/movies' ? 'active' : ''}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kinolar
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
