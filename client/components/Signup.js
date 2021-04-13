import React from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"


const defaultState = {
  username: '',
  password: '',
  email: '',
  redirect: null
}

class Signup extends React.Component {
  constructor() {
    super()
    this.state = defaultState
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  async handleSubmit(event) {
    event.preventDefault()
    const signup = async () => {
      const res = await axios.post('/api/auth/signup', { username: this.state.username, email: this.state.email, password: this.state.password })

      this.setState(defaultState)
    }
    await signup()
    this.setState({ redirect: "/login" })
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <form onSubmit={this.handleSubmit}>

        <h1 className="h3 mb-3 fw-normal">Please Sign Up</h1>
        <input type="text" name="username" className="form-control" placeholder="username" required value={this.state.username} onChange={this.handleChange} />

        <input type="email" name="email" className="form-control" placeholder="name@example.com" required value={this.state.email} onChange={this.handleChange} />

        <input type="password" name="password" className="form-control" placeholder="Password" required value={this.state.password} onChange={this.handleChange} />

        <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>

      </form>
    )
  }


}


export default Signup
