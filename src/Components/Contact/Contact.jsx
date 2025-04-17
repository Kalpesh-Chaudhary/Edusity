import React from 'react'
import './Contact.css'
import msg_icon  from '../../image/msg-icon.png'
import mail_icon  from '../../image/mail-icon.png'
import phone_icon  from '../../image/phone-icon.png'
import location_icon  from '../../image/location-icon.png'
import White_arrow from '../../image/white-arrow.png'


const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "e7817f60-fa55-4c38-a71e-a4b14dc79e2a");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='Contact'>
        <div className='Contact-col' >
            <h3>Send us a message  <img src={msg_icon} alt="" /> </h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga repellendus dolorem excepturi modi ut quaerat, dicta praesentium inventore iusto unde voluptatem eos corporis error aliquid?</p>
            <ul>
                <li> <img src={mail_icon} alt="" /> kalpeshchaudhary713@gmail.com</li>
                <li> <img src={phone_icon} alt="" />  7433850443</li>
                <li> <img src={location_icon} alt="" /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, labore?</li>
            </ul>
        </div>
    <div className="Contact-col">
        <form onSubmit={onSubmit}>
            <label > Your Name</label>
            <input type="text" name='name' placeholder='Enter Your Name'  required/>
            <label >Phone Number</label>
            <input type="text" name='phone' placeholder='Enter Your Phone Number' required />
            <label > Write Your message here</label>
            <textarea name="message" rows={6} placeholder='Enter Your message' required></textarea>
            <button type='submit' className='btn dark-btn'> Submit now <img  src={White_arrow} alt="" /> </button>
        </form>
        <span>{result}</span>
    </div>
    </div>
  )
}

export default Contact