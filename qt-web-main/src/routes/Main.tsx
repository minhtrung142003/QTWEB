
import Solution from '@pages/solution/Solution';
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Main: React.FC = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Solution />} />
   
    </Routes>
  </Router>
  )
}

export default Main

