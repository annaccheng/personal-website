import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import LightDark from './LightDark';
import logo from '../assets/Logo.png';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    const isActive = (path) => location.pathname === path;

    return (
        <header className="header">
            <Link to="/" className="header-logo" onClick={closeMobileMenu}>
                <img src={logo} alt="Anna Cheng" className="header-logo-img" />
            </Link>
            
            <button 
                className="mobile-menu-toggle"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
                aria-expanded={isMobileMenuOpen}
            >
                <span className={`hamburger ${isMobileMenuOpen ? 'hamburger--open' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </button>

            <nav className={`header-nav ${isMobileMenuOpen ? 'header-nav--open' : ''}`}>
                <div className="nav-pill">
                    <Link 
                        to="/about" 
                        className={isActive('/about') ? 'active' : ''}
                        onClick={closeMobileMenu}
                    >
                        About
                    </Link>
                    <Link 
                        to="/projects" 
                        className={isActive('/projects') ? 'active' : ''}
                        onClick={closeMobileMenu}
                    >
                        Projects
                    </Link>
                    <Link 
                        to="/art" 
                        className={isActive('/art') ? 'active' : ''}
                        onClick={closeMobileMenu}
                    >
                        Art
                    </Link>
                    <a 
                        href="mailto:annacheng@berkeley.edu"
                        onClick={closeMobileMenu}
                    >
                        Contact
                    </a>
                    <LightDark />
                </div>
            </nav>
        </header>
    );
}
