import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useScrollRevealAll } from '../hooks/useScrollReveal';
import artworks from '../data/art.json';

function ArtModal({ artworkIndex, onClose, onPrev, onNext, onExpand, totalCount }) {
    const artwork = artworks[artworkIndex];
    
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onPrev();
            if (e.key === 'ArrowRight') onNext();
        };
        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';
        
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [onClose, onPrev, onNext]);

    return createPortal(
        <div className="art-modal-backdrop">
            <button 
                className="art-modal-close" 
                onClick={onClose}
                aria-label="Close"
            >
                ×
            </button>
            
            <button 
                className="art-modal-expand" 
                onClick={() => onExpand(artwork)}
                aria-label="Expand image"
            >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                </svg>
            </button>

            <button 
                className="art-modal-nav art-modal-prev" 
                onClick={onPrev}
                aria-label="Previous artwork"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6"/>
                </svg>
            </button>

            <div className="art-modal-content">
                <div className="art-modal-image-container">
                    <img 
                        src={artwork.image} 
                        alt={artwork.title}
                        className="art-modal-image"
                    />
                </div>
                <div className="art-modal-info">
                    <h2>{artwork.title}</h2>
                    <p>{artwork.description}</p>
                </div>
            </div>

            <button 
                className="art-modal-nav art-modal-next" 
                onClick={onNext}
                aria-label="Next artwork"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6"/>
                </svg>
            </button>
        </div>,
        document.body
    );
}

function ExpandedView({ artwork, onClose }) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', handleKeyDown);
        
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    return createPortal(
        <div className="art-expanded-backdrop" onClick={onClose}>
            <button 
                className="art-modal-close" 
                onClick={onClose}
                aria-label="Close"
            >
                ×
            </button>
            <img 
                src={artwork.image} 
                alt={artwork.title}
                className="art-expanded-image"
                onClick={(e) => e.stopPropagation()}
            />
        </div>,
        document.body
    );
}

export default function Art() {
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [expandedArt, setExpandedArt] = useState(null);
    
    useScrollRevealAll();

    const handlePrev = () => {
        setSelectedIndex((prev) => (prev === 0 ? artworks.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setSelectedIndex((prev) => (prev === artworks.length - 1 ? 0 : prev + 1));
    };

    return (
        <main className="art-page">
            <section className="art-hero scroll-reveal stagger-1">
                <h1>Art</h1>
                <p className="art-intro">
                    A collection of my artwork, primarily in colored pencil and mixed media.
                </p>
            </section>

            <div className="art-gallery scroll-reveal stagger-2">
                {artworks.map((artwork, index) => (
                    <div 
                        key={index}
                        className="art-item"
                        onClick={() => setSelectedIndex(index)}
                        onKeyDown={(e) => e.key === 'Enter' && setSelectedIndex(index)}
                        tabIndex={0}
                        role="button"
                        aria-label={`View ${artwork.title}`}
                    >
                        <img 
                            src={artwork.image} 
                            alt={artwork.title}
                            loading="lazy"
                        />
                        <div className="art-item-overlay">
                            <span className="art-item-title">{artwork.title}</span>
                        </div>
                    </div>
                ))}
            </div>

            {selectedIndex !== null && (
                <ArtModal 
                    artworkIndex={selectedIndex}
                    onClose={() => setSelectedIndex(null)}
                    onPrev={handlePrev}
                    onNext={handleNext}
                    onExpand={(art) => setExpandedArt(art)}
                    totalCount={artworks.length}
                />
            )}

            {expandedArt && (
                <ExpandedView 
                    artwork={expandedArt}
                    onClose={() => setExpandedArt(null)}
                />
            )}
        </main>
    );
}
