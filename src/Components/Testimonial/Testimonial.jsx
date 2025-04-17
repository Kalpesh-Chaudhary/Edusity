import React, { useRef } from 'react'
import './Testimonial.css'
import next_icon from '../../image/next-icon.png'
import back_icon from '../../image/back-icon.png'
import user_1 from '../../image/user-1.png'
import user_2 from '../../image/user-2.png'
import user_3 from '../../image/user-3.png'
import user_4 from '../../image/user-4.png'

const Testimonial = () => {

    const slider = useRef();
    let tx = 0 

       const slideForward=()=>{
        if (tx > -50) {
            tx -= 25
        }
        slider.current.style.transform =` translateX(${tx}%)`
       }
       const slidebackward=()=>{
        if (tx < 0) {
            tx += 25
        }
        slider.current.style.transform =` translateX(${tx}%)`
       }


  return (
    <div>
         <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
      <img src={back_icon} alt="" className='back-btn'  onClick={slidebackward}/>
      <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                    </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque beatae velit soluta aperiam laborum repudiandae eos? Voluptas repellat recusandae corrupti suscipit fugit ut blanditiis laboriosam.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                    </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque beatae velit soluta aperiam laborum repudiandae eos? Voluptas repellat recusandae corrupti suscipit fugit ut blanditiis laboriosam.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                    </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque beatae velit soluta aperiam laborum repudiandae eos? Voluptas repellat recusandae corrupti suscipit fugit ut blanditiis laboriosam.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                    </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque beatae velit soluta aperiam laborum repudiandae eos? Voluptas repellat recusandae corrupti suscipit fugit ut blanditiis laboriosam.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Testimonial


