import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import LightDark from './LightDark';
import logo from '../assets/Logo.svg';

// Preload route components on hover for instant navigation
function PreloadLink({ to, children, className }) {
    useEffect(() => {
        const preloadRoutes = {
            '/': () => import('../pages/Home'),
            '/about': () => import('../pages/About'),
            '/projects': () => import('../pages/Projects'),
        };

        const handleMouseEnter = () => {
            if (preloadRoutes[to]) {
                preloadRoutes[to]();
            }
        };

        const link = document.querySelector(`a[href="${to}"]`);
        if (link) {
            link.addEventListener('mouseenter', handleMouseEnter);
            return () => link.removeEventListener('mouseenter', handleMouseEnter);
        }
    }, [to]);

    return (
        <Link to={to} className={className}>
            {children}
        </Link>
    );
}

export default function Header() {
    // Preload all routes immediately for fastest navigation
    useEffect(() => {
        import('../pages/Home');
        import('../pages/About');
        import('../pages/Projects');
    }, []);

    return (
        <header className="header">
            <div className="header-section">
                <Link to="/" className="header-pill header-pill--logo">
                    <img src={logo} alt="Logo" className="logo" />
                    <h1 className="header-text">Anna</h1>
                </Link>
            </div>
            <div className="header-section">
                <nav className="header-pill header-pill--nav">
                    <ul>
                        <li><PreloadLink to="/about" className="header-text">About</PreloadLink></li>
                        <li><PreloadLink to="/projects" className="header-text">Projects</PreloadLink></li>
                        <li>
                            <a href="mailto:annacheng@berkeley.edu" className="header-text">
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