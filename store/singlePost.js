import axios from 'axios'

//ACTION TYPES
const GET_POST = 'GET_POST'
//ACTION CREATOR
export const getPost = (post) => {
  return {
    type: GET_POST,
    post
  }
}
//THUNK
export const fetchPost = (postId) => {
  return async (dispatch, getState) => {
    try {

      const { data } = await axios.get(`/api/home/posts/${postId}`)
      dispatch(getPost(data))
    } catch (err) {
      console.log(err)
    }
  }
}
const initialState = {}
//REDUCER
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return action.story
    default:
      return state
  }
}
