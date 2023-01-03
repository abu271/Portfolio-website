import React from 'react';
import './home.css';

import {Button} from 'react-bootstrap';

const home = () => {
  return (
    <div className='content-center'>
      <div className='font-style' id='sentence-formatting'>
        <div>
          Hello, I'm <span id='name'>Abu Darda</span>!
        </div>
        <div>
          I'm a Software Engineer
        </div>
      </div>

      <Button variant='primary' size='lg' href='/projects'>
        <span >My work</span>
      </Button>
    </div>
  );
};

export default home;