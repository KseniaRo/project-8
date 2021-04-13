import { createStore, applyMiddleware, combineReducers, } from 'redux';
import myReducer from './reducer'
import authReducer from './auth'
// import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger'


const reducer = combineReducers({
  // user,
  // singleStory,
  // authors,
  // author
  myReducer
})

const store = createStore(
  reducer,
  applyMiddleware(
    applyMiddleware,
    createLogger()
  )
);

export default store;
