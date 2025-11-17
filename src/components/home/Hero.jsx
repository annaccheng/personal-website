import { generateStars } from '../../utils/stars';
import catAstronaut from '../../assets/CatAstronaut.svg';

export default function Hero() {
    const stars = generateStars(100);

    return (
        <div className="hero">
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
                <img src={catAstronaut} alt="Cat Astronaut" className="hero-cat-astronaut" />
            </div>
            <div className="hero-text">
                <p>Welcome to Anna's website!</p>
            </div>
        </div>
    )
}