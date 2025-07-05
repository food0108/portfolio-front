import React, { useState } from 'react';
import './App.css';
import mockProjects from './datos/proyecto-mock.js';
import { tecnologias } from './datos/proyecto-mock.js';
import ProjectCard from './componentes/proyecto-card.js';

function App() {
  const [projects, setProjects] = useState(mockProjects); // Estado para los proyectos
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [tecnologiaSeleccionada, setTecnologiaSeleccionada] = useState(null);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const handleSeleccionTecnologia = (tecnologia) => {
    setTecnologiaSeleccionada(tecnologia);
    setMenuAbierto(false);
  };

  
  const toggleFeatured = (id) => {
    const updated = projects.map((p) =>
      p.id === id ? { ...p, featured: !p.featured } : p
    );
    setProjects(updated);
  };

  const proyectosFiltrados = tecnologiaSeleccionada
    ? projects.filter((p) =>
        p.technologies.includes(tecnologiaSeleccionada)
      )
    : projects;

  return (
    <div className="App">
      <div className="menu-desplegable">
        <button className="top-right-button" onClick={toggleMenu}>
          Tecnologías
        </button>
        {menuAbierto && (
          <ul className="dropdown-menu">
            {tecnologias.map((item, index) => (
              <li key={index} onClick={() => handleSeleccionTecnologia(item)}>
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      <h1>Porfolio</h1>

      {tecnologiaSeleccionada && (
        <p className="filtro-activo">
          Filtrado por: <strong>{tecnologiaSeleccionada}</strong>{' '}
          <button onClick={() => setTecnologiaSeleccionada(null)}>✖ Limpiar</button>
        </p>
      )}

      <div className="project-list">
        {[...proyectosFiltrados]
        .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)) // los destacados arriba
        .map((p) => (
          <ProjectCard
        key={p.id}
        project={p}
        onToggleFeatured={toggleFeatured}
          />
        ))}
      </div>
    </div>
  );
}

export default App;