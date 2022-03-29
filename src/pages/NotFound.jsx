import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '../images/not-found(3).png';
import '../styles/NotFound.css';

class NotFound extends Component {
  render() {
    return (
      <main className='not-found-container'>
        <Link to="/" className='not-found-link'>
          <div className='mt-5'>
            <figure class="figure">
              <img 
                className='developer-image figure-img img-fluid'
                src={ NotFoundImage }
                alt="404 Message"
              />
            </figure>
          </div>
        </Link>
        <h1>Opa! Parece que a página que você buscou não foi encontrada.</h1>
      </main>
    );
  }
}

export default NotFound;