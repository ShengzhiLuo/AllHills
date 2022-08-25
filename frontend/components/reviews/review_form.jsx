import React from 'react';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            review: this.props.review
        }
    }
}


export default ReviewForm;


