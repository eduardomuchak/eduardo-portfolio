import React, { Component } from 'react';
import Header from '../components/Header';
import ContatoImage from '../images/contato(1).png';
import '../styles/Contact.css';

class Contact extends Component {
  render() { 
    return (
      <div className='contact-page'>
        <Header />
        <main className='main-container'>
          <div>
            <img 
            src={ ContatoImage } 
            alt="Imagem de homem olhando para o celular" 
            className='contact-image'
            />
          </div>
          <div className='form-container'>
            <h1 className='title-contact'>Contato</h1>
            <form 
              method="POST" 
              action="https://formsubmit.co/eduardomuchak@gmail.com" 
              className='form-group'
            >
              <input type="hidden" name="_next" value="http://localhost:3000/thankyou"/>
              <div className='input-container'>
                <input 
                  type="text" 
                  name="name" 
                  placeholder='Ada Lovelace'
                  className='input-form'
                  required 
                />
                <span className="input-form-border"/>
              </div>
              <div className='input-container'>
                <input 
                  type="email" 
                  name="email"
                  placeholder='adalovelace@email.com'
                  className='input-form'
                  required
                />
                <span className="input-form-border"/>
              </div>
              <div className='input-container'>
                <input 
                  type="text" 
                  name="phone" 
                  placeholder='(41) 9 9999-9999'
                  className='input-form'
                  required 
                />
                <span className="input-form-border"/>
              </div>
              <div className='input-container'>
                <textarea
                  type="text" 
                  name="message"
                  placeholder='Digite sua mensagem'
                  className='input-form'
                  required
                />
                <span className="input-form-border"/>
              </div>
              <button 
                type="submit"
                className='submit-button'
              >
                Enviar
              </button>
            </form>
          </div>
        </main>
      </div>
    );
  }
}
 
export default Contact;