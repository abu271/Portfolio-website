import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import './Footer.css';

class Footer extends Component {  
  render() {  
    return (  
      <Navbar sticky='bottom' bg='light' fixed='bottom'>
        <div className='footer__container'>
          <a id='linkedin' target='_blank' href='https://www.linkedin.com/in/abu-darda-528b7a110' >
            <i className='fab fa-linkedin fa-lg'></i>
          </a>
          <a id='github' target='_blank' href='https://github.com/abu271'>
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
  }  
}  

export default Footer;