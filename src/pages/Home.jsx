import { Link } from 'react-router-dom';
import experienceData from '../data/experience.json';

export default function Home() {
    // Get recent experiences for the timeline
    const recentExperiences = experienceData.slice(0, 4);

    return (
        <main className="home-page">
            <section className="intro-section">
                <h1 className="intro-greeting">hi! i'm anna.</h1>
                <p className="intro-text">
                    CS and Business @ UC Berkeley | Prev. Product @ Salesforce, Capital One, MasterClass
                </p>
            </section>

            <section className="timeline-section">
                <h2 className="section-title">Timeline</h2>
                <div className="timeline">
                    {recentExperiences.map((exp) => (
                        <div key={exp.id} className="timeline-item">
                            <span className="timeline-date">{exp.startDate.split(' ')[1]}</span>
                            <div className="timeline-content">
                                <span className="timeline-role">{exp.title}</span>
                                <span className="timeline-company"> at <strong>{exp.company}</strong></span>
                                <p className="timeline-description">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <Link to="/about" className="view-more-link">
                    View full experience →
                </Link>
            </section>
        </main>
    );
}
