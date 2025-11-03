import { useState, useEffect, useRef } from 'react';
import ProjectsCard from '../projects/ProjectsCard';
import { fetchTopProjects } from '../../services/api';

export default function ProjectsCarousel({ numProjects = 6 }) {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const scrollContainerRef = useRef(null);

    // Fetch top projects on mount
    useEffect(() => {
        async function loadProjects() {
            try {
                setLoading(true);
                const data = await fetchTopProjects(numProjects);
                setProjects(data);
            } catch (err) {
                setError('Failed to load projects');
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        loadProjects();
    }, [numProjects]);

    // Scroll functions
    const scrollLeft = () => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientWidth;
            scrollContainerRef.current.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    const scrollRight = () => {
        if (scrollContainerRef.current) {
            const scrollAmount = scrollContainerRef.current.clientWidth;
            scrollContainerRef.current.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    if (loading) {
        return <div className="loading-state">Loading projects...</div>;
    }

    if (error) {
        return <div className="error-state">Error: {error}</div>;
    }

    if (!projects || projects.length === 0) {
        return <div className="empty-state">No projects to display</div>;
    }

    return (
        <section className="projects-carousel-section">
            <h2>Featured Projects</h2>
            
            <div className="projects-carousel-container">
                {/* Left Navigation Button */}
                <button 
                    onClick={scrollLeft}
                    aria-label="Scroll left"
                    className="carousel-nav-btn carousel-nav-btn-left"
                >
                    ←
                </button>

                {/* Scrollable Container */}
                <div
                    ref={scrollContainerRef}
                    className="carousel-scroll-container"
                >
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="carousel-item"
                        >
                            <ProjectsCard project={project} />
                        </div>
                    ))}
                </div>

                {/* Right Navigation Button */}
                <button
                    onClick={scrollRight}
                    aria-label="Scroll right"
                    className="carousel-nav-btn carousel-nav-btn-right"
                >
                    →
                </button>
            </div>
        </section>
    );
}