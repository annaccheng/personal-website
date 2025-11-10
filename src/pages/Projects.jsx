import ProjectsCard from '../components/projects/ProjectsCard';
import ProjectsFilter from '../components/projects/ProjectsFilter';
import { fetchProjects, fetchProjectsByCategory } from '../services/api';
import { useState, useEffect, useRef } from 'react';
import ufoImage from '../assets/projectPage/Ufo.svg';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isFiltering, setIsFiltering] = useState(false);
    const [error, setError] = useState(null);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const isInitialLoadRef = useRef(true);

    useEffect(() => {
        async function loadProjects() {
            try {
                // Only show full loading state on initial load
                if (isInitialLoadRef.current) {
                    setLoading(true);
                    isInitialLoadRef.current = false;
                } else {
                    // For filter changes, use a lighter loading state
                    setIsFiltering(true);
                }
                setError(null);
                
                const data = selectedCategories && selectedCategories.length > 0
                    ? await fetchProjectsByCategory(selectedCategories)
                    : await fetchProjects();
                
                setProjects(data);
            } catch (err) {
                setError('Failed to load projects');
                console.error(err);
            } finally {
                setLoading(false);
                setIsFiltering(false);
            }
        }

        loadProjects();
    }, [selectedCategories]);

    const handleFilterChange = (categories) => {
        setSelectedCategories(categories || []);
    };

    // Show full loading state only on initial load
    if (loading && projects.length === 0) {
        return <div className="loading-state">Loading projects...</div>;
    }

    if (error) {
        return <div className="error-state">Error: {error}</div>;
    }

    return (
        <div className="projects-page">
            <div className="projects-page-container">
                <img 
                    src={ufoImage} 
                    alt="" 
                    className="projects-ufo"
                />
                <h1>Projects</h1>
                
                <ProjectsFilter 
                    onFilterChange={handleFilterChange}
                    selectedCategories={selectedCategories}
                />
                
                <div className={`projects-grid ${isFiltering ? 'filtering' : ''}`}>
                    {projects.map((project) => (
                        <ProjectsCard key={project.id} project={project} />
                    ))}
                    {isFiltering && (
                        <div className="filter-loading-overlay">
                        </div>
                    )}
                </div>
                
                {projects.length === 0 && !isFiltering && (
                    <p>No projects found in this category.</p>
                )}
            </div>
        </div>
    );
}
