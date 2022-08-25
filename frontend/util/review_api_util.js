export const createReview = (review) => (
    $.ajax({
        url: `/api/reviews`,
        method: 'POST',
        data: {review}
    })
)

export const fetchReviewsByTrail = (trailId) => (
    $.ajax({
        url: `/api/trails/${trailId}/reviews`,
        method: 'GET'
    })
)


export const deleteReview = (reviewId) => (
    $.ajax({
        url: `/api/reviews/${reviewId}`,
        method: 'DELETE'
    })
)

export const updateReview = (review) => (
    $.ajax({
        url: `api/reviews/${review.id}`,
        method: 'PATCH',
        data: {review}
    })
)