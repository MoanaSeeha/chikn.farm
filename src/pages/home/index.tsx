import React from 'react';

import Landing from './Landing';
import Info from './Info'

const Home = () => {
  return (
    <div className='absolute h-full w-[100vw] md:-top-1/4'>
      <Landing/>
      <Info/> 
    </div>
  )
};

export default Home;
