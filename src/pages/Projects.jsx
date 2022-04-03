import React, { Component } from 'react';
import { FaGithubSquare } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';
import Header from '../components/Header';
import PixelsArt from '../images/pixels-art.gif';
import ShoppingCart from '../images/shopping-cart.gif';
import SolarSystem from '../images/solar-system.gif';
import ToDoList from '../images/to-do-list.gif';
import TrybeTunes from '../images/trybetunes.gif';
import TrybeWarts from '../images/trybewarts.gif';
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
                      <li>Local Storage</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mb-4'>
                <div className='card'>
                  <img src={ TrybeWarts } class="card-img-top" alt="..."/>
                  <div className='card-body'>
                    <div className='project-title-container mb-1'>
                      <h5 className='title-card'>Trybe Warts</h5>
                      <div className='card-icons-container'>
                        <a target="_blank" href="https://github.com/eduardomuchak/06-trybewarts" rel="noreferrer">
                          <span className='project-icon'><FaGithubSquare/></span>
                        </a>
                        <a target="_blank" href="https://trybewarts-eduardomuchak.vercel.app/" rel="noreferrer">
                          <span className='project-icon'><HiExternalLink/></span>
                        </a>
                      </div>
                    </div>
                    <span className='text-card'>
                      Sexto projeto feito no módulo de Fundamentos do Desenvolvimento Web da Trybe e o primeiro projeto em Dupla.
                    </span>
                    <br />
                    <span className='text-card'>
                      O projeto consistia em criar um formulário de cadastro de uma pessoa estudante da escola TrybeWarts. 
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
                  <img src={ ShoppingCart } class="card-img-top" alt="..."/>
                  <div className='card-body'>
                    <div className='project-title-container mb-1'>
                      <h5 className='title-card'>Shopping Cart</h5>
                      <div className='card-icons-container'>
                        <a target="_blank" href="https://github.com/eduardomuchak/09-shopping-cart" rel="noreferrer">
                          <span className='project-icon'><FaGithubSquare/></span>
                        </a>
                        <a target="_blank" href="https://shoppingcart-eduardomuchak.vercel.app/" rel="noreferrer">
                          <span className='project-icon'><HiExternalLink/></span>
                        </a>
                      </div>
                    </div>
                    <span className='text-card'>
                      Último projeto feito no módulo de Fundamentos do Desenvolvimento Web da Trybe.
                    </span>
                    <br />
                    <span className='text-card'>
                      O projeto consistia em consumir a API do Mercado Livre e criar um sistema de adicionar e remover itens de um carrinho de compras.
                    </span>
                    <br />
                    <span className='title-card'>Tecnologias utilizadas:</span>
                    <ul className='text-card-list'>
                      <li>API Mercado Livre</li>
                      <li>CSS</li>
                      <li>HTML</li>
                      <li>JavaScript Puro</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mb-4'>
                <div className='card'>
                  <img src={ SolarSystem } class="card-img-top" alt="..."/>
                  <div className='card-body'>
                    <div className='project-title-container mb-1'>
                      <h5 className='title-card'>Solar System</h5>
                      <div className='card-icons-container'>
                        <a target="_blank" href="https://github.com/eduardomuchak/10-solar-system" rel="noreferrer">
                          <span className='project-icon'><FaGithubSquare/></span>
                        </a>
                        <a target="_blank" href="https://solarsystem-eduardomuchak.vercel.app/" rel="noreferrer">
                          <span className='project-icon'><HiExternalLink/></span>
                        </a>
                      </div>
                    </div>
                    <span className='text-card'>
                      Primeiro projeto feito no módulo de Front End da Trybe.
                    </span>
                    <br />
                    <span className='text-card'>
                      O projeto consistia em praticar e aplicar o conceito de Componentes de Classe do React criando uma página com informações das missões espaciais e os nomes dos planetas do sistema solar.
                    </span>
                    <br />
                    <span className='title-card'>Tecnologias utilizadas:</span>
                    <ul className='text-card-list'>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>ReactJS</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mb-4'>
                <div className='card'>
                  <img src={ TrybeTunes } class="card-img-top" alt="..."/>
                  <div className='card-body'>
                    <div className='project-title-container mb-1'>
                      <h5 className='title-card'>Trybe Tunes</h5>
                      <div className='card-icons-container'>
                        <a target="_blank" href="https://github.com/eduardomuchak/12-trybe-tunes" rel="noreferrer">
                          <span className='project-icon'><FaGithubSquare/></span>
                        </a>
                        <a target="_blank" href="https://trybetunes-eduardomuchak.vercel.app/" rel="noreferrer">
                          <span className='project-icon'><HiExternalLink/></span>
                        </a>
                      </div>
                    </div>
                    <span className='text-card'>
                      O projeto consistia em aplicar os conceitos de Estado do componente criando uma aplicação que consumisse informações da API do iTunes para recriarmos uma aplicação de busca e reprodução de músicas.
                    </span>
                    <br />
                    <span className='title-card'>Tecnologias utilizadas:</span>
                    <ul className='text-card-list'>
                      <li>API do iTunes</li>
                      <li>CSS</li>
                      <li>JavaScript</li>
                      <li>ReactJS</li>
                      <li>React Router Dom</li>
                    </ul>
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