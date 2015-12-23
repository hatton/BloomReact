import { createAction, handleActions } from 'redux-actions';

// ------------------------------------
// Constants
// ------------------------------------
export const SELECT_BOOK = 'SELECT_BOOK';

// ------------------------------------
// Actions
// ------------------------------------
// review: value = '' means our default is just empty string
//Wraps an action creator so that its return value is the payload of a Flux Standard Action.
// If no payload creator is passed, or if it's not a function, the identity function is used.
export const selectBook = createAction(SELECT_BOOK, (value = '') => value);

// in ES6, you can just list the name of the property, if they are the same
export const actions = {
  selectBook: selectBook
};

// ------------------------------------
// Reducer
// ------------------------------------
//handleActions(reducerMap, ?defaultState)
const defaultCurrentBookState = "4";
//NB: the state that this sees here is just the part of the state that
//this reducer is concerned with.
export default handleActions({
  SELECT_BOOK: (currentBookFieldOfState, action) => action.payload
  //, something else
}, //map of reducer ids to functions that produce a new state
  defaultCurrentBookState);
