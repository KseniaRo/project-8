import React, { Component } from 'react'
import ReactDOM from 'react-dom';


const Login = () => {
  return (
    <form>

      <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
      <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
      <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
      <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

    </form>
  )
}

export default Login
