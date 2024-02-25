import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { HomeScreen } from './screens/home/index.tsx'
import { Portfolio } from './screens/portfolio/index.tsx'
import Footer from './components/footer/Footer.tsx'

const ScreenWrapper = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<ScreenWrapper />}>
          <Route path="" element={<HomeScreen />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App