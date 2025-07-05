import imageFile from '../image/image.png';

const tecnologias = ["Node.js", "Express", "PostgreSQL","React", "CSS"];

const mockProjects = [
  {
    id: 1,
    title: "Landing Page React",
    image: imageFile,
    description: "Sitio web de una empresa ficticia hecho con React.",
    technologies: [tecnologias[3],tecnologias[4]],
    link: "https://example.com/",
    featured: true
  },
  {
    id: 2,
    title: "API REST con Express",
    image: "https://via.placeholder.com/300x150",
    description: "API para gestionar usuarios con Node.js y Sequelize.",
    technologies: [tecnologias[0],tecnologias[1],tecnologias[2]],
    link: "https://github.com/example/api-rest",
    featured: false
  },
  {
  id: 3,
  title: "Dashboard de Administración",
  image: "https://via.placeholder.com/300x150",
  description: "Panel de control para usuarios y estadísticas, construido con React y Node.js.",
  technologies: [tecnologias[0], tecnologias[3], tecnologias[4]], // Node.js, React, CSS
  link: "https://admin-dashboard.example.com/",
  featured: false
},
{
  id: 4,
  title: "Blog Personal",
  image: "https://via.placeholder.com/300x150",
  description: "Blog con sistema de comentarios, hecho con Express y PostgreSQL.",
  technologies: [tecnologias[1], tecnologias[2], tecnologias[4]], // Express, PostgreSQL, CSS
  link: "https://blog.example.com/",
  featured: true
},
{
  id: 5,
  title: "E-commerce Frontend",
  image: "https://via.placeholder.com/300x150",
  description: "Frontend de una tienda online construido con React y estilos modernos.",
  technologies: [tecnologias[3], tecnologias[4]], // React, CSS
  link: "https://ecommerce.example.com/",
  featured: false
},
{
  id: 6,
  title: "API de Productos",
  image: "https://via.placeholder.com/300x150",
  description: "Backend para una tienda online usando Node.js, Express y PostgreSQL.",
  technologies: [tecnologias[0], tecnologias[1], tecnologias[2]], // Node.js, Express, PostgreSQL
  link: "https://api-productos.example.com/",
  featured: false
}
];
  

export default mockProjects;
export { tecnologias };