import { generateStars } from '../../utils/stars';

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
            <div className="hero-text">
                <p>Welcome to Anna's website!</p>
            </div>
        </div>
    )
}