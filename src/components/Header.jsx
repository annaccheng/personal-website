export default function Header() {
    return (
        <header className="header">
            {/* Left - Icon & Name */}
            <div className="header-section">
                <div className="logo-section">
                    <img className="logo" src="/profile-photo.jpg" alt="Anna" />
                    <h1 className="name header-text">Anna</h1>
                </div>
            </div>

            {/* Right - navigation */}
            <div className="header-section">
                <nav className="nav-section">
                    <ul>
                        <li><a href="#about" className="header-text">About</a></li>
                        <li><a href="#projects" className="header-text">Projects</a></li>
                        <li><a href="#contact" className="header-text">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}