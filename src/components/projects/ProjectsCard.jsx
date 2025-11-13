export default function ProjectsCard({ project }) {
    const { title, description, photo, tags, category, link } = project;

    return (
        <div className="project-card card-base">
            <div className="project-image-container">
                <img src={photo} alt={title} className="project-image" />
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
            <div className="project-category">
                    {category.map((category) => (
                        <span key={category} className="project-category">{category}</span>
                    ))}
                </div>
            <div className="card-tags">
                {tags.map((tag) => (
                    <span key={tag} className="card-tag">{tag}</span>
                ))}
            </div>
        </div>
    )
}