import { connect } from "react-redux";
import { fetchTrail } from "../../actions/trail_actions";
import { withRouter } from "react-router-dom";
import ReviewForm from "./review_form";
import { closeModal } from '../../actions/modal_actions';
import { updateReview } from "../../actions/review_actions";

const mapStateToProps = (state, ownProps) => {
    return (
        {
            review: ownProps.review,
            trail: state.entities.trails[ownProps.match.params.trailId],
            type: 'edit'
        }
    )
}

const mapDispatchToProps = dispatch => ({
    fetchTrail: (trailId) => dispatch(fetchTrail(trailId)),
    closeModal: () => dispatch(closeModal()),
    updateReview: (review) => dispatch(updateReview(review))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));