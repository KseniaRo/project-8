import { createStore, applyMiddleware, combineReducers, } from 'redux';
import myReducer from './reducer'
import authReducer from './auth'
// import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'

import user from './user'
import singlePost from './singlePost'
import posts from './posts'


const reducer = combineReducers({
  user,
  singlePost,
  posts,
  // author

})

const store = createStore(
  reducer,
  applyMiddleware(
    applyMiddleware,
    createLogger()
  )
);

export default store;
