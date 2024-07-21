
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
   
    </Routes>
  </Router>
  )
}

export default Main

