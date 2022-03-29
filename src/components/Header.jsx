import React, { Component } from 'react';
import { FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

class Header extends Component {
  render() { 
    return (
      <header>
        <nav className='header-container'>
          <div className="col-1">
            <Link to="/" className="logo"><FaCode/></Link>
          </div>
          <div className="col-11">
            <ul className="nav justify-content-end">
              <li className="nav-item">
                <Link className="nav-link page-links" aria-current="page" to="/contato">Contato</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link page-links" to="/projetos">Projetos</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
 
export default Header;