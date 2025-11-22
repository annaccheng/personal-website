import { useMemo } from 'react';
import { generateStars } from '../../utils/stars';
import catAstronaut from '../../assets/CatAstronaut.svg';

export default function Hero() {
    const stars = useMemo(() => generateStars(60), []);

    const scrollToProjects = () => {
        document.querySelector('.projects-carousel-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="hero">
            <div className="hero-orbs">
                <span className="hero-orb hero-orb--one"></span>
                <span className="hero-orb hero-orb--two"></span>
                <span className="hero-orb hero-orb--three"></span>
            </div>
            <div className="hero-message">
                <div className="hero-message-line">
                    <span>INCOMING MESSAGE</span>
                </div>
                <div className="hero-message-main">
                    <span>Welcome to Anna&apos;s Website!</span>
                </div>
                <div className="hero-message-line">
                    <span>INCOMING MESSAGE</span>
                </div>
            </div>
            <div className="hero-stars">
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="star"
                        style={{
                            left: `${star.left}%`,
                            top: `${star.top}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            animationDelay: `${star.animationDelay}s`,
                            animationDuration: `${star.animationDuration}s`,
                        }}
                    />
                ))}
            </div>
            <div className="hero-planet">
                <img 
                    src={catAstronaut} 
                    alt="Cat Astronaut" 
                    className="hero-cat-astronaut"
                />
            </div>
            <button 
                onClick={scrollToProjects}
                className="hero-explore-btn"
                aria-label="Explore projects"
            >
                <span className="hero-explore-text">Explore</span>
                <span className="hero-explore-arrow">↓</span>
            </button>
        </div>
    )
}