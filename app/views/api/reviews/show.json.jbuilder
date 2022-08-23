json.extract! @review, :id, :user_id, :trail_id, :rating, :description, :trail_date
json.user @review.user, :username, :id
json.trail @review.trail, :id, :name