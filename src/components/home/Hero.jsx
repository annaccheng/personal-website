import { ReactTyped } from 'react-typed';
import profilePhoto from '../../assets/ProfilePhoto.png';
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
                <h1>
                    <ReactTyped
                        strings={['Hi! I\'m Anna 🚀']}
                        typeSpeed={80}
                        backSpeed={0}
                        showCursor
                        cursorChar="|"
                        loop={false}
                    />
                </h1>
                <p>I'm a Product Manager that loves human-centered design and working with technical products to drive impact</p>
            </div>
            <div className="hero-image">
                <img src={profilePhoto} alt="Anna" />
            </div>
        </div>
    )
}