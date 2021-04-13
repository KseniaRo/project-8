import axios from 'axios'

//ACTION TYPES

const SET_USER = 'SET_USER'


//ACTION CREATOR
export const setUser = () => {
  return {
    type: SET_USER,
    user
  }
}


//THUNK
export const fetchUser = () => {
  return async (dispatch, getState) => {
    try {
      const { data } = await axios.get('/api/auth/user')
      console.log("this is reducer ", data)
      dispatch(setUser(data))
    } catch (err) {
      console.log(err)
    }
  }
}


const initialState = {}

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return action.payload
    default:
      return state
  }
}
