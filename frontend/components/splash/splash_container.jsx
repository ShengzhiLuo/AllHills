import { connect } from 'react-redux';

import Splash from './splash';

import { fetchAllTrails } from "../../actions/trail_actions";

const mapStateToProps = (state) => {
  return {
    currentUser: state.entities.users[state.session.id],
    trails: Object.values(state.entities.trails),
  };
};

const mapDispatchToProps = dispatch => ({
  fetchTrails: () => dispatch(fetchAllTrails()),
  // fetchParks: () => dispatch(fetchParks())
});



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);