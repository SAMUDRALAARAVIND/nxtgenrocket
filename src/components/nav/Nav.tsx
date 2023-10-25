import React , {useState , useEffect} from 'react'
import "./nav.css"
import {BiHome} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {AiOutlineMessage} from "react-icons/ai"

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
     if(section){
       const top = section.getBoundingClientRect().top;
       const bottom = section.getBoundingClientRect().bottom;
       
       if(top <= 50 && bottom >=50 ){
        //  if(section.id != activeSection ){
          //  console.log(section.id)
           setactiveSection(section.id);
        //  }
       }
  
     }
   })

}

window.addEventListener("scroll" , handleScroll );

  return () => {
    window.removeEventListener("scroll" , handleScroll);
  }
}, [])


  return (
    <nav>
      <a href="#home"  className={activeSection === "home" ? "nav-link active-nav" : "nav-link" } ><BiHome/></a>
      <a href="#services"   className={activeSection === "services" ? "nav-link active-nav" : "nav-link"}><RiServiceLine/></a>
      <a href="#contacts"  className={activeSection === "contacts" ? "nav-link active-nav" : "nav-link"}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav