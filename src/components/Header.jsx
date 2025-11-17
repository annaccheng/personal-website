import { Link } from 'react-router-dom';
import LightDark from './LightDark';
import logo from '../assets/Logo.svg';

export default function Header() {
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
        </header>
    )
}