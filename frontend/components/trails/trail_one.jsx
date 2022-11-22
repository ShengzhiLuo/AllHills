// import React from 'react';
import { Link } from 'react-router-dom';
import TrailMap from '../maps/map';
import TrailModule from './trail_module';
import TrailHeader from '../header/header';
import ReviewModule from '../reviews/review_module';
import ReviewContainer from '../reviews/review_index_container'
import { deleteReview } from '../../util/review_api_util';
import reviewAverage from '../reviews/avg_review';
import { allReviewsAvg } from '../reviews/star';
import React, { useState, useEffect } from 'react';



class TarilOne extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        trail_reviews: this.props.trail_reviews
      }
    }

  componentDidMount() {
      this.props.fetchTrail(this.props.match.params.trailId)
        .then((trailId) => (this.props.fetchReviewsByTrail(trailId)));
    this.props.fetchAllTrails();
    console.log(this.props.match.params.trailId, "componentDidmount");
  }


  
  componentDidUpdate(prevProps) {
    if (prevProps.trail.id !== this.props.trail.id) {
      this.props.fetchTrail(this.props.match.params.trailId)
        .then(() => (this.props.fetchReviewsByTrail(this.props.match.params.trailId)));
    }
    }

 componentWillUnmount() {
  //     this.props.fetchTrail(this.props.match.params.trailId)
  //     .then((trailId) => (this.props.fetchReviewsByTrail(trailId)));
  //  this.props.fetchAllTrails();
   console.log("hello");
      }

  render() {
    const { trail, trails, trail_reviews } = this.props;
    console.log(trail_reviews);
        return (
    <div id='trail-bg'>
            <TrailHeader trail={trail ? trail :""} className ='trail-header'/>
      <div id='trail-page-container'>
        <header>
          <div id='image-cntr'>
            <img src={trail? trail.photoUrl : ""} alt="" />
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
                  <div id = 'parent'>
                    {reviewAverage(trail_reviews, 'Page')}
                    <div id = ''>
                    {this.props.currentUser ?
                      <button id='rev-button' onClick={() => this.props.openModal({type: 'create'})}>Write review</button>:
                        <Link to={`/login`} id="rev-link"><button id='rev-button'>Log In</button></Link>}
                    </div>
                  </div>
                  <div id='reviews'>
                    {/* <ReviewIndex reviews ={trail ? this.props.reviews : ''} fetchReviewsByTrail={this.props.fetchReviewsByTrail} trailId={this.props.trailId } /> */}
                   {trail_reviews.map((review, i) => <ReviewModule
                      // review={review.trail_id === this.props.trailId ? review : {}}
                      review={review}
                      deleteReview={this.props.deleteReview} currentUser={this.props.currentUser}
                      key={i} trail={trail}
                      openModal={this.props.openModal} />)} 
                   {/* <ReviewModule reviews={ trail.reviews? trail.reviews: []} key = {trail.id}  deleteReview={this.props.deleteReview} trail={trail}/>  */}
          </div> 
            <div id='bottom'></div>
          </section> 
                  
            {/* <ReviewContainer openModal={this.openModal} review={this.props.review} fetchTrailReviews={this.props.fetchTrailReviews} trailId={this.props.trailId}/> */}
          <section id='right-page'>
            <div id ='trail-map'>
                    <TrailMap trail={trail} fetchTrail={this.props.fetchTrail} trailId={ this.props.trailId} />
            </div>
                  <h3 className='nearby-trail'>Nearby Trails</h3>
                  <div id='nearby'>
                  {/* trail.park_id === this.props.trail.park_id &&  */}
                    {trails.map((trail, i) => ((trail.park_id === this.props.trail.park_id && trail.id !== this.props.trail.id) ?
                      <TrailModule trail={trail ? trail : ""} key={trail? trail.id: i} currentUser={this.props.currentUser} /> : ''))}
            </div>
          </section>
        </div>
      </div>
      </div>
                                
        )
    }
};


export default TarilOne;