export default function EducationCard({ education }) {
    const { id, degree, school, location, startDate, endDate, gpa } = education;

    return (
        <div className="education-card card-base">
            <div className="card-content">
                <h3 className="card-title">{degree}</h3>
                <div className="card-meta">
                    <p className="card-school">{school}</p>
                    <p className="card-location">{location}</p>
                    <p className="card-date">{startDate} - {endDate}</p>
                    {gpa && (
                        <p className="card-gpa">GPA: {gpa}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

