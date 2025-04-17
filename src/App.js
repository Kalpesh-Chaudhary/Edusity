import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayr from './Components/videoplayer/Videoplayr'


const App = () => {
 
  const[playstate,setplaystate] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/> 
      <div className='container'>
      <Title  subtitle='Our PROGRAM' Title='What We Offer'/>
      <Programs/>
      <About setplaystate={setplaystate}/>
      <Title  subtitle='Gallery' Title='Campus Photos'/>
      <Campus/>
      <Title  subtitle='TESTIMONIALS' Title='What Student Says'/>
     <Testimonial/> 
     <Title  subtitle='CONTACT US' Title='  Get in Touch'/>
     <Contact/>
     <Footer/>
      </div>
      <Videoplayr playstate={playstate} setplaystate={setplaystate}/>
    </div>
  )
}

export default App