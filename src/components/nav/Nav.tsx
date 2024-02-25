import React, { useState, useEffect } from 'react'
import "./nav.css"
import Logo from "../../images/NextGenRocket.png"
import { Link } from 'react-router-dom'

const Nav = () => {
  const [activeSection, setactiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        document.getElementById("home"),
        document.getElementById("services"),
        document.getElementById("contacts"),
      ]

      sections.forEach((section) => {
        if (section) {
          const top = section.getBoundingClientRect().top;
          const bottom = section.getBoundingClientRect().bottom;

          if (top <= 50 && bottom >= 50) {
            setactiveSection(section.id);
          }

        }
      })

    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])


  return (
    <nav>
      <img src={Logo} className='logo' alt="nxtgenrocket logo" />
      <div className='fr g-10'>
        <a href="#home" className={activeSection === "home" ? "nav-link active-nav" : "nav-link"} >Home</a>
        <a href="#services" className={activeSection === "services" ? "nav-link active-nav" : "nav-link"}>Our Services</a>
        <a href="#contacts" className={activeSection === "contacts" ? "nav-link active-nav" : "nav-link"}>Contact Us</a>
        <Link to="portfolio" className='nav-link'>Portfolio</Link>
      </div>
    </nav>
  )
}

export default Nav