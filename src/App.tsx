import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { HomeScreen } from './screens/home/index.tsx'
import { Portfolio } from './screens/portfolio/index.tsx'
import Footer from './components/footer/Footer.tsx'
import { AllContacts } from './screens/users/index.tsx'
import { notification } from 'antd'

const ScreenWrapper = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

const App = () => {
  const [api, contextHolder] = notification.useNotification();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<ScreenWrapper />}>
          <Route path="" element={<HomeScreen />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/users" element={<AllContacts />} />
        </Route>
      </Routes>
      {contextHolder}
    </BrowserRouter>
  )
}

export default App