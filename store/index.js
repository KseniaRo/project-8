import { createStore, applyMiddleware } from 'redux';

import authReducer from './auth'
// import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'


const reducer = combineReducers({
  user,
  // singleStory,
  // authors,
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
