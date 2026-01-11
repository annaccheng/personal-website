import { Link } from 'react-router-dom';
import experienceData from '../data/experience.json';

export default function Home() {
    // Get recent experiences for the timeline
    const recentExperiences = experienceData.slice(0, 4);

    return (
        <main className="home-page">
            <section className="intro-section animate-in stagger-1">
                <h1 className="intro-greeting">hi! i'm anna.</h1>
                <p className="intro-text">
                    CS and Business @ UC Berkeley | Prev. Product @ Salesforce, Capital One, MasterClass
                </p>
            </section>

            <section className="timeline-section animate-in stagger-2">
                <h2 className="section-title">Timeline</h2>
                <div className="timeline">
                    {recentExperiences.map((exp, index) => (
                        <div 
                            key={exp.id} 
                            className={`timeline-item animate-in stagger-${index + 3}`}
                        >
                            <span className="timeline-date">{exp.startDate.split(' ')[1]}</span>
                            <div className="timeline-content">
                                <span className="timeline-role">{exp.title}</span>
                                <span className="timeline-company"> at <strong>{exp.company}</strong></span>
                                <p className="timeline-description">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <Link to="/about" className="view-more-link animate-in stagger-7">
                    View full experience →
                </Link>
            </section>
        </main>
    );
}
