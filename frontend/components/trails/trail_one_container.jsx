import TrailOne from './trail_one';
import { connect } from "react-redux";
import { fetchTrail, fetchAllTrails} from "../../actions/trail_actions";
import { withRouter } from 'react-router';
import { fetchReviewsByTrail, deleteReview } from '../../actions/review_actions';
import { openModal } from "../../actions/modal_actions";


const mSTP = (state, ownProps) => {
  return {
    trailId: parseInt(ownProps.match.params.trailId),
    trail: state.entities.trails[ownProps.match.params.trailId],
    trails: Object.values(state.entities.trails),
    // reviews: state.entities.trails[ownProps.match.params.trailId].reviews
    // trail: state.entities.trails[ownProps.match.params.id],
    currentUser: state.session.currentUser,
    currentUser: state.entities.users[state.session.id],
    trail_reviews: Object.values(state.entities.reviews).filter(review => review.trail_id === parseInt(ownProps.match.params.trailId))
  }
}
  
  const mDTP = (dispatch, ownProps) => ({
    fetchTrail: (trailId) => dispatch(fetchTrail(trailId)),
    fetchAllTrails: () => dispatch(fetchAllTrails()),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    fetchReviewsByTrail: () => dispatch(fetchReviewsByTrail(ownProps.match.params.trailId)),
    openModal : type => dispatch(openModal(type))

    // fetchReviewsByTrail: (trailId) => dispatch(fetchReviewsByTrail(trailId))

  })
  
export default withRouter(connect(mSTP, mDTP)(TrailOne));