import React from 'react';
import { AiOutlineApi } from 'react-icons/ai';
import { FaGitAlt, FaGithubSquare, FaLinkedin, FaReact } from 'react-icons/fa';
import { SiCss3, SiHtml5, SiJavascript, SiJest, SiRedux, SiTestinglibrary } from 'react-icons/si';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Working from '../images/working(2).png';
import '../styles/Home.css';
import Projects from '../data';

function Home() {
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
            <figure className="figure">
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
            {
              Projects.slice(0, 3).map((project, index)=> <Card project={project} key={index}/>)
            }
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;