import React from 'react';
import { connect } from "react-redux";
import { closeModal } from "../../actions/modal_actions";
import CreateRevContainer from '../reviews/create_review_container';
import EditRevContainer from '../reviews/edit_review_container';

function Modal ({ modal, closeModal }) {
    if (!modal) {
        return null;
    }

    let component;

    switch(modal.type) {
        case 'create':
            component = <CreateRevContainer />
            break;
        case 'edit':
            component = <EditRevContainer review={modal.review} />
        default:
            break;
    }

    return (
        <div className="modal-background" onClick={closeModal}>
        <div className="modal-child">
          { component }
        </div>
      </div>
    )
}

const mapStateToProps = state => ({
    modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);