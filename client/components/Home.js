import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import fetchUser from '../../store/user'
import axios from 'axios'

import AllPosts from './AllPosts'

const defaultState = {
  id: null,
  username: '',
}

class Home extends Component {
  constructor() {
    super()
    this.state = defaultState
  }
  async componentWillMount() {
    const { data }
      = await axios.get('/api/auth/user')
    this.setState({
      id: data.id,
      username: data.username
    })
  }

  render() {

    return (
      <div>
        <h2>Hello {this.state.username}!</h2>
        <AllPosts id={this.state.id} />
      </div>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    posts: state.posts

  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadUser: () =>
      dispatch(fetchUser()),
    loadPosts: (id) =>
      dispatch(fetchPosts(id)),

  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home)
