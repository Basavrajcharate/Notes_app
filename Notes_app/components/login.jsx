import React from 'react'
import './Login.css'
import Footer from './Footer'

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
    <section>
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" placeholder='Username' />
          </div>    
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder='Password' />  
          </div>
          <button type="submit"><a href="/">Login</a></button>
        </form>
      </div>
    </div>
    </section>
    <Footer />
    </>
  )
}

export default Login