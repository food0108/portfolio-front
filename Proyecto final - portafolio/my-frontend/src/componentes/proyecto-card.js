import React from 'react';
 
function ProjectCard({ project, onToggleFeatured }) {
  return (
    <div className="project-card">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p><strong>Tecnologías:</strong> {project.technologies.join(', ')}</p>

      <a href={project.link} target="_blank" rel="noopener noreferrer">Ver proyecto</a>

      <button
        className={`featured-button ${project.featured ? 'activo' : ''}`}
        onClick={() => onToggleFeatured(project.id)}
      >
        {project.featured ? '★ Destacado' : '☆ Marcar como destacado'}
      </button>
    </div>
  );
}
export default ProjectCard;