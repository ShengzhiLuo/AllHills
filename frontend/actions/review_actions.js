import * as ReviewAPIUtil from '../util/review_api_util'

export const RECEIVE_ALL_REVIEWS = 'RECEIVE_ALL_REVIEWS';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';
export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';


export const receiveAllReviews = (reviews) => ({
    type: RECEIVE_ALL_REVIEWS,
    reviews
});

export const receiveReview = (review) => ({
    type: RECEIVE_REVIEW,
    review
});

export const removeReview = (reviewId) => ({
    type: REMOVE_REVIEW,
    reviewId
});


export const clearErrors = () => ({
    type: CLEAR_ERRORS
});


export const receiveReviewErrors = (errors) => ({
    type: RECEIVE_REVIEW_ERRORS,
    errors
});

export const fetchReviewsByTrail = (trailId) => dispatch => ReviewAPIUtil.fetchReviewsByTrail(trailId)
    .then(reviews => dispatch(receiveAllReviews(reviews)));

export const createReview = (review) => dispatch => ReviewAPIUtil.createReview(review)
    .then(review => dispatch(receiveReview(review)),
    errors => (dispatch(receiveReviewErrors(errors.responseJSON))));

export const deleteReview = (reviewId) => dispatch => ReviewAPIUtil.deleteReview(reviewId)
    .then(() => dispatch(removeReview(reviewId)));

export const updateReview = (review) => dispatch => ReviewAPIUtil.updateReview(review)
    .then((review) => dispatch(receiveReview(review)),
    errors => (dispatch(receiveReviewErrors(errors.responseJSON))));


