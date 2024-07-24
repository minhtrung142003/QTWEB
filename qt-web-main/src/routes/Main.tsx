
import MarketPlace from '@pages/marketplace/MarketPlace';
import Showcase from '@pages/showcase/ShowCase';
import Solution from '@pages/solution/Solution';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Main: React.FC = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Solution />} />
      <Route path="/showcase" element={<Showcase/>} />
      <Route path="/marketPlace" element={<MarketPlace/>} />
    </Routes>
  </Router>
  )
}

export default Main

