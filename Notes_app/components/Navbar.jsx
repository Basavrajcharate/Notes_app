import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav>
        <div className="logo">NoteX</div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar