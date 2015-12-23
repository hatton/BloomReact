import { combineReducers } from 'redux'
import { routeReducer } from 'redux-simple-router'
import currentBook from './currentBook'

//NB: the actual field in the store is named according to name we use here when
//introducing the reducer. So, to make 'currentBook' be xyz, we would istead say
// import { default as xyz } from './currentBook' and then use that in this call.
export default combineReducers({
  currentBook,
  router: routeReducer
})
