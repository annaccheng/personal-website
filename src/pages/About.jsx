import ExperienceCard from '../components/about/ExperienceCard';
import EducationCard from '../components/about/EducationCard';
import experienceData from '../data/experience.json';
import educationData from '../data/education.json';
import profilePhoto from '../assets/ProfilePhoto.png';
import { ReactTyped } from 'react-typed';

export default function About() {

    return (
        <div className="about-page">
            <div className="about-comets">
                <div className="about-comet about-comet--one"></div>
                <div className="about-comet about-comet--two"></div>
                <div className="about-comet about-comet--three"></div>
            </div>
            <div className="about-page-container">
                <div className="about-me-section">
                    <div className="about-me-text">
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
                        <p className="about-intro">
                            I'm a rising senior at UC Berkeley studying Computer Science and Business. I started my journey in product management 
                            in business strategy and consulting, but quickly fell in love with the technical side of coding and ML. 
                            I'm passionate about Human Computer Interaction, building scrappy products, and creating software with meaningful impact.
                            I love solving difficult problems, both in product and in life. I'm a big fan of puzzles (NYT mini, crossword, sudoku, you name it). 
                            In my free time I also enjoy art, fashion design, film photography, and hiking!
                        </p>
                    </div>
                    <div className="about-me-image">
                        <img 
                            src={profilePhoto} 
                            alt="Anna" 
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
                
                <h1>Professional Experience</h1>
                <div className="experience-section">
                    {experienceData.map((exp) => (
                        <div key={exp.id} className="experience-row">
                            <div className="timeline-node"></div>
                            <ExperienceCard experience={exp} />
                        </div>
                    ))}
                </div>
                
                <h1>Education</h1>
                <div className="education-grid">
                    {educationData.map((edu) => (
                        <EducationCard key={edu.id} education={edu} />
                    ))}
                </div>
            </div>
        </div>
    );
}
