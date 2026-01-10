import experienceData from '../data/experience.json';
import educationData from '../data/education.json';
import profilePhoto from '../assets/ProfilePhoto.png';

export default function About() {
    return (
        <main className="about-page">
            <section className="about-hero">
                <div className="about-content">
                    <h1>About Me</h1>
                    <p className="about-bio">
                        I'm a rising senior at UC Berkeley studying Computer Science and Business. 
                        I started my journey in product management through consulting, 
                        working with several tech companies on GTM and product strategy. I started playing 
                        around with coding and ML, and quickly fell in love with the technical side of building.
                    </p>
                    <p className="about-bio">
                        I'm passionate about Human Computer Interaction, building scrappy products, 
                        and creating software with meaningful impact. I love solving difficult problems, 
                        both in product and in life.
                    </p>
                    <p className="about-bio">
                        In my free time, I enjoy art, fashion design, film photography, and hiking!
                        I'm also a big fan of puzzles (NYT mini, crossword, sudoku, mahjong, you name it).
                    </p>
                </div>
                <div className="about-photo">
                    <img src={profilePhoto} alt="Anna Cheng" />
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
                                <span className="education-date">
                                    {edu.startDate} – {edu.endDate}
                                </span>
                            </div>
                            {edu.gpa && (
                                <p className="education-gpa">GPA: {edu.gpa}</p>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
