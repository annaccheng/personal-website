import ProjectsCard from '../components/projects/ProjectsCard';
import ProjectsFilter from '../components/projects/ProjectsFilter';
import { fetchProjects, fetchProjectsByCategory } from '../services/api';
import { useState, useEffect } from 'react';

export default function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategories, setSelectedCategories] = useState([]);

    useEffect(() => {
        async function loadProjects() {
            try {
                setLoading(true);
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
            }
        }

        loadProjects();
    }, [selectedCategories]);

    const handleFilterChange = (categories) => {
        setSelectedCategories(categories || []);
    };

    if (loading) {
        return <div className="loading-state">Loading projects...</div>;
    }

    if (error) {
        return <div className="error-state">Error: {error}</div>;
    }

    return (
        <div>
            <h1>Projects</h1>
            
            <ProjectsFilter 
                onFilterChange={handleFilterChange}
                selectedCategories={selectedCategories}
            />
            
            <div className="projects-grid">
                {projects.map((project) => (
                    <ProjectsCard key={project.id} project={project} />
                ))}
            </div>
            
            {projects.length === 0 && (
                <p>No projects found in this category.</p>
            )}
        </div>
    );
}
