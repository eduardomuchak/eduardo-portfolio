import React from 'react';
import { AiOutlineApi, AiFillApi } from 'react-icons/ai';
import { FaGitAlt, FaReact, FaFigma} from 'react-icons/fa';
import { SiCss3, SiHtml5, SiJavascript, SiJest, SiRedux, SiTestinglibrary, SiBootstrap, SiDocker, SiTailwindcss } from 'react-icons/si';
import { DiNpm } from 'react-icons/di';
import { GrMysql } from 'react-icons/gr';

function Technologies() {
  return (
    <div className='section-container container'>
      <h2 className='title'>Algumas das tecnologias que já tive contato</h2>
      <div className='technologies-container row align-items-start'>
        
        <div className='col-md-4'>
          <div className='technology'>
            <span className='icon'><SiBootstrap/></span>
            <span>Bootstrap 5</span>
          </div>
          <div className='technology'>
            <span className='icon'><AiFillApi/></span>
            <span>Context API</span>
          </div>
          <div className='technology'>
            <span className='icon'><AiOutlineApi/></span>
            <span>Consumo de API's</span>
          </div>
          <div className='technology'>
            <span className='icon'><SiCss3/></span>
            <span>Css</span>
          </div>
          <div className='technology'>
            <span className='icon'><SiDocker/></span>
            <span>Docker</span>
          </div>
          <div className='technology'>
            <span className='icon'><FaFigma/></span>
            <span>Figma</span>
          </div>
        </div>

        <div className='col-md-4'>
          <div className='technology'>
            <span className='icon'><FaGitAlt/></span>
            <span>Git</span>
          </div>
          <div className='technology'>
            <span className='icon'><SiHtml5/></span>
            <span>Html</span>
          </div>
          <div className='technology'>
            <span className='icon'><SiJavascript/></span>
            <span>JavaScript</span>
          </div>
          <div className='technology'>
            <span className='icon'><SiJest/></span>
            <span>Jest</span>
          </div>
          <div className='technology'>
            <span className='icon'><GrMysql/></span>
            <span>MySQL</span>
          </div>
          <div className='technology'>
            <span className='icon'><DiNpm/></span>
            <span>Node Package Manager (NPM)</span>
          </div>         
        </div>

        <div className='col-md-4'>
          <div className='technology'>
            <span className='icon'><FaReact/></span>
            <span>React</span>
          </div>
          <div className='technology'>
            <span className='icon'><SiTestinglibrary/></span>
            <span>React Testing Library</span>
          </div>
          <div className='technology'>
            <span className='icon'><SiRedux/></span>
            <span>Redux</span>
          </div>
          <div className='technology'>
            <span className='icon'><SiTailwindcss/></span>
            <span>Tailwind CSS</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Technologies;