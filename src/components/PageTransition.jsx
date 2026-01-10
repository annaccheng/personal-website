import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home'));
const Projects = lazy(() => import('../pages/Projects'));
const About = lazy(() => import('../pages/About'));

export default function PageTransition() {
    return (
        <Suspense fallback={
            <div className="loading-state">Loading...</div>
        }>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Suspense>
    );
}
