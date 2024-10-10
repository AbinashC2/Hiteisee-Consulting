import React from 'react';
import './Projects.css';
import pic1 from "../assets/projects/pic1.jpg"
import pic2 from "../assets/projects/pic2.jpg"
import pic3 from "../assets/projects/pic3.png"

const projectData = [
  {
    title: 'Smart Campus',
    image: pic1 ,
    description: 'A cutting-edge campus automation project.'
  },
  {
    title: 'Consulting',
    image: pic2 ,
    description: 'An initiative for sustainable land use.'
  },
  {
    title: 'Pm Wani',
    image: pic3 ,
    description: 'A government initiative for internet empowerment.'
  },
  {
    title: 'WorkFlow Kiims',
    image: pic1 ,
    description: 'Efficient workflow management solution.'
  },
  {
    title: 'Pm Wani',
    image: pic3 ,
    description: 'A government initiative for internet empowerment.'
  },
  {
    title: 'Pm Wani',
    image: pic3 ,
    description: 'A government initiative for internet empowerment.'
  },
  // Add more projects here
];

const Projects = () => {
  return (
    <div>
      <div className='gallery-container'>
        <div className="services-banner2">
          <div className="contact-us-heading">
            <h1>Projects</h1>
          </div>
        </div>
      </div>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
