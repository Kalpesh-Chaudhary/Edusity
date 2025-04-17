import React from 'react'
import './Hero.css'
import dark from '../../image/dark.png'

const Hero = () => {
  return (
    <div className='hero container'>
     <div className='hero-text'>
      <h1>We Ensure better education for a better World</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod repellendus eos mollitia atque voluptates nulla? Ab tenetur possimus fugiat delectus!</p>
      <button className='btn' >Explore more    <img src={dark} alt="" /></button>
     </div>


    </div>
  )
}

export default Hero