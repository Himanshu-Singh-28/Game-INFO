import React from 'react';
import Hero from '../Hero/Hero';
import './Trending.css';

const Trending = ({items}) => {
  return (
    <div className='tending'>
      <Hero items={items}/>
    </div>
  )
}

export default Trending