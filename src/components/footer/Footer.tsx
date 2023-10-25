import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer'>
        <div className="footer-card">
          <h3>Follow Us</h3>
          <div>
            <span>Linkedin</span>
          </div>
          <div>
            <span>Facebook</span>
          </div>
          <div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div>Email: <span className='contact-number'>support@nxtgenrocket.com</span ></div>
              <div>US: <span className='contact-number'>+1 (502) 396-9017</span></div>
              <div>IN: <span className='contact-number'>+91 9381700452</span></div>
              <div>UK: <span className='contact-number'>+91 9726124865</span></div>
            </div>
          </div>
        </div>
        <div className="footer-card">
          <h3>IT Services</h3>
          <span>Web Development</span>
          <span>App Development</span>
          <span>RSVP</span>
          <span>Front End Development</span>
          <span>Digital Marketing</span>
          <span>Cloud Services</span>
        </div>
        <div className="footer-card">
          <h3>Office Locations</h3>
          <div>
            <p className='address'>
              PR Layout 8th Cross Road, Martahalli Bangalore Karnataka 560037.INDIA
            </p>
            <p className='address'>
              339 Wood Fall Ct, North Augusta, SC 29860. USA
            </p>
            <p className='address'>
              45 Harold street, Leeds, LS6 1PL. UK
            </p>
          </div>
        </div>
      </div>
      <p style={{textAlign:'center', color: '#6CCEED'}}>Copyight &copy; 2023 NxtGen Rocket . All rights reserved</p>
    </footer>
  )
}

export default Footer