import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '../images/not-found(3).png';
import '../styles/NotFound.css';

class ThankYou extends Component {
  render() {
    return (
      <main className='not-found-container'>
        <Link to="/" className='not-found-link'>
          <img src={ NotFoundImage } alt="404 Message" className='not-found-image'/>
        </Link>
        <h1>Erro! A página que você buscou não foi encontrada.</h1>
      </main>
    );
  }
}

export default ThankYou;