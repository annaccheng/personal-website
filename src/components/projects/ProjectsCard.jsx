import { memo } from 'react';

function ProjectsCard({ project }) {
    const { title, description, photo, tags, category, link } = project;

    return (
        <div className="project-card card-base">
            <div className="l-accent l-accent-top-left"></div>
            <div className="l-accent l-accent-bottom-right"></div>
            <div className="project-image-container">
                <img 
                    src={photo} 
                    alt={title} 
                    className="project-image"
                    loading="lazy"
                    decoding="async"
                />
            </div>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <p className="card-description">{description}</p>
                {link && (
                    <div className="project-links">
                        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                            View Project →
                        </a>
                    </div>
                )}
            </div>
            {category && Array.isArray(category) && category.length > 0 && (
                <div className="project-category">
                    {category.map((cat) => (
                        <span key={cat} className="project-category-tag">{cat}</span>
                    ))}
                </div>
            )}
            <div className="card-tags">
                {tags && Array.isArray(tags) && tags.map((tag) => (
                    <span key={tag} className="card-tag">{tag}</span>
                ))}
            </div>
        </div>
    )
}

export default memo(ProjectsCard);