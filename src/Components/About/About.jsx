import React from 'react'
import './About.css'
import about_img from '../../image/about.png'
import play_icon from '../../image/play-icon.png'


const About = ({setplaystate}) => {
  return (
    <div className='about'>
        <div className="about-lift">
        <img src={about_img} alt=""  className='about-img'/>
        <img src={play_icon} alt=""  className='play-icon' onClick={()=>{
          setplaystate(true)
        }} />
        </div>
        <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptas, eius dolorem nostrum aliquam nam aut sint delectus neque accusantium quasi, placeat iste? Nam, temporibus aliquam? Sit error suscipit vero pariatur ullam earum quo? Impedit repudiandae placeat explicabo vitae ea!</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus obcaecati aut quia itaque officia tempora excepturi iste assumenda delectus nemo.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias totam minima repudiandae. Fuga odio dolor delectus reiciendis incidunt minus ea ducimus! Accusantium officia culpa et earum quis ipsam debitis, veniam laborum dolorum dolor voluptas saepe, consequatur, fugiat rerum quidem cum!</p>
        </div>
    </div>
  )
}

export default About