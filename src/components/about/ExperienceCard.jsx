export default function ExperienceCard({ experience }) {
    const { id, title, company, location, description, tags, startDate, endDate } = experience;
    const dateRange = `${startDate} - ${endDate}`;

    return (
        <div className="experience-card card-base">
            <div className="experience-date-pill">
                <span>{dateRange}</span>
            </div>
            <div className="card-content">
                <h3 className="card-title">{title}</h3>
                <div className="card-meta">
                    <p className="card-company">{company}</p>
                    <p className="card-location">{location}</p>
                </div>
                {description && (
                    <p className="card-description">{description}</p>
                )}
            </div>
            {tags && tags.length > 0 && (
                <div className="card-tags">
                    {tags.map((tag) => (
                        <span key={tag} className="card-tag">{tag}</span>
                    ))}
                </div>
            )}
        </div>
    );
}

