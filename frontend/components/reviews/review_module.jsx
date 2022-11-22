import ReactStars from "react-rating-stars-component";
import React from "react";
import { render } from "react-dom";
import { Link } from 'react-router-dom';
import {FaStar} from 'react-icons/fa'





const ReviewModule = ({ review, deleteReview, currentUser, openModal}) => {
    let stars = [];
   for(let i=0; i< review?.rating; i++){
    stars.push(<FaStar key={i} size={20} color={'gold'} />)
    };

    while (stars.length < 5) {
    let i = stars.length
    stars.push(<FaStar key={i} size={20} color={'#e9e9e9'} />)
    };

    return (

        <div id={`review-module`}>
        <section id='review-stats'>
          <h2>{review?.user.username}</h2>
          <div id='subheader'>
            <div id='rating'>{stars}</div>
            <p id='actdate'>{review?.trail_date}</p>
          </div>
        </section>
        <section id='body'>
          <p>{review?.description}</p>
        </section>
        <section id='mod-delete'>
        {(currentUser && currentUser.id === review?.user_id) ? 
          <button id ='edit-btn' onClick={() => openModal({type: 'edit'})}>Edit</button> : ""}
        {(currentUser && currentUser.id === review?.user_id) ? 
            <button id='dlt-btn' onClick={()=> deleteReview(review?.id)}>Delete</button> : ""}
        </section>
      </div>
    )
}
export default ReviewModule;



