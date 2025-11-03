export default function ProjectsCard({ project }) {
    const { id, project_date, title, description, photo, tags, category, link, visibility_score } = project;

    // console.log(tags, Array.isArray(tags));
    //console.log(category);

    return (
        <div className="project-card">
            <div className="project-image-container">
                <img src={photo} alt={title} className="project-image" />
            </div>
            <div className="project-category">
                {category.map((category) => (
                    <span key={category} className="project-category">{category}</span>
                ))}
            </div>
            <div className="project-content">
                <h3 className="project-title">{title}</h3>
                <h3 className="project-date">{project_date}</h3>
                <p className="project-description">{description}</p>
                {link && (
                    <div className="project-links">
                        <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                            View Project →
                        </a>
                    </div>
                )}
            </div>
            <div className="project-tags">
                {tags.map((tag) => (
                    <span key={tag} className="project-tag">{tag}</span>
                ))}
            </div>
        </div>
    )
}