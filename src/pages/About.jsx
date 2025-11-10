import { useState, useEffect } from 'react';
import ExperienceCard from '../components/about/ExperienceCard';
import EducationCard from '../components/about/EducationCard';
import experienceData from '../data/experience.json';
import educationData from '../data/education.json';

export default function About() {
    const [experience, setExperience] = useState([]);
    const [education, setEducation] = useState([]);

    useEffect(() => {
        setExperience(experienceData);
        setEducation(educationData);
    }, []);

    return (
        <div className="about-page">
            <div className="about-page-container">
                <h1>About Me</h1>
                <p className="about-intro">
                    I'm a Product Manager that loves human-centered design and dabbles in a bit of coding and ML as well. 
                    I'm a rising senior at UC Berkeley studying Computer Science and Business. I'm passionate about building 
                    scalable products, advancing how we build with AI, and solving difficult problems. I also love puzzles in 
                    general (mega NYT mini, crossword, and sudoku fiend), art, film photography, and hiking!
                </p>
                
                <h1>Professional Experience</h1>
                <div className="experience-section">
                    {experience.map((exp) => (
                        <div key={exp.id} className="experience-row">
                            <div className="timeline-node"></div>
                            <ExperienceCard experience={exp} />
                        </div>
                    ))}
                </div>
                
                <h1>Education</h1>
                <div className="education-grid">
                    {education.map((edu) => (
                        <EducationCard key={edu.id} education={edu} />
                    ))}
                </div>
            </div>
        </div>
    );
}
