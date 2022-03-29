import React, { Component } from 'react';
import Header from '../components/Header';
import Contato1 from '../images/contato(1).png';
import Contato2 from '../images/contato(2).png';
import Contato3 from '../images/contato(3).png';
import NotFound from '../images/not-found.png';
import Working from '../images/working(2).png';
import Working2 from '../images/working.png';

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
      </>
    );
  }
}
 
export default Projects;