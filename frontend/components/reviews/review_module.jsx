import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";
import { Link } from 'react-router-dom';
import {FaStar} from 'react-icons/fa'





const ReviewModule = ({ review, deleteReview, currentUser}) => {
    return (
        <div id={`review-module`}>
        <section id='review-stats'>
          <h2>{review.user.username}</h2>
          <div id='subheader'>
            <div id='rating'>{review.rating}</div>
            <p id='actdate'>{review.trail_date}</p>
          </div>
        </section>
        <section id='body'>
          <p>{review.description}</p>
        </section>
        <section id='mod-delete'>
        {(currentUser && currentUser.id === review.user_id) ? 
          <button id ='edit-btn'>edit</button> : ""}
        {(currentUser && currentUser.id === review.author_id) ? 
        <button id='dlt-btn' onClick={() => deleteReview(review.id)}>Delete</button> : ""}
        </section>
      </div>
    )
}
export default ReviewModule;



