import React, { useState } from 'react';
import { GridLoader } from 'react-spinners';
import './Loader.css';
 
const Loader = () => {
  const [loading] = useState(true);

  return (
    <div className='loader'>
      <GridLoader
        size={15}
        color={'#0cbfe9'}
        loading={loading}
      />
    </div>
  );
};

export default Loader;