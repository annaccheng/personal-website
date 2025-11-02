import { ReactTyped } from 'react-typed';
import profilePhoto from '../../assets/profile.jpg';

export default function Hero() {
    return (
        <div className="hero">
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
            <img src={profilePhoto} alt="Anna" />
        </div>
    )
}