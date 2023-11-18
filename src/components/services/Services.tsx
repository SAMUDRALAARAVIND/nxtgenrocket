import React from 'react'
import "./services.css"

const servicesList = [
  {
    title: "Web Development",
    description: "Our secure web application development solutions align with business long-term strategies. Our team is committed to a collaborative approach that helps customers unlock value and build generation-next capabilities."
  },
  {
    title: "Mobile App Development",
    description: "Develop mobile applications for iPhone, iPad, and Android operating systems using the latest technologies, tools, frameworks, and SDKs.",
  },
  {
    title: "Front End Web Development",
    description: "Our experience in frontend development enables us to deliver quick time-to-market and user-driven outcomes. We use modern frameworks to enable faster development of elements, powerful features, responsive websites, mobility, and layout."
  },
  {
    title: "RSVP",
    description: "Transform your events with a game-changing RSVP system. Powerful RSVP that brings your guest attendance list automatically."
  },
  {
    title: "Digital E-commerce",
    description: "NXTGEN ROCKET offers eCommerce development services with hands-on experience in Magento, Shopify, and Woocommerce."
  },
  {
    title: "Quality Assurance services",
    description: "We offer Quality Assurance services, with well developed QA Process and Agile methodologies."
  },
  {
    title: "Business Portfolio",
    description: "We help businesses to expand in short time span with our services. Such as logo design, Website design, Online marketing, Website update, Company Brochure, and Company profile."
  },
  {
    title: "Online Marketing",
    description: "With researched digital marketing, we will ensure that new customers and clients are able to find your business"
  }
]

const Services = () => {
  return (
    <section id='services'>
      <h2 className='title'>Our Services</h2>
      <p className='description'>We are the best offshore development company willing to create an impact through our forte in delivering highly refined and subtle custom-tailored projects.</p>
      <div className='services-container'>
        {
          servicesList.map((service, index) => {
            return (
              <div className='service-card' key={index}>
                <h3>{service.title}</h3>
                <p>
                  {service.description}
                </p>
              </div>
            );
          })
        }
      </div>
    </section>
  )
}

export default Services