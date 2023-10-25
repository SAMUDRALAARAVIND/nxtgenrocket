import React from 'react'
import Home from "./components/home/Home.tsx"
import Services from "./components/services/Services.tsx"
import Contacts from "./components/contacts/Contacts.tsx"
import Nav from "./components/nav/Nav.tsx"
import Footer from './components/footer/Footer.tsx'

const App = () => {
  
  return (
    <>
        <Home/>
        <Nav/>
        <main>
          <Services/>
          <Contacts/>
        </main>
        <Footer/>
    </>
  )
}

export default App