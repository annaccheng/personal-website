import { generateStars } from '../utils/stars';

export default function StarOverlay() {
    const stars = generateStars(100);

    return (
        <div className="star-overlay">
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
    );
}

