import { ProjectCard } from './ProjectCard';
import './projects.css';

export const Projects = () => {
    return (
        <section className="projects">
            <h2 className='project-header'>Featured projects</h2>
            <ProjectCard />
        </section>
    )
}