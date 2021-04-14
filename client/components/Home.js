import React, { Component, useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import fetchUser from '../../store/user'
import axios from 'axios'

import AllPosts from './AllPosts'

// const defaultState = {
//   id: null,
//   username: '',
// }

const Home = () => {
  const [user, setUser] = useState('')
  const [id, setId] = useState('')
  useEffect(() => {
    (
      async () => {
        const { data }
          = await axios.get('/api/auth/user')
        if (data) {
          setUser(data.username)
          setId(data.id)
          console.log(user, id)
        }
      }
    )()
  })

  return (
    <>
      {user !== '' ? <div>
        <h2>Hello {user}!</h2>
        <AllPosts id={id} />
      </div> :
        <div>
          <h2>
            This is Home Page</h2>
          <h3>Please signup/login to continue</h3>
        </div>
      }
    </>
  )

}


export default Home



// class Home extends Component {
//   constructor() {
//     super()
//     this.state = defaultState
//   }
//   async componentWillMount() {
//     const { data }
//       = await axios.get('/api/auth/user')
//     this.setState({
//       id: data.id,
//       username: data.username
//     })
//   }

//   render() {

//     return (
//       <div>
//         <h2>Hello {this.state.username}!</h2>
//         <AllPosts id={this.state.id} />
//       </div>

//     )
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     user: state.user,
//     posts: state.posts

//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     loadUser: () =>
//       dispatch(fetchUser()),
//     loadPosts: (id) =>
//       dispatch(fetchPosts(id)),

//   }
// }



// export default connect(mapStateToProps, mapDispatchToProps)(Home)
