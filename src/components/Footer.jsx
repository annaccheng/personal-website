export default function Footer() {
    return (
        <footer className="footer">
            <p>Let's Connect!</p>
            <p>
                <a href="https://www.linkedin.com/in/annaccheng/" target="_blank" rel="noopener noreferrer">
                    <span className="footer-icon footer-icon-linkedin" aria-label="LinkedIn"></span>
                </a>
                <a href="https://github.com/annaccheng" target="_blank" rel="noopener noreferrer">
                    <span className="footer-icon footer-icon-github" aria-label="GitHub"></span>
                </a>
                <a href="mailto:annacheng@berkeley.edu">
                    <span className="footer-icon footer-icon-email" aria-label="Email"></span>
                </a>
            </p>
        </footer>
    )
}