import React from 'react'
import login from './login'

const Navbar = () => {
  return (
    <nav>
        <div className="logo">NoteX</div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Services</li>
            <li><a href="login.jsx">Login</a></li>
        </ul>
    </nav>
  )
}

export default Navbar