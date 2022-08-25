import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import trailsReducer from "./trails_reducer";
import reviewReducer from "./reviews_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  trails: trailsReducer,
  reviews: reviewReducer
});

export default entitiesReducer;