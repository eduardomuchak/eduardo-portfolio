import React, { Component } from 'react';
import '../styles/Footer.css';

class Footer extends Component {
  render() { 
    return (
      <footer className='footer-container'>
        <span className='card-body'>
          Desenvolvido com ReactJS, Bootstrap e algumas xícaras de café.
        </span>
      </footer>
    );
  }
}
 
export default Footer;