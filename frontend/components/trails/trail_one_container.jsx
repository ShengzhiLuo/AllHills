import TrailOne from './trail_one';
import { connect } from "react-redux";
import { fetchTrail } from "../../actions/trail_actions";
import { withRouter } from 'react-router';


const mSTP = (state, ownProps) => ({
    trailId: parseInt(ownProps.match.params.trailId),
    trail: state.entities.trails[ownProps.match.params.trailId],
    // currentUser: state.session.currentUser,
    // reviews: Object.values(state.entities.reviews)
  })
  
  const mDTP = (dispatch, ownProps) => ({
    fetchTrail: (trailId) => dispatch(fetchTrail(trailId)),
    // fetchUser: (userId) => dispatch(fetchUser(userId)),
    // deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    // fetchAllReviews: () => dispatch(fetchAllReviews(ownProps.match.params.trailId))
  })
  
export default withRouter(connect(mSTP, mDTP)(TrailOne));