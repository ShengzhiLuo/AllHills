import React from "react";
import TrailModule from "../trails/trail_module";

class TrailFavorites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            swipe: false
        }

        this.handleSlide = this.handleSlide.bind(this);
    }

    handleSlide() {
        let newState = (this.state.swipe === false) ? true : false;
        this.setState({swipe: newState})
    }

    render() {
        const pane_1 = this.props.trails.slice(0, 4);
        const pane_2 = this.props.trails.slice(4, 8);
        const paneShown = (this.state.swipe === false) ? pane_1 : pane_2;

        return (
            <div className="splash-trails">
                <div className="tiles-outer-container">
                    <div className="splash-favorites">
                        <h1>Trail Favorites</h1>
                    </div>
                    <div className="tiles-container">
                        {paneShown.map((trail, i) => {
                            return <TrailModule key={trail ? trail.id : i} trail={trail ? trail : ""} type='trail' />
                        })}
                        <button onClick={this.handleSlide} className="arrow-button-right"><img src={window.right_arrow} className="arrow" width="22px" height="22px" /></button>
                    </div>
                </div>
            </div>
        );
    }
}

export default TrailFavorites;