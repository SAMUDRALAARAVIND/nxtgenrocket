import React  from 'react'
import "./services.css"

const Services = () => {
  return (
        <section id='services'>
          <h2 className='title'>Our Services</h2>
          <p className='description'>We are the best offshore development company willing to create an impact through our forte in delivering highly refined and subtle custom-tailored projects.</p>
          <div className='services-container'>
            <div className='service-card'>
                <h3>Web Development</h3>
                <p>
                Our secure web application development solutions align with business long-term strategies. Our team is committed to a collaborative approach that helps customers unlock value and build generation-next capabilities.
                </p>
            </div>
            <div className='service-card'>
                <h3>Mobile App Development</h3>
                <p>
                Develop mobile applications for iPhone, iPad, and Android operating systems using the latest technologies, tools, frameworks, and SDKs.
                </p>
            </div>
            <div className='service-card'>
                <h3>Front End Web Development</h3>
                <p>
                Our experience in frontend development enables us to deliver quick time-to-market and user-driven outcomes. We use modern frameworks to enable faster development of elements, powerful features, responsive websites, mobility, and layout.
                </p>
            </div>
            <div className='service-card'>
              <h3>RSVP</h3>
              <p>
                Transform your events with a game-changing RSVP system. Powerful RSVP that brings your guest attendance list automatically. 
              </p>
            </div>
          </div>
        </section>
  )
}

export default Services