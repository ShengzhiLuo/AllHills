@reviews.each do |review|
    json.set! review.id do
        json.extract! review, :id, :user_id, :trail_id, :rating, :description, :trail_date
        json.user review.user, :username, :id
    end
end