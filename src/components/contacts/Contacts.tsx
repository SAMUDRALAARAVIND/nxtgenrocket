import React , {useState} from 'react'
import "./contacts.css"
import EmailUs from "./widgets/EmailUs.tsx" 
import Lottie from "lottie-react"

import meet from "../../images/meet.json"

const Contacts = () => {
  const [sentMsg, setsentMsg] = useState(false);
  return (
    <div id='contacts' className='contacts-container'>
        <div className="contacts-heading">
          <h5>Get in Touch</h5> 
          <h2>Contact Us</h2>
      </div>
      {
        !sentMsg 
         ? <section className="contacts-section">
              <div className="contacts-lottie">
                <Lottie animationData= {meet} />
              </div>
              <div className="contacts-body">
                <EmailUs setsentMsg = {setsentMsg} />
              </div>
            </section>
        : <section  className="sent-msg-section">
            <div className="sent-email">
              <Lottie animationData= {meet} />
            </div>
            <div className="sent-info">
              <h3> Thank you for contacting us . You will recieve a call in a short time </h3>
            </div>

          </section>  
      }
    </div>
  )
}

export default Contacts