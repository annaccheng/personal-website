export default function ExperienceTimeline({ experiences }) {
    return (
        <div className="experience-timeline">
            <div className="timeline-line"></div>
            {experiences.map((exp, index) => (
                <div key={exp.id} className="timeline-node-wrapper">
                    <div className="timeline-node"></div>
                </div>
            ))}
        </div>
    );
}

