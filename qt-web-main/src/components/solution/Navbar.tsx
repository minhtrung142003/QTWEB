import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-lg font-bold">Logo Công Ty</div>
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/solution">Solution</Link></li>
        <li><Link to="/showcase">Showcase</Link></li>
        <li><Link to="/marketplace">Marketplace</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </div>
  </nav>
  )
}

export default Navbar