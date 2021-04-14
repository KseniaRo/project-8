import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'


const defaultState = {
  title: '',
  description: '',
  status: false

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
      const res = await axios.post('/api/home/', { title: this.state.title, description: this.state.description, owner: this.props.id, date: new Date() })
      this.setState(defaultState)
      this.setState({
        status: true
      })

    }
    makePost()

  }

  render() {
    return (
      <div className="container">
        {this.state.status ? (
          <div>
            <h2>You successfully submitted post
         </h2>
            <button className="w-100 btn btn-primary btn-lg" type="submit">Submit another post</button>
          </div>) :
          (<> <h4 className="mb-3">Create new post </h4>

            <form className="needs-validation" noValidate
              onSubmit={this.handleSubmit}>
              <div className="row g-3">

                <div className="col-sm-6">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input className="form-control" type="text" name="title" value={this.state.title} onChange={this.handleChange} required />
                  <div className="invalid-feedback">
                    Title is required.
              </div>
                </div>

                <div className="col-sm-6">
                  <label htmlFor="Description" className="form-label">Description</label>
                  <input className="form-control" type="text" name="description" value={this.state.description} onChange={this.handleChange} required />
                  <div className="invalid-feedback">
                    Description is required.
                  </div>
                </div>

                {/*
                <div className="col-12">
                  <label htmlFor="username" className="form-label">Username</label>
                  <div className="input-group has-validation">
                    <span className="input-group-text">@</span>
                    <input type="text" className="form-control" id="username" placeholder="Username" required />
                    <div className="invalid-feedback">
                      Your username is required.
                    </div>
                  </div>
                </div> */}

                {/* <div className="col-12">
                  <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                  <div className="invalid-feedback">
                    Please enter a valid email address.
                 </div>
                </div> */}

                {/* <div className="col-md-5">
                  <label htmlFor="photo" className="form-label">Photo</label>
                  <select className="form-select" required>
                    <option value="">Choose...</option>
                    <option>Choose your photo here</option>
                  </select>
                  <div className="invalid-feedback">
                    Please select a valid photo.
                 </div>
                </div>
 */}

                {/* <div className="form-check">
                  <input type="checkbox" className="form-check-input" />
                  <label className="form-check-label" htmlFor="checkBox">Checkbox 1</label>
                </div>
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" />
                  <label className="form-check-label" htmlFor="checkBox">Checkbox 2</label>
                </div> */}

                <button className="w-100 btn btn-primary btn-lg" type="submit">Submit post</button>
              </div>
            </form></>)
        }

      </div>

    )
  }
}



export default CreatePost
