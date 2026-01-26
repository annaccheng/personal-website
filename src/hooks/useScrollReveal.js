import { useEffect, useRef } from 'react';

export function useScrollReveal(options = {}) {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed');
                        observer.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px',
                ...options,
            }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [options]);

    return ref;
}

// For multiple elements, use this hook
export function useScrollRevealAll(selector = '.scroll-reveal') {
    useEffect(() => {
        // Small delay to ensure DOM is ready after React render
        const timeoutId = setTimeout(() => {
            const elements = document.querySelectorAll(selector);
            
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('revealed');
                            observer.unobserve(entry.target);
                        }
                    });
                },
                {
                    threshold: 0.1,
                    rootMargin: '0px 0px -50px 0px',
                }
            );

            elements.forEach((el) => observer.observe(el));

            return () => observer.disconnect();
        }, 10);

        return () => clearTimeout(timeoutId);
    }, [selector]);
}
