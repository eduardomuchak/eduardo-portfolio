import React, { Component } from 'react';
import { AiOutlineApi } from 'react-icons/ai';
import { FaGitAlt, FaGithubSquare, FaLinkedin, FaReact } from 'react-icons/fa';
import { SiCss3, SiHtml5, SiJavascript, SiJest, SiRedux, SiTestinglibrary } from 'react-icons/si';
import Header from '../components/Header';
import Working from '../images/working(2).png';
import '../styles/Home.css';

class Home extends Component {
  render() { 
    return (
      <>
        <Header />
        <main>
          <section className='info-container'>
            <div className='introduction-container'>
              <span>Hello World! Meu nome é</span>
              <h1 className='name'>Eduardo Muchak</h1>
              <p>e sou aspirante a Front-End Developer.</p>
              <span>Atualmente sou estudante na <a target="_blank" href='https://www.betrybe.com/' rel="noreferrer" className='external-links'><strong>Trybe</strong></a></span>
            </div>
            <aside>
              <img className='developer-image'src={ Working } alt='Working' />
            </aside>
          </section>
          <section>
            <div>
              <h2 className='title'>Algumas das tecnologias que já tive contato</h2>
              <div className='technologies-container'>
                <div>
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
                <div>
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
                <div>
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
            <br/><br/>
            <div>
              <h2 className='title'>Sobre mim</h2>
              <p>Sou apaixonado por aprendizado. Acredito que podemos melhorar nossas vidas através do conhecimento e da sabedoria. Por toda a minha carreira profissional, sempre acabei sendo uma pessoa curiosa com todo o processo de funcionamento das coisas e com isso, acabei me descobrindo na tecnologia.</p>
            </div>
            <div className='icons-container'>
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
          <br/><br/>
          <section className='projects-container'>
            <h2 className='title'>Conheça alguns dos meus projetos</h2>
            <div className='project-cards'>
              <div className='project-card'>
                <span>Projeto 1</span>
              </div>
              <div className='project-card'>
                <span>Projeto 2</span>
              </div>
              <div className='project-card'>
                <span>Projeto 3</span>
              </div>
              <div className='project-card'>
                <span>Projeto 4</span>
              </div>
              <div className='project-card'>
                <span>Projeto 5</span>
              </div>
              <div className='project-card'>
                <span>Projeto 6</span>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}
 
export default Home;