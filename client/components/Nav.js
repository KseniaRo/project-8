import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom'

import axios from 'axios'


const Nav = () => {
  const [user, setUser] = useState('')
  useEffect(() => {
    (
      async () => {
        const { data }
          = await axios.get('/api/auth/user')
        if (data) {
          setUser(data.name)
        }
      }
    )
  })
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container-fluid">
        <Link to='/home' className="navbar-brand" >Home</Link>
        <div >
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item active">
              <Link to='/login' className="nav-link" >Login</Link>
            </li>
            <li className="nav-item active">
              <Link to='/signup' className="nav-link" >Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
