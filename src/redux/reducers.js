import {
  combineReducers
} from 'redux';
import {
  routerReducer
} from 'react-router-redux'

// import {
//   reducer as login
// } from '$pages/login'

const rootReducers = combineReducers({
  routing: routerReducer,
  // login
})

export default rootReducers