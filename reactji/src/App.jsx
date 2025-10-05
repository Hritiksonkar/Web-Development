import React, { useEffect, useRef, useState, createContext } from 'react'
import Navbar from './component/navbar'
import Home from './component/Home'
import Profile from './component/profile'
import NotFound from './component/not_found'
import ProfileDetail from './component/profileDetail'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Create context
export const SearchContext = createContext();
export const ThemeContext = createContext();

const App = () => {
  const [searchtext, setsarchtext] = useState("");
  const [dark, setDark] = useState(false);

  const toggleDark = () => setDark(d => !d);

  return (
    <ThemeContext.Provider value={{ dark, toggleDark }}>
      <SearchContext.Provider value={{ searchtext, setsarchtext }}>
        <div className={dark ? 'dark-bg' : ''}>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/profile/:username" element={<ProfileDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </div>
      </SearchContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App

