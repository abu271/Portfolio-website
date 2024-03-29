import React from 'react';
import { Navbar } from 'react-bootstrap';
import './Footer.css';

const Footer = () => { 
  return (
    <Navbar className='fixed-bottom' expand='lg' bg='light'>
      <div className='footer__container'>
        <a id='linkedin' target='_blank' href='https://www.linkedin.com/in/abu-darda-528b7a110' rel='noreferrer'>
          <i className='fab fa-linkedin fa-lg'></i>
        </a>
        <a id='github' target='_blank' href='https://github.com/abu271' rel='noreferrer'>
          <i className='fab fa-github fa-lg'></i>
        </a>
      </div>
      <div id='copyright__container'>
        <span className='footer__text'>Abu Darda</span> 
        <i id='copyright' className='far fa-copyright fa-xs'></i>
        <span className='footer__text'>{new Date().getFullYear()}</span> 
      </div>
    </Navbar> 
  );  
}; 

export default Footer;