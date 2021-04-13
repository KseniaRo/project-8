import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios'
import { connect } from 'react-redux'
import { Redirect } from "react-router-dom"
import fetchUser from '../../store/user'

const defaultState = {
  password: '',
  email: '',
  redirect: null
}

class Login extends Component {
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
    const login = async () => {
      const res = await axios.post('/api/auth/login', { email: this.state.email, password: this.state.password }, { withCredentials: true })
      // await this.props.loadUser()
      this.setState(defaultState)
      // this.props.loadUser()
    }
    await login()
    this.setState({ redirect: "/home" })
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    return (
      <form onSubmit={this.handleSubmit}>

        <h1 className="h3 mb-3 fw-normal">Please login</h1>
        <input type="email" name="email" className="form-control" required value={this.state.username} onChange={this.handleChange} placeholder="name@example.com" />
        <input type="password" name="password" className="form-control" placeholder="Password" required value={this.state.password} onChange={this.handleChange} />
        <button className="w-100 btn btn-lg btn-primary" type="submit">login</button>

      </form>
    )
  }
}


export default Login


