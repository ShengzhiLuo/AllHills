json.array! @trails do |trail|
    json.extract! trail, :id, :name, :difficulty_level, :length, :latitude, :longitude
end