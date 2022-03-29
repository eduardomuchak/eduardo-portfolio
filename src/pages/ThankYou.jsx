import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Contato from '../images/contato(2).png';
import '../styles/NotFound.css';

class ThankYou extends Component {
  render() {
    return (
      <main className='not-found-container'>
        <Link to="/" className='not-found-link'>
          <div className='mt-5'>
            <figure class="figure">
              <img 
                className='developer-image figure-img img-fluid'
                src={ Contato }
                alt="Mulher olhando para computador"
              />
            </figure>
          </div>
        </Link>
        <h1>Obrigado por entrar em contato!</h1>
        <h3>Assim que possível entro em contato contigo através do email cadastrado.</h3>
      </main>
    );
  }
}

export default ThankYou;