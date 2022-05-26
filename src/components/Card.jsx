import React from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import '../styles/Projects.css';

function Card({projects}) {
  return (
    projects.map((project) => (
      <div className='col-md-4 mb-4'>
      <div className='card'>
        <img src={ `${project.image}` } class="card-img-top" alt="..."/>
        <div className='card-body'>
          <div className='project-title-container mb-1'>
            <h5 className='title-card'>{project.title}</h5>
            <div className='card-icons-container'>
              <a target="_blank" href={project.gitHubURL} rel="noreferrer">
                <span className='project-icon'><FaGithubSquare/></span>
              </a>
              <a target="_blank" href={project.vercelURL} rel="noreferrer">
                <span className='project-icon'><HiExternalLink/></span>
              </a>
            </div>
          </div>
          <span className='text-card'>
            {project.description}
          </span>
          <br />
          <span className='title-card'>Tecnologias utilizadas:</span>
          <ul className='text-card-list'>
            {project.technologies.map((technology) => (
              <li>{technology}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    ))
  );
}

export default Card;