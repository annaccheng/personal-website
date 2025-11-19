import { useState, useEffect, useCallback } from 'react';
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

    const handleCategoryToggle = useCallback((category) => {
        if (selectedCategories.includes(category)) {
            // Remove category if already selected
            const updated = selectedCategories.filter(cat => cat !== category);
            onFilterChange(updated.length > 0 ? updated : null);
        } else {
            // Add category to selection
            onFilterChange([...selectedCategories, category]);
        }
    }, [selectedCategories, onFilterChange]);

    const handleClearAll = useCallback(() => {
        onFilterChange(null);
    }, [onFilterChange]);

    if (loading) {
        return <div className="loading-state">Loading categories...</div>;
    }

    if (error) {
        return <div className="error-state">Error: {error}</div>;
    }

    const hasSelections = selectedCategories.length > 0;

    return (
        <div className="projects-filter">
            <button
                onClick={handleClearAll}
                className={`filter-btn filter-btn-all ${!hasSelections ? 'active' : ''}`}
            >
                All
            </button>
            {categories.map((category) => {
                const isSelected = selectedCategories.includes(category);
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

