import { RECEIVE_ALL_TRAILS, RECEIVE_TRAIL } from "../actions/trail_actions";

const trailsReducer = (state = {}, action) => {
  Object.freeze(state);
  const trails = {};
  switch (action.type) {
    case RECEIVE_ALL_TRAILS:
      action.trails.forEach((trail) => {
        trails[trail.id] = trail
      });
      return trails;
    case RECEIVE_TRAIL:
      return Object.assign({}, state, {[action.trail.id]: action.trail})
    default:
      return state;
  }
}

export default trailsReducer;