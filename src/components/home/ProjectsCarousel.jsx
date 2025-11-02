import ProjectsCard from '../projects/ProjectsCard';

export default function ProjectsCarousel({ projects }) {
    return (
        <div className="projects-carousel">
            <h2 className="section-title">Projects</h2>
            {projects.map((project) => (
                <ProjectsCard key={project.id} project={project} />
            ))}
            {/* link to view all projects */}
        </div>
    )
}