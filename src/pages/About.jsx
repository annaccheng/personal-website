import experienceData from '../data/experience.json';
import educationData from '../data/education.json';
import artPhoto from '../assets/About/art.jpg';
import friendsPhoto from '../assets/About/friends.JPEG';
import hikePhoto from '../assets/About/hike.JPG';
import waterfallPhoto from '../assets/About/waterfall.JPG';

export default function About() {
    const polaroids = [
        { src: artPhoto, caption: 'a recent sketch :)', rotation: -6 },
        { src: friendsPhoto, caption: 'cooking + baking', rotation: 4 },
        { src: hikePhoto, caption: 'Mt. Shasta!', rotation: -3 },
        { src: waterfallPhoto, caption: 'a hidden find in PR', rotation: 5 },
    ];

    return (
        <main className="about-page">
            <section className="about-hero">
                <div className="about-content">
                    <h1>About Me</h1>
                    <p className="about-bio">
                        I'm a rising senior at UC Berkeley studying Computer Science and Business. 
                        I started my journey in product management through business strategy and consulting, 
                        but quickly fell in love with the technical side of building. A bit more about me:
                    </p>
                    <ul className="about-bio-list">
                        <li>Built and prototyped products from 0-1 at Salesforce, Capital One, and MasterClass</li>
                        <li>Passionate about HCI, scrappy products, and strategic GTM</li>
                        <li>Love playing around with new tools and building meaningful software (working on a few projects right now!)</li>
                    </ul>
                    <p className="about-bio">
                        Outside of work, find me:
                    </p>
                    <ul className="about-bio-list">
                        <li>Sketching, painting, and finding my newest art inspo (currently loving colored pencils and inks)</li>
                        <li>Hiking, exploring new trails, and finding hidden viewpoints</li>
                        <li>Solving anagrams and puzzles (NYT mini, crossword, sudoku, mahjong, you name it)</li>
                    </ul>
                </div>
                <div className="about-polaroids">
                    {polaroids.map((photo, index) => (
                        <div 
                            key={index} 
                            className="polaroid"
                            style={{ '--rotation': `${photo.rotation}deg` }}
                        >
                            <div className="polaroid-image">
                                <img src={photo.src} alt={photo.caption} />
                            </div>
                            <p className="polaroid-caption">{photo.caption}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="experience-section">
                <h2 className="section-title">Experience</h2>
                <div className="experience-list">
                    {experienceData.map((exp) => (
                        <div key={exp.id} className="experience-item">
                            <div className="experience-header">
                                <div className="experience-role">
                                    <h3>{exp.title}</h3>
                                    <span className="experience-company">{exp.company}</span>
                                </div>
                                <span className="experience-date">
                                    {exp.startDate} – {exp.endDate}
                                </span>
                            </div>
                            <p className="experience-description">{exp.description}</p>
                            {exp.tags?.length > 0 && (
                                <div className="experience-tags">
                                    {exp.tags.map((tag) => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section className="education-section">
                <h2 className="section-title">Education</h2>
                <div className="education-list">
                    {educationData.map((edu) => (
                        <div key={edu.id} className="education-item">
                            <div className="education-header">
                                <div className="education-degree">
                                    <h3>{edu.degree}</h3>
                                    <span className="education-school">{edu.school}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
