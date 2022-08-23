import React from "react";

class Map extends React.Component{
    constructor(props) {
        super(props);
        // this.lat = this.props.trail.latitude;
        // this.lng = this.props.trail.longitude
    }
    componentDidMount() {
        const mapOptions = {
            center: {
                lat: 48.67945,
                lng:-113.81956
            },
            zoom: 10
        };

        this.map = new google.maps.Map(this.mapNode, mapOptions);
    };

    render() {
        return (
            <div ref={ map => this.mapNode = map } id='map'></div> 
        )
    }
}


export default Map;