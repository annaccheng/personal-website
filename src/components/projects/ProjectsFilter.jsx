import { useState, useEffect } from 'react';
import { fetchDistinctCategories } from '../../services/api';

export default function ProjectsFilter({ onFilterChange, selectedCategories = [] }) {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadCategories() {
            try {
                setLoading(true);
                const data = await fetchDistinctCategories();
                setCategories(data);
            } catch (err) {
                setError('Failed to load categories');
                console.error(err);
            } finally {
                setLoading(false);
            }
        }
        loadCategories();
    }, []);

    const handleCategoryToggle = (category) => {
        const currentSelection = Array.isArray(selectedCategories) ? selectedCategories : [];
        
        if (currentSelection.includes(category)) {
            // Remove category if already selected
            const updated = currentSelection.filter(cat => cat !== category);
            onFilterChange(updated.length > 0 ? updated : null);
        } else {
            // Add category to selection
            const updated = [...currentSelection, category];
            onFilterChange(updated);
        }
    };

    const handleClearAll = () => {
        onFilterChange(null);
    };

    if (loading) {
        return <div className="loading-state">Loading categories...</div>;
    }

    if (error) {
        return <div className="error-state">Error: {error}</div>;
    }

    const currentSelection = Array.isArray(selectedCategories) ? selectedCategories : [];
    const hasSelections = currentSelection.length > 0;

    return (
        <div className="projects-filter">
            <button
                onClick={handleClearAll}
                className={`filter-btn filter-btn-all ${!hasSelections ? 'active' : ''}`}
            >
                All
            </button>
            {categories.map((category) => {
                const isSelected = currentSelection.includes(category);
                return (
                    <button
                        key={category}
                        onClick={() => handleCategoryToggle(category)}
                        className={`filter-btn filter-btn-category ${isSelected ? 'active' : ''}`}
                    >
                        {category}
                    </button>
                );
            })}
        </div>
    );
}

