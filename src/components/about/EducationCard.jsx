import { memo } from 'react';

function EducationCard({ education }) {
    const { degree, school, location, startDate, endDate, gpa } = education;

    return (
        <div className="education-card card-base">
            <div className="l-accent l-accent-top-left"></div>
            <div className="l-accent l-accent-bottom-right"></div>
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

export default memo(EducationCard);

