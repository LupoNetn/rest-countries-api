import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import ThemeProvider from './assets/context/ThemeSwitcher'
import ThemeWrapper from './components/ThemeWrapper'
import CountryDetails from './components/CountryDetails'


const App = () => {
 
  return (
    <ThemeProvider>
    <ThemeWrapper>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/country/:countryId' element={<CountryDetails />} />
          </Route>
        </Routes>
      </Router>
    </ThemeWrapper>
    </ThemeProvider>
  )
}

export default App