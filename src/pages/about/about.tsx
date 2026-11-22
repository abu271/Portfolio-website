import React from 'react';
import Navigation from '../../components/Navbar/Navigation';
import Footer from '../../components/Footer/Footer';

import './about.css';

const about = () => {
  return (
    <div>
      <Navigation />
      <div className='about__container'>
        <h3 id='title'>ABOUT ME:</h3>
        <div className='about__text'>
          I am a <span className='keyword'>passionate</span>, fullstack software engineer. 
          I enjoy building <span className='keyword'>complex</span> and <span className='keyword'>efficient</span> applications. I work on 
          <span className='keyword'> frontend</span>, <span className='keyword'>backend</span> and <span className='keyword'>infrastructure</span>. When I am not querying databases 
          or aligning pixels, I love tinkering with cars. 
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default about;