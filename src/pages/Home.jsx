import { Link } from 'react-router-dom';
import timelineData from '../data/timeline.json';
import { useScrollRevealAll } from '../hooks/useScrollReveal';

export default function Home() {
    // Initialize scroll reveal for all elements with .scroll-reveal class
    useScrollRevealAll();

    return (
        <main className="home-page">
            <section className="intro-section scroll-reveal stagger-1">
                <h1 className="intro-greeting">hi! i'm anna.</h1>
                <p className="intro-text">
                    CS and Business @ UC Berkeley | Prev. Product @ Salesforce, Capital One, MasterClass
                </p>
            </section>

            <section className="timeline-section">
                <h2 className="section-title scroll-reveal stagger-2">Timeline</h2>
                <div className="timeline">
                    {timelineData.map((item, index) => (
                        <div 
                            key={item.year} 
                            className={`timeline-item scroll-reveal stagger-${Math.min(index + 3, 8)}`}
                        >
                            <h3 className="timeline-year">{item.year}</h3>
                            <ul className="timeline-highlights">
                                {item.highlights.map((highlight, i) => (
                                    <li key={i}>{highlight}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <Link to="/about" className="view-more-link scroll-reveal stagger-7">
                    View full experience →
                </Link>
            </section>
        </main>
    );
}
