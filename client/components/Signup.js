import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios'



const Signup = () => {
  // const [username, setUsername] = useState('')
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')

  // const submit = function (e) {
  //   // e.preventDefault()
  //   const response = async (e) => {
  //     const res = await axios({
  //       method: 'post',
  //       url: '/api/auth/signup',
  //       data: {
  //         username,
  //         password,
  //         email
  //       }
  //     })
  //     return res
  //   }
  //   response()

  //   console.log(response)
  // }

  return (
    <form onSubmit={submit}>

      <h1 className="h3 mb-3 fw-normal">Please Sign Up</h1>
      <input type="username" className="form-control" placeholder="username" required onChange={e => setUsername(e.target.value)} />

      <input type="email" className="form-control" placeholder="name@example.com" required onChange={e => setEmail(e.target.value)} />

      <input type="password" className="form-control" placeholder="Password" required onChange={e => setPassword(e.target.value)} />

      <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>

    </form>
  )
}

export default Signup
