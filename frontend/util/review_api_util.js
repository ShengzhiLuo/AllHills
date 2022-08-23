export const createReview = (review) => (
    $.ajax({
        url: `/api/trails/${review.trail.id}/reviews`,
        method: 'POST',
        data: {review}
    })
)

export const fetchReviews = (trailId) => (
    $.ajax({
        url: `/api/trails/${trailId}/reviews`,
        method: 'GET',
        data: {trailId}
    })
)


export const fetchReview = (reviewId) => (
    $.ajax({
        url: `/api/trails/:trailId/reviews/${reviewId}`,
        method: 'GET',
        data: {reviewId}
    })
)

export const deleteReview = (reviewId) => (
    $.ajax({
        url: `/api/trails/:trailId/reviews/${reviewId}`,
        method: 'DELETE',
        data: {reviewId}
    })
)

export const updateReview = (review) => (
    $.ajax({
        url: `api/trails/${review.trailId}/reviews/${review.id}`,
        method: 'PATCH',
        data: {review}
    })
)