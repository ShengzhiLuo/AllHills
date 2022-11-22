import React from 'react';
import ReactStars from "react-rating-stars-component";
import { MdClose } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            review: this.props.review,
            trail: this.props.trail,
            step: 1
        }

        this.handleDate = this.handleDate.bind(this);
        this.handleRating = this.handleRating.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.toggleStep = this.toggleStep.bind(this);
        this.todaysDate = this.todaysDate.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        if (!this.props.review.id) {
            let newState = this.state;
            newState.review.trail_date = this.todaysDate();;
            this.setState(newState);
        }

        this.props.fetchTrail(this.props.trailId);
    }

    handleDate(e) {
        let newState = this.state;
        newState.review.trail_date = e.target.value;
        this.setState(newState);
    }

    handleRating(e) {
        // return e => this.setState({ [field]: e.currentTarget.value })
        let newState = Object.assign({}, this.state);
        newState.review.rating = e.target.id;
        this.setState(newState);
    }

    closeModal() {
        this.props.closeModal()
    }

    toggleStep(e) {
        (e.target.value === "next") ? this.setState({step: 2}) : this.setState({step: 1});
    }

    handleDescription(e) {
        let newState = this.state;
        newState.review.description = e.target.value;
        this.setState(newState);
    }
    
    todaysDate() {
        const today = new Date;
        let dd = today.getDate();
        let mm = today.getMonth() + 1;
        let yyyy = today.getFullYear();

        if (mm < 10) {
            mm = '0' + mm.toString();
        }

        if (dd < 10) {
            dd = '0' + dd.toString();
        }
        
        let maxDate = yyyy + '-' + mm + '-' + dd;
        return maxDate;
    }

    handleSubmit() {
        if (!this.state.review.id) {
            this.props.createReview(this.state.review)
                .then(this.props.closeModal());
        } else {
            this.props.updateReview(this.state.review)
                .then(this.props.closeModal());
        }
    }

    render() {
        const activities = ['Backpacking', 'Bird watching', 'Bike touring', 'Camping', 'Cross-country skiing', 'Fishing', 'Hiking', 'Horseback riding', 'Mountain biking', 'OVH/Off-road driving', 'Paddle sports', 'Road biking', 'Rock climbing', 'Scenic driving', 'Snowshoeing', 'Skiing', 'Running', 'Via ferrata', 'Walking'] 
        const conditions = ['Great!', 'Blowdown', 'Bridge out', 'Bugs', 'Closed', 'Fee', 'Flooded', 'Icy', 'Muddy',  'No shade', 'Off trail', 'Overgrown', 'Private property', 'Rocky', 'Scramble', 'Washed out', 'Snow']
        let hover = 0;
        const { rating, trail_date } = this.state.review;
        const reviewStep = (this.state.step === 1) ?
            <div className="step-container">
                <div className="x-out">
                    <a onClick={this.closeModal}><MdClose style={{fontSize: "30px"}}/></a>
                </div>
                <div className="step-body">
                    <h1 className="bold overflow">{this.state.trail?.name}</h1>
                    <span className="step">Step 1 of 2</span>
                    <div className='stars'>
                        <label id="star">
                            <input type="radio" value="1" name="rating"
                            onMouseOver={() => { hover = 1 }} onMouseOut={(e) => { hover = 0 }} 
                            onClick={this.handleRating} />
                            {<FaStar key='1' size={30} 
                            color={(hover || this.state.rating) >= 1 ? 'gold' : 'gray'} />}
                            </label>
                        <label id="star">
                            <input type="radio" value="2" name="rating"
                            // onMouseOver={() => { hover = 2 }} onMouseOut={() => { hover = 0 }} 
                            onClick={this.handleRating} />
                            {<FaStar key='2' size={30} 
                            color={(hover || this.state.rating) >= 2 ? 'gold' : 'gray'} />}
                            </label>
                        <label id="star">
                            <input type="radio" value="3" name="rating"
                            // onMouseOver={() => { hover = 3 }} onMouseOut={() => { hover = 0 }} 
                            onClick={this.handleRating} />
                            {<FaStar key='3' size={30} 
                            color={(hover || this.state.rating) >= 3 ? 'gold' : 'gray'} />}
                            </label>
                        <label id="star">
                            <input type="radio" value="4" name="rating"
                            // onMouseOver={() => { hover = 4 }} onMouseOut={() => { hover = 0 }} 
                            onClick={this.handleRating} />
                            {<FaStar key='4' size={30} 
                            color={(hover || this.state.rating) >= 4 ? 'gold' : 'gray'} />}
                            </label>
                        <label id="star">
                            <input type="radio" value="5" name="rating"
                            // onMouseOver={() => { hover = 5 }} onMouseOut={() => { hover = 0 }} 
                            onClick={this.handleRating} />
                            {<FaStar key='5' size={30} 
                            color={(hover || this.state.rating) >= 5 ? 'gold' : 'gray'} />}
                        </label>
                    </div>
                    <textarea onChange={this.handleDescription} value={this.state.review.description} placeholder="Give back to the community. Share your thoughts about the trail so others know what to expect.">
                    </textarea>
                </div>
                <div className="review-button-container">
                <button onClick={this.toggleStep} value="next" id="next-button" className="review-button" disabled={!rating}>Next</button>
                </div>
            </div>
        :
            <div className="step-container">
                <div className="x-out">
                    <a onClick={this.closeModal}><MdClose style={{fontSize: "30px"}}/></a>
                </div>
                <div className="step-body">
                    <h1 className="bold overflow">{this.state.trail.name}</h1>
                    <span className="step">Step 2 of 2</span>
                    <div className="rev-date-act">
                        <label htmlFor="activity">
                            Activity Type
                            <select id="activity" defaultValue={activity}
                                // onChange={this.updateActivity}
                            >
                                {activities.map((act, idx) => {
                                    return (
                                        <option value={act} key={idx}>{act}</option>
                                    )
                                }
                                    
                                )}
                            </select>
                        </label>
                    
                    <input type="date" onChange={this.handleDate} defaultValue={trail_date} max={this.todaysDate()} />
                    </div>
                    <h2>Trail Conditions</h2>
                    <div className="rev-conditions-container">
                        {conditions.map((condition, idx) => <button
                            // onClick={this.toggleCondition}
                            key={idx}
                            // className={(stateConditions.includes(condition)) ? "condition-selected" : "condition-unselected"}
                            className = "condition-unselected"
                            // value={condition.name}
                        >{condition}</button>)}
                    </div>
                </div>
                <div className="review-buttons-container-2">
                    <button onClick={this.toggleStep} value="back" className="review-button-back">Back</button>
                    <button onClick={this.handleSubmit} className="review-button">Submit</button>
                </div>
        
            </div>

    }


}


export default ReviewForm;


