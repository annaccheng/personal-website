import { Link } from 'react-router-dom';
import { useState } from 'react';
import LightDark from './LightDark';
import logo from '../assets/Logo.svg';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => setIsMobileMenuOpen(prev => !prev);
    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <header className="header">
            <div className="header-section header-section--logo">
                <Link to="/" className="header-pill header-pill--logo" onClick={closeMobileMenu}>
                    <img src={logo} alt="Logo" className="logo" />
                    <h1 className="header-text header-text--desktop">Anna</h1>
                </Link>
            </div>
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
            {/* Desktop navigation - always visible on desktop */}
            <div className="header-section header-section--nav header-section--desktop">
                <nav className="header-pill header-pill--nav">
                    <ul>
                        <li><Link to="/about" className="header-text">About</Link></li>
                        <li><Link to="/projects" className="header-text">Projects</Link></li>
                        <li>
                            <a href="mailto:annacheng@berkeley.edu" className="header-text">
                                Contact Me
                            </a>
                        </li>
                        <li><LightDark /></li>
                    </ul>
                </nav>
            </div>
            {/* Mobile navigation - only exists when menu is open */}
            {isMobileMenuOpen && (
                <div className="header-section header-section--nav header-section--nav-open">
                    <nav className="header-pill header-pill--nav">
                        <ul>
                            <li><Link to="/about" className="header-text" onClick={closeMobileMenu}>About</Link></li>
                            <li><Link to="/projects" className="header-text" onClick={closeMobileMenu}>Projects</Link></li>
                            <li>
                                <a href="mailto:annacheng@berkeley.edu" className="header-text" onClick={closeMobileMenu}>
                                    Contact Me
                                </a>
                            </li>
                            <li><LightDark /></li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    )
}