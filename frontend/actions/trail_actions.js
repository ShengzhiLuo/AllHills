import * as TrailAPIUtil from "../util/trail_api_util"

export const RECEIVE_TRAIL = "RECEIVE_TRAIL"
export const RECEIVE_ALL_TRAILS = "RECEIVE_ALL_TRAILS"


const receiveTrail = trail => ({
    type: RECEIVE_TRAIL,
    trail
  })
  
  const receiveAllTrails = trails => ({
    type: RECEIVE_ALL_TRAILS,
    trails
  })
  
  export const fetchAllTrails = () => dispatch => TrailAPIUtil.fetchTrails()
    .then(trails => dispatch(receiveAllTrails(trails)))
  
  export const fetchTrail = (trailId) => dispatch => TrailAPIUtil.fetchTrail(trailId)
    .then(trail => dispatch(receiveTrail(trail)))