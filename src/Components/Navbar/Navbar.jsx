import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../image/logo.png'
// import { Link } from 'react-router-dom'   
import { Link, Element } from 'react-scroll';
import menu_icon from '../../image/menu-icon.png'

const Navbar = () => {
      const[sticky,setsticky]=useState(false)

      useEffect(()=>{
          window.addEventListener('scroll',()=>{
            window.scrollY > 50 ? setsticky(true) : setsticky(false)
          })
      })


      const [mobilMenu,setMobilMenu]=useState(false)

       const toggleMenu=()=>{
          mobilMenu ? setMobilMenu(false) : setMobilMenu(true); 
       }



  return (
    <nav className={`container ${sticky ? 'dark-nav': 'color'}`}>
        <img src={logo} alt=""  className='logo'/>
        <ul className={mobilMenu?'':"hide-mobile-menu"}>
            <li><Link to='hero' smooth={true} offset={0} duration={700}>Home</Link> </li>
            <li> <Link to='programs' smooth={true} offset={-260} duration={700}>Program </Link></li>
            <li>  <Link to='about' smooth={true} offset={-150} duration={700}> About us</Link> </li>
            <li>  <Link to='campus' smooth={true} offset={-260} duration={700}>Campus</Link></li>
            <li>  <Link to='testimonials' smooth={true} offset={-260} duration={700}>testimonials</Link></li>
            <li><Link to='Contact' smooth={true} offset={-260} duration={700}
            className='btn'>Contact us</Link></li>
        </ul>
        <img src={menu_icon} alt=""  className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar