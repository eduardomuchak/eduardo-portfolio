import React, { Component } from 'react';
import { AiOutlineApi } from 'react-icons/ai';
import { FaGitAlt, FaGithubSquare, FaLinkedin, FaReact } from 'react-icons/fa';
import { SiCss3, SiHtml5, SiJavascript, SiJest, SiRedux, SiTestinglibrary } from 'react-icons/si';
import Header from '../components/Header';
import Contato1 from '../images/contato(1).png';
import Contato2 from '../images/contato(2).png';
import Contato3 from '../images/contato(3).png';
import NotFound from '../images/not-found.png';
import Working from '../images/working(2).png';
import Working2 from '../images/working.png';
import '../styles/Home.css';

class Home extends Component {
  render() { 
    return (
      <>
        <Header />
        <main className='col-11'>
          <section className='info-container col-11'>
            <div className='introduction-container'>
              <span>Hello World! Meu nome é</span>
              <h1 className='name'>Eduardo Muchak</h1>
              <p>e sou aspirante a Front-End Developer.</p>
              <span>Atualmente sou estudante na <a target="_blank" href='https://www.betrybe.com/' rel="noreferrer" className='external-links'><strong>Trybe</strong></a></span>
            </div>
            <aside className='rounded float-end'>
              <figure class="figure">
                <img className='developer-image figure-img img-fluid rounded'src={ Working } alt='Working' />
              </figure>
            </aside>
          </section>
          <section className='col-12'>
            <div className='section-container container'>
              <h2 className='title'>Algumas das tecnologias que já tive contato</h2>
              <div className='technologies-container row align-items-start'>
                <div className='col-md-4'>
                  <div className='technologie'>
                    <span className='icon'><AiOutlineApi/></span>
                    <span>Consumo de API's</span>
                  </div>
                  <div className='technologie'>
                    <span className='icon'><SiCss3/></span>
                    <span>Css</span>
                  </div>
                  <div className='technologie'>
                    <span className='icon'><FaGitAlt/></span>
                    <span>Git</span>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='technologie'>
                    <span className='icon'><SiHtml5/></span>
                    <span>Html</span>
                  </div>
                  <div className='technologie'>
                    <span className='icon'><SiJavascript/></span>
                    <span>JavaScript</span>
                  </div>
                  <div className='technologie'>
                    <span className='icon'><SiJest/></span>
                    <span>Jest</span>
                  </div>
                </div>
                <div className='col-md-4'>
                  <div className='technologie'>
                    <span className='icon'><FaReact/></span>
                    <span>React</span>
                  </div>
                  <div className='technologie'>
                    <span className='icon'><SiTestinglibrary/></span>
                    <span>React Testing Library</span>
                  </div>
                  <div className='technologie'>
                    <span className='icon'><SiRedux/></span>
                    <span>Redux</span>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            <div className='col-12 container'>
              <h2 className='title'>Sobre mim</h2>
              <p>Sou apaixonado por aprendizado. Acredito que podemos melhorar nossas vidas através do conhecimento e da sabedoria. Por toda a minha carreira profissional, sempre acabei sendo uma pessoa curiosa com todo o processo de funcionamento das coisas e com isso, acabei me descobrindo na tecnologia.</p>
            </div>
            <div className='icons-container container'>
              <div className='icons-sub-container'>
                <a target="_blank" href='https://github.com/eduardomuchak' rel="noreferrer" className='external-links'>
                  <span className='icon'><FaGithubSquare/></span>
                  <span>GitHub</span>
                </a>
              </div>
              <div className='icons-sub-container'>
                <a target="_blank" href='https://www.linkedin.com/in/eduardomuchak/' rel="noreferrer" className='external-links'>
                  <span className='icon'><FaLinkedin/></span>
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </section>
          <br/>
          <section className='container m-auto'>
            <div className='row'>
              <div className='col-md-12'>
                <h2 className='title'>Conheça alguns dos meus projetos</h2>
              </div>
              <div className='col-md-4 mb-4'>
                <div className='card'>
                  <img src={ Working2 } class="card-img-top" alt="..."/>
                  <div className='card-body'>
                    <h5 className='title-card'>Projeto 1</h5>
                    <div className='mb-3'></div>
                    <p className='text-card'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mb-4'>
                <div className='card'>
                  <img src={ Contato1 } class="card-img-top" alt="..."/>
                  <div className='card-body'>
                    <h5 className='title-card'>Projeto 2</h5>
                    <div className='mb-3 underline'></div>
                    <p className='text-card'>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
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
        </main>
      </>
    );
  }
}
 
export default Home;