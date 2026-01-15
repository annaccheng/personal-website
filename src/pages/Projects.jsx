import projectsData from '../data/projects.json';
import { useScrollRevealAll } from '../hooks/useScrollReveal';

export default function Projects() {
    // Sort projects by date (newest first)
    const sortedProjects = [...projectsData].sort((a, b) => 
        new Date(b.project_date) - new Date(a.project_date)
    );

    // Initialize scroll reveal for all elements with .scroll-reveal class
    useScrollRevealAll();

    return (
        <main className="projects-page">
            <div className="scroll-reveal stagger-1">
                <h1>Projects</h1>
                <p className="projects-intro">
                    A collection of products, designs, and research I've worked on.
                </p>
            </div>
            
            <div className="projects-list">
                {sortedProjects.map((project, index) => (
                    <article 
                        key={project.id} 
                        className={`project-item scroll-reveal stagger-${Math.min((index % 4) + 1, 4)}`}
                    >
                        {project.photo && (
                            <div className="project-image">
                                <img 
                                    src={project.photo} 
                                    alt={project.title}
                                    loading="lazy"
                                />
                            </div>
                        )}
                        <div className="project-content">
                            <div className="project-header">
                                <h2>{project.title}</h2>
                            </div>
                            <p className="project-description">{project.description}</p>
                            {project.tags?.length > 0 && (
                                <div className="project-tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="tag">{tag}</span>
                                    ))}
                                </div>
                            )}
                            {project.link && (
                                <a 
                                    href={project.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    View Project →
                                </a>
                            )}
                        </div>
                    </article>
                ))}
            </div>
        </main>
    );
}
