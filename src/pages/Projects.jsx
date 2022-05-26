import React from 'react';
import Header from '../components/Header';
import Card from '../components/Card';
import '../styles/Projects.css';
import CardProjects from '../data';

function Projects() {
  return (
    <>
      <Header />
      <section className='container m-auto'>
          <div className='row'>
            <div className='col-md-12'>
              <h1 className='title mt-4 mb-4'>Projetos</h1>
            </div>
            {
              CardProjects.map((project, index)=> <Card project={project} key={index}/>)
            }
          </div>
        </section>
      </>
  );
}

export default Projects;