import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
  CLEAR_ERRORS
  } from '../actions/session_actions';
  
  export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
      case RECEIVE_CURRENT_USER:
        return [];
      case RECEIVE_SESSION_ERRORS:
        if (action.errors) return action.errors;
      case CLEAR_ERRORS:
        return [];
      default:
        return state;
    }
  };