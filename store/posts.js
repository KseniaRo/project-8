import axios from 'axios'

//ACTION TYPES

const GET_POSTS = 'GET_POSTS'

//ACTION CREATOR

export const getPosts = (posts) => {
  return {
    type: GET_POSTS,
    payload: posts
  }
}

//THUNK
export const fetchPosts = (userId) => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get(`/api/home/${userId}/posts`)
      dispatch(getPosts(data))
    } catch (err) {
      console.log(err)
    }
  }
}


const initialState = []

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload
    default:
      return state
  }
}
