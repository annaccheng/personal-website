import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            {/* Left - Icon & Name */}
            <div className="header-section">
                <Link to="/" className="logo-section">
                    <div className="logo">A</div>
                    <h1 className="name header-text">Anna</h1>
                </Link>
            </div>

            {/* Right - navigation */}
            <div className="header-section">
                <nav className="nav-section">
                    <ul>
                        <li><Link to="/about" className="header-text">About</Link></li>
                        <li><Link to="/projects" className="header-text">Projects</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}