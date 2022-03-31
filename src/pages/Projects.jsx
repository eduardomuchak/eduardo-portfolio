import React, { Component } from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import Header from '../components/Header';
import Contato2 from '../images/contato(2).png';
import Contato3 from '../images/contato(3).png';
import NotFound from '../images/not-found.png';
import PixelsArt from '../images/pixels-art.gif';
import ToDoList from '../images/to-do-list.gif';
import Working from '../images/working(2).png';
import '../styles/Projects.css';


class Projects extends Component {
  render() { 
    return (
      <>
        <Header />
        <section className='container m-auto'>
            <div className='row'>
              <div className='col-md-12'>
                <h1 className='title mt-4 mb-4'>Projetos</h1>
              </div>
              <div className='col-md-4 mb-4'>
                <div className='card'>
                  <img src={ PixelsArt } class="card-img-top" alt="..."/>
                  <div className='card-body'>
                    <div className='project-title-container mb-1'>
                      <h5 className='title-card'>Pixels Art</h5>
                      <div className='card-icons-container'>
                        <a target="_blank" href="https://github.com/eduardomuchak/03-pixels-art" rel="noreferrer">
                          <span className='project-icon'><FaGithubSquare/></span>
                        </a>
                        <a target="_blank" href="https://pixelsart-eduardomuchak.vercel.app/" rel="noreferrer">
                          <span className='project-icon'><HiExternalLink/></span>
                        </a>
                      </div>
                    </div>
                    <span className='text-card'>
                      Terceiro projeto feito no módulo de Fundamentos do Desenvolvimento Web da Trybe. 
                    </span>
                    <br />
                    <span className='text-card'>
                      O projeto consistia em criar um board de pixels para a pessoa usuária colorir conforme as cores disponibilizadas. 
                    </span>
                    <br />
                    <span className='title-card'>Tecnologias utilizadas:</span>
                    <ul className='text-card-list'>
                      <li>CSS</li>
                      <li>HTML</li>
                      <li>JavaScript Puro</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mb-4'>
                <div className='card'>
                  <img src={ ToDoList } class="card-img-top" alt="..."/>
                  <div className='card-body'>
                    <div className='project-title-container mb-1'>
                      <h5 className='title-card'>To Do List</h5>
                      <div className='card-icons-container'>
                        <a target="_blank" href="https://github.com/eduardomuchak/04-to-do-list" rel="noreferrer">
                          <span className='project-icon'><FaGithubSquare/></span>
                        </a>
                        <a target="_blank" href="https://todolist-eduardomuchak.vercel.app/" rel="noreferrer">
                          <span className='project-icon'><HiExternalLink/></span>
                        </a>
                      </div>
                    </div>
                    <span className='text-card'>
                      Quarto projeto feito no módulo de Fundamentos do Desenvolvimento Web da Trybe. 
                    </span>
                    <br />
                    <span className='text-card'>
                      O projeto consistia em criar uma lista de tarefas onde a pessoa usuária poderia inserir, finalizar e excluir tarefas. 
                    </span>
                    <br />
                    <span className='title-card'>Tecnologias utilizadas:</span>
                    <ul className='text-card-list'>
                      <li>CSS</li>
                      <li>HTML</li>
                      <li>JavaScript Puro</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mb-4'>
                <div className='card'>
                  <img src={ Contato2 } class="card-img-top" alt="..."/>
                  <div className='card-body'>
                    <h5 className='title-card'>Projeto 3</h5>
                    <div className='mb-3'></div>
                    <p className='text-card'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mb-4'>
                <div className='card'>
                  <img src={ Contato3 } class="card-img-top" alt="..."/>
                  <div className='card-body'>
                    <h5 className='title-card'>Projeto 4</h5>
                    <div className='mb-3'></div>
                    <p className='text-card'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mb-4'>
                <div className='card'>
                  <img src={ Working } class="card-img-top" alt="..."/>
                  <div className='card-body'>
                    <h5 className='title-card'>Projeto 5</h5>
                    <div className='mb-3'></div>
                    <p className='text-card'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mb-4'>
                <div className='card'>
                  <img src={ NotFound } class="card-img-top" alt="..."/>
                  <div className='card-body'>
                    <h5 className='title-card'>Projeto 6</h5>
                    <div className='mb-3'></div>
                    <p className='text-card'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </>
    );
  }
}
 
export default Projects;