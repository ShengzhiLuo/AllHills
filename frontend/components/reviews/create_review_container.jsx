import { connect } from "react-redux";
import { fetchTrail } from "../../actions/trail_actions";
import { withRouter } from "react-router-dom";
import ReviewForm from "./review_form";
import { closeModal } from '../../actions/modal_actions';
import { createReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => ({
    review: {
        user_id: state.session.id,
        trail_id: parseInt(ownProps.match.params.trailId),
        rating: 0,
        description: '',
        trail_date: ''
    },
    trail: state.entities.trails[ownProps.match.params.trailId],
    trailId: parseInt(ownProps.match.params.trailId),
    formType: state.ui.modal.Type,
    user: state.session.currrntUser
})

const mapDispatchToProps = dispatch => ({
    fetchTrail: (trailId) => dispatch(fetchTrail(trailId)),
    closeModal: () => dispatch(closeModal()),
    createReview: (review) => dispatch(createReview(review))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ReviewForm));