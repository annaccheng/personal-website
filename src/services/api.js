import projectsData from '../data/projects.json';

export async function fetchProjects() {
    // Simulate async behavior to match previous API pattern
    return Promise.resolve(projectsData);
}

// get the top x projects with the highest visibility_score
export async function fetchTopProjects(x) {
    const sorted = [...projectsData]
        .sort((a, b) => (b.visibility_score || 0) - (a.visibility_score || 0))
        .slice(0, x);
    
    return Promise.resolve(sorted);
}

// get all possible categories to filter by
export async function fetchDistinctCategories() {
    const uniqueCategories = [...new Set(projectsData.flatMap(p => p.category ?? []))].sort();
    return Promise.resolve(uniqueCategories);
}

// Fetch projects filtered by category
export async function fetchProjectsByCategory(category) {
    const categories = Array.isArray(category) ? category : [category];
    const filtered = projectsData.filter(project => {
        const projectCategories = project.category ?? [];
        return categories.some(cat => projectCategories.includes(cat));
    });
    
    return Promise.resolve(filtered);
}
