import { connect } from "react-redux";
import { fetchReviewsByTrail } from '../../actions/review_actions';
import ReviewIndex from "./review_module";

const mSTP = (state) => ({
    reviews: Object.values(state.entities.reviews)
    })
    
const mDTP = (dispatch, ownProps) => ({
    deleteReview: (reviewId) => dispatch(deleteReview(reviewId)),
    fetchReviewsByTrail: () => dispatch(fetchReviewsByTrail(ownProps.match.params.trailId))
})
    
  export default connect(mSTP, mDTP)(ReviewIndex);