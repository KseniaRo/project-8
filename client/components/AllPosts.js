import React, { Component, useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'

import SinglePost from './SinglePost'
import CreatePost from './CreatePost'
import fetchPosts from '../../store/posts'
import axios from 'axios'



const AllPosts = (props) => {
  const [posts, setposts] = useState('')
  useEffect(() => {
    (
      async () => {
        const { data }
          = await axios.get(`/api/home/${props.id}/posts/`)
        if (data) {
          setposts(data.posts)
          console.log(posts)
        }
      }
    )()
  })
  return (
    <div className="container">
      {posts ? (
        posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>
              {post.description}
            </p>
          </div>
          // <div key={post.id}>
          //   <Link to={`/home/posts/${post.id}`} >
          //     <h3>{post.title}</h3>
          //     <p>
          //       {post.description}
          //     </p>
          //   </Link>
          // </div>
        ))
      ) : (
          <div> You do not have any posts yet...
          </div>)}

      <div> <CreatePost id={props.id} /></div>



    </div>
  )
}


export default AllPosts;


// class AllPosts extends Component {
//   constructor(props) {
//     super()
//   }
//   componentDidMount() {
//     // this.props.loadPosts(this.props.id)
//   }
//   render() {
//     return (
//       <div> {this.state ? (
//         this.state.posts.map(post => (
//           <div key={post.id}>
//             <Link to={`/home/posts/${post.id}`} >
//               <h3>{post.title}</h3>
//               <p>
//                 {post.description}
//               </p>
//             </Link>
//           </div>
//         ))
//       ) : (<div> You do not have any posts yet...</div>)}
//         <h3> CREATE NEW POST:</h3>

//         <div> <CreatePost /></div>

//       </div>
//     )
//   }

// }


// // export default AllPosts

// const mapState = (state) => {
//   return {
//     posts: state.posts
//   };
// };

// const mapDispatch = (dispatch) => {
//   return {
//     loadPosts: (userId) => dispatch(fetchPosts(userId))

//   };
// };

// export default connect(mapState, mapDispatch)(AllPosts);
