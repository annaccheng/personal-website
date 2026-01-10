export default function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="footer">
            <div className="footer-links">
                <a href="https://www.linkedin.com/in/annaccheng/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                </a>
                <a href="https://github.com/annaccheng" target="_blank" rel="noopener noreferrer">
                    GitHub
                </a>
                <a href="mailto:annacheng@berkeley.edu">
                    Email
                </a>
            </div>
            <p className="footer-copyright">
                © {currentYear} Anna Cheng
            </p>
        </footer>
    );
}
