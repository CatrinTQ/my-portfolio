import './projectCard.css';
import { projects } from '../data/projects'

export const ProjectCard = () => {
    return (
        <section className="project-container">
            {projects.map(project => (
                <div className='project-card' key={project.id}>
                    <img className='project-img' src={project.image} alt={project.title}/>
                    <h2 className='project-title'>{project.title}</h2>
                    <h3 className='project-type'>{project.type}</h3>
                    <p className='description'>{project.description}</p>
                    <a href={project.link} className='live-site'>&gt;&gt; Live site</a>
                    <div className='tag-container'>
                    {project.tags.map(tag => (
                        <label className='tag'>{tag}</label>
                    ))}
                    </div>
                </div>
            ))}
        </section>
    )
}