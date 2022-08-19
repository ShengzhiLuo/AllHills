import React from 'react';
import { Link } from 'react-router-dom';


class TarilOne extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTrail(this.props.match.params.trailId)
    }

    render() {
        const { trail } = this.props;
        return (
            <div>{trail.name}</div>
        )
    }
};


export default TarilOne;