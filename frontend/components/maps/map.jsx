import React from "react";

class TrailMap extends React.Component{
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.props.fetchTrail(this.props.trailId).then(trail => {
            const mapOptions = {
                center: {
                    lat: trail.trail.latitude,
                    lng: trail.trail.longitude
                },
                zoom: 15,
                mapTypeId: 'terrain'
            };

            this.map = new google.maps.Map(this.mapNode, mapOptions);
            const svgMarker = {
                path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
                fillColor: 'yellow',
                fillOpacity: 5,
                strokeWeight: 0,
                rotation: 0,
                scale: 2,
                anchor: new google.maps.Point(15, 30),
              };
            new google.maps.Marker({ position: mapOptions.center, map: this.map, icon: svgMarker})
        })
    };

    render()
    {
        return (
            <div ref={ map => this.mapNode = map } id='map'></div> 
        )
    }
}


export default TrailMap;