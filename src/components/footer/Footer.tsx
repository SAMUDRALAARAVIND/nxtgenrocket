import React from 'react'
import "./footer.css"
import India from "../../images/india.svg";
import Usa from "../../images/us.svg"
import Uk from "../../images/uk.svg"

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
              <span className='contact-number'>support@nxtgenrocket.com</span >
              {/* <div>US: <span className='contact-number'>+1 (502) 396-9017</span></div>
              <div>IN: <span className='contact-number'>+91 9381700452</span></div>
              <div>UK: <span className='contact-number'>+91 9726124865</span></div> */}
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
            <div className='address'>
              <p className='fr aic g-10'>
                <img src={India} alt="India flag" className='flag' />
                <span>India</span>
              </p>
              <p>
                PR Layout 8th Cross Road, Martahalli Bangalore Karnataka 560037.INDIA
              </p>
              <a href="tel:+919381700452">+91 9381700452</a>
            </div>
            <div className='address'>
              <p className='fr ai-c g-10'>
                <img src={Usa} className='flag' alt="USA flag" />
                <span>United States of America</span>
              </p>
              <p>339 Wood Fall Ct, North Augusta, SC 29860. USA</p>
              <a href="tel:+15023969017">+1 (502) 396-9017</a>
            </div>
            <div className='address'>
              <p className='fr ai-c g-10'>
                <img src={Uk} alt="UK flag" className='flag' />
                <span>United Kingdom</span>
              </p>
              <p>
                45 Harold street, Leeds, LS6 1PL. UK
              </p>
              <a href="tel:+447774614970">+44 7774614970</a>
            </div>
          </div>
        </div>
      </div>
      <p style={{ textAlign: 'center', color: '#6CCEED' }}>Copyight &copy; 2023 NxtGen Rocket . All rights reserved</p>
    </footer>
  )
}

export default Footer