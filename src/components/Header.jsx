import { Link } from 'react-router-dom';
import { useState } from 'react';
import LightDark from './LightDark';
import logo from '../assets/Logo.svg';

export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

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
            <div className={`header-section header-section--nav ${isMobileMenuOpen ? 'header-section--nav-open' : ''}`}>
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
        </header>
    )
}