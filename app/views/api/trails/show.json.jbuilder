
json.extract! @trail, :id, :name, :description, :difficulty_level, :length, :elevation_gain, :route_type, :latitude, :longitude, :park_id, :estimated_time, :country, :city

json.photoUrl url_for(@trail.photo)

@trail.reviews.each do |review|
    json.reviews do
        json.set! review.id do
            json.partial! review
        end
    end
end
