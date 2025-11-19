import Hero from '../components/home/Hero';
import ProjectsCarousel from '../components/home/ProjectsCarousel';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
      <main>
        <Hero />
        <ProjectsCarousel />
        <div className="all-projects-link">
          <Link to="/projects" className="all-projects-heading">
            <span>All Projects</span>
            <span className="all-projects-arrow">→</span>
          </Link>
        </div>
      </main>
    );
  }