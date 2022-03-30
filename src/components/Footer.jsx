import React, { Component } from 'react';
import '../styles/Footer.css';

class Footer extends Component {
  render() { 
    return (
      <footer>
        <span className='col'>
          Desenvolvido com ReactJS, Bootstrap e algumas xícaras de café.
        </span>
      </footer>
    );
  }
}
 
export default Footer;