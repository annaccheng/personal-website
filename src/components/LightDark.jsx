import { useState, useEffect } from 'react';

export default function LightDark() {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem('theme');
        return saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    return (
        <button 
            onClick={toggleTheme} 
            aria-label="Toggle theme"
            className="theme-toggle"
            data-theme={theme}
        >
            <span className="theme-toggle-slider">
                {theme === 'light' ? '☀️' : '🌙'}
            </span>
        </button>
    );
}