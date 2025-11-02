import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin-logo.png';
import emailIcon from '../assets/email.png';

export default function Footer() {
    return (
        <footer className="footer">
            <p>Let's Connect!</p>
            <p>
                <a href="https://www.linkedin.com/in/annaccheng/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" />
                </a>
                <a href="https://github.com/annaccheng" target="_blank" rel="noopener noreferrer">
                    <img src={githubIcon} alt="GitHub" className="footer-icon" />
                </a>
                <a href="mailto:annacheng@berkeley.edu">
                    <img src={emailIcon} alt="email" className="footer-icon" />
                </a>
            </p>
        </footer>
    )
}