import React, { useState } from 'react'
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
      <section className="contacts-section">
        <div className="contacts-lottie">
          <Lottie animationData={meet} />
        </div>
        <div className="contacts-body">
          <EmailUs />
        </div>
      </section>
    </div>
  )
}

export default Contacts