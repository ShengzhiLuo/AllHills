import React from 'react';
import { Link } from 'react-router-dom';
import MapContanier from '../maps/map_container'


class TarilOne extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTrail(this.props.match.params.trailId)
        // this.props.fetchTrail(this.props.trail);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            const coords = [this.props.trail.latitude, this.props.trail.longitude];
            console.log("fetching weather on update");
            console.log(this.props.trail);
            console.log(this.props.trail.latitude);
            console.log(this.props.trail.longitude);
            // this.props.fetchWeather(coords);
        }
    }


  render() {
        const { trail } = this.props;
        return (
            <div id='bg'>
      <div id='trail-page-container'>
        <header>
          <div id='image-cntr'>
            {/* <img src={trail ? trail.mainPhotoUrl : ""} alt="" /> */}
          </div>
          <div id='gradient'>
            <div id='top-info'>
              <h1>{trail ? trail.name : ""}</h1>
              <div className='difficulty' id={trail ? trail.difficulty_level : ""}>{trail ? trail.difficulty_level : ""}</div>
                {/* <h2>{trail ? <Link to={`/parks/${trail.parkId}`}>{trail.park}</Link> : ""}</h2> */}
                <h2>{trail ? <Link to={`/parks/${trail.parkId}`}>Park</Link> : ""}</h2>
            </div>
          </div>
        </header>
        <div id='divider'></div>
        <div id='page-split'>
          <section id='left-page'>
            <div id='trail-overview'>
              <p id='text-block'>{trail ? trail.description : ""}</p>
            </div>
            <div id='trail-info'>
              <div id='length'>
                Length
                <br />
                <p>{trail ? trail.length : ""} km </p>
              </div>
              <div id='elevation'>
                Elevation gain
                <br />
                <p>{trail ? trail.elevation_gain : ""} ft</p>
              </div>
              <div id='rtype'>
                Route Type
                <br />
                <p>{trail ? trail.route_type : ""}</p>
              </div>
            </div>
            <div id='tags'>
            </div>
            <div id='description'>
              <div id='divider'><p id='reviews-header'>Reviews</p></div>
            </div>
            <div id='reviews'>
              {/* {reviewAverage(this.props.reviews, 'Page')} */}
              {this.props.currentUser ? 
                <Link to={`/trails/${trail ? trail.id : 0}/reviews`}><button id='rev-button'>Write review</button></Link> : 
                <Link to={`/login`}><button className='login-btn' id='rev-button'>Log in to write a review</button></Link> }
              {/* {this.reviews()} */}
            </div>
            <div id='bottom'></div>
          </section>
          <section id='right-page'>
            <div >
                    <MapContanier/>
            </div>
            <div id='nearby'>
            </div>
          </section>
        </div>
      </div>
      </div>
                                
        )
    }
};


export default TarilOne;