import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'


const defaultState = {
  title: '',
  description: '',

}

class CreatePost extends React.Component {
  constructor() {
    super()
    this.state = defaultState
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit(event) {
    event.preventDefault()
    const makePost = async () => {
      const res = await axios.post('/api/home/newPost', { title: this.state.title, description: this.state.description, })
      this.setState(defaultState)

    }
    makePost()

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <ul>
            <li>Title is requiared</li>
          </ul>
          <label htmlFor="title">Post Title:</label>
          <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
        </div>

        <div>
          <label htmlFor="description">Project Description:<span className="warning">Describe your project here</span></label>
          <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
        </div>
        <button className="back" type="submit">Submit</button>
      </form>
    )
  }
}



export default CreatePost
