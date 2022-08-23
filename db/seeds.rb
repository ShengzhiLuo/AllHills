# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"

User.destroy_all
demo = User.create!(username: "demo", email: 'demo@user.com', password: "password")
u1 = User.create!(username: 'Colin Firth', email: 'handsome@allhill.com', password: 'password')
u2 = User.create!(username: 'Tony Stark', email: 'ironman@allhill.com', password: 'password')
u3 = User.create!(username: 'Thomas Shelby', email: 'peakyblinder@allhill.com', password: 'password')
u4 = User.create!(username: 'Hugh Grant', email: 'maurice@allhill.com', password: 'password')
u5 = User.create!(username: 'Shengzhi', email: 'shengzhi@allhill.com', password: 'password')

def purl(img)
    "https://allhills-seeds.s3.amazonaws.com/allhills_images/" +img
end


Trail.destroy_all
#Glacier National Park
t1 = Trail.create!(name:'Avalanche Lake Trail', longitude: -113.81956, latitude: 48.67945, length: 9.5, difficulty_level: 'Moderate', elevation_gain: 231, route_type: 'Out & Back', estimated_time: 'Est. 2h 28min', description: "Head out on this 9.5-km out-and-back trail near Lake Mc Donald, Montana. Generally considered a moderately challenging route, it takes an average of 2 h 28 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are June through October. You'll need to leave pups at home — dogs aren't allowed on this trail.", country: 'United States of America', city: 'Montana', park_id: 1)
pht1 = URI.open(purl("t1.png"))
t1.photo.attach(io:pht1, filename: 't1.png')

t2 = Trail.create!(name:'Grinnell Glacier Trail', longitude: -113.66872, latitude: 48.79729, length: 18, difficulty_level: 'Hard', elevation_gain: 665, route_type: 'Out & Back', estimated_time: 'Est. 5h 30min', description: "Check out this 18.0-km out-and-back trail near Siyeh Bend, Montana. Generally considered a challenging route, it takes an average of 5 h 30 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are August through October. You'll need to leave pups at home — dogs aren't allowed on this trail.", country: 'United States of America', city: 'Montana', park_id: 1)

t3 = Trail.create!(name:'Iceberg Lake Trail ', longitude: -113.67921, latitude: 48.79961, length: 15, difficulty_level: 'Moderate', elevation_gain: 442, route_type: 'Out & Back', estimated_time: 'Est. 4h 10min', description: "Experience this 15.0-km out-and-back trail near Siyeh Bend, Montana. Generally considered a moderately challenging route, it takes an average of 4 h 10 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are June through October. You'll need to leave pups at home — dogs aren't allowed on this trail.", country: 'United States of America', city: 'Montana', park_id: 1)

#Yosemite National Park
t4 = Trail.create!(name:'Vernal and Nevada Falls via Mist Trail', longitude: -119.55782, latitude: 37.73279, length: 9.7, difficulty_level: 'Hard', elevation_gain: 659, route_type: 'Loop', estimated_time: 'Est. 4h 0min', description: "Check out this 9.7-km loop trail near Yosemite Valley, California. Generally considered a challenging route, it takes an average of 4 h 0 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are May through October. You'll need to leave pups at home — dogs aren't allowed on this trail.", country: 'United States of America', city: 'California', park_id: 2)
t5 = Trail.create!(name:'Upper Yosemite Falls Trail', longitude: -119.60186, latitude: 37.74213, length: 12.2, difficulty_level: 'Hard', elevation_gain: 981, route_type: 'Out & Back', estimated_time: 'Est. 5h 35min', description: "Try this 12.2-km out-and-back trail near Yosemite Valley, California. Generally considered a challenging route, it takes an average of 5 h 35 min to complete. This is a very popular area for backpacking, camping, and hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are April through October. You'll need to leave pups at home — dogs aren't allowed on this trail.", country: 'United States of America', city: 'California', park_id: 2)

#Zion National Park
t6 = Trail.create!(name:'Angels Landing Trail', longitude: -112.95122, latitude: 37.25909, length: 7.1, difficulty_level: 'Hard', elevation_gain: 489, route_type: 'Out & Back', estimated_time: 'Est. 2h 57min', description: "Try this 7.1-km out-and-back trail near Springdale, Utah. Generally considered a challenging route, it takes an average of 2 h 57 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are February through October. You'll need to leave pups at home — dogs aren't allowed on this trail.", country: 'United States of America', city: 'Utah', park_id: 3)
t7 = Trail.create!(name:'The Zion Narrows Riverside Walk', longitude: -112.94762, latitude: 37.28516, length: 3.1, difficulty_level: 'Easy', elevation_gain: 59, route_type: 'Out & Back', estimated_time: 'Est. 44min', description: "Check out this 3.1-km out-and-back trail near Springdale, Utah. Generally considered an easy route, it takes an average of 44 min to complete. This is a very popular area for hiking, running, and walking, so you'll likely encounter other people while exploring. The best times to visit this trail are March through October. You'll need to leave pups at home — dogs aren't allowed on this trail.", country: 'United States of America', city: 'Utah', park_id: 3)

#Yellowstone National Park
t8 = Trail.create!(name:"Grand Prismatic Hot Spring", longitude: -110.83251, latitude: 44.51543, length: 2.4, difficulty_level: 'Easy', elevation_gain: 61, route_type: 'Out & Back', estimated_time: 'Est. 38min', description: "Enjoy this 2.4-km out-and-back trail near Yellowstone National Park, Wyoming. Generally considered an easy route, it takes an average of 38 min to complete. This is a very popular area for walking, so you'll likely encounter other people while exploring. The best times to visit this trail are April through October. You'll need to leave pups at home — dogs aren't allowed on this trail.", country: 'United States of America', city: 'Wyoming', park_id: 4)
t9 = Trail.create!(name:"Mystic Falls, Fairy Creek and Little Firehole Loop", longitude: -110.85207, latitude: 44.48515, length: 5.6, difficulty_level: 'Moderate', elevation_gain: 185, route_type: 'Loop', estimated_time: 'Est. 1h 38min', description: "Enjoy this 5.6-km loop trail near Yellowstone National Park, Wyoming. Generally considered a moderately challenging route, it takes an average of 1 h 38 min to complete. This is a very popular area for birding, hiking, and running, so you'll likely encounter other people while exploring. The best times to visit this trail are May through October. You'll need to leave pups at home — dogs aren't allowed on this trail.", country: 'United States of America', city: 'Wyoming', park_id: 4)

#Bryce Canyon National Park
t10 = Trail.create!(name:"Navajo Loop and Queen's Garden Trail", longitude: -112.16723, latitude: 37.6234, length: 5.0, difficulty_level: 'Moderate', elevation_gain: 198, route_type: 'Loop', estimated_time: 'Est. 1h 34min', description: "Experience this 5.0-km loop trail near Bryce, Utah. Generally considered a moderately challenging route, it takes an average of 1 h 34 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are March through October. You'll need to leave pups at home — dogs aren't allowed on this trail.", country: 'United States of America', city: 'Utah', park_id: 5)
t11 = Trail.create!(name:"Fairyland Loop Trail", longitude: -112.14764, latitude: 37.64937, length: 12.6, difficulty_level: 'Moderate', elevation_gain: 471, route_type: 'Loop', estimated_time: 'Est. 3h 51min', description: "Discover this 12.6-km loop trail near Bryce, Utah. Generally considered a moderately challenging route, it takes an average of 3 h 51 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. You'll need to leave pups at home — dogs aren't allowed on this trail.", country: 'United States of America', city: 'Utah', park_id: 5)
t12 = Trail.create!(name:"Wall Street and Queens Garden Loop Trail", longitude: -112.16459, latitude: 37.6305, length: 5.1, difficulty_level: 'Moderate', elevation_gain: 196, route_type: 'Loop', estimated_time: 'Est. 1h 35min', description: "Head out on this 5.1-km loop trail near Bryce, Utah. Generally considered a moderately challenging route, it takes an average of 1 h 35 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are June through November. You'll need to leave pups at home — dogs aren't allowed on this trail.", country: 'United States of America', city: 'Utah', park_id: 5)


#Rocky Mountain National Park
t13 = Trail.create!(name:"Emerald Lake Trail", longitude: -105.64567, latitude: 40.31195, length: 5.1, difficulty_level: 'Moderate', elevation_gain: 213, route_type: 'Out & Back', estimated_time: 'Est. 1h 39min', description: "Discover this 5.1-km out-and-back trail near Estes Park, Colorado. Generally considered a moderately challenging route, it takes an average of 1 h 39 min to complete. This is a very popular area for hiking and snowshoeing, so you'll likely encounter other people while exploring. The best times to visit this trail are June through October. You'll need to leave pups at home — dogs aren't allowed on this trail.", country: 'United States of America', city: 'Colorado', park_id: 6)
t14 = Trail.create!(name:"Sky Pond via Glacier Gorge Trail", longitude: -105.6403, latitude: 40.31052, length: 15.1, difficulty_level: 'Hard', elevation_gain: 536, route_type: 'Out & Back', estimated_time: 'Est. 4h 32min', description: "Explore this 15.1-km out-and-back trail near Estes Park, Colorado. Generally considered a challenging route, it takes an average of 4 h 32 min to complete. This is a very popular area for hiking and snowshoeing, so you'll likely encounter other people while exploring. The best times to visit this trail are June through October. You'll need to leave pups at home — dogs aren't allowed on this trail.", country: 'United States of America', city: 'Colorado', park_id: 6)
t15 = Trail.create!(name:"Gem Lake Trail", longitude: -105.51303, latitude: 40.39645, length: 5.0, difficulty_level: 'Moderate', elevation_gain: 303, route_type: 'Out & Back', estimated_time: 'Est. 1h 57min', description: "Experience this 5.0-km out-and-back trail near Estes Park, Colorado. Generally considered a moderately challenging route, it takes an average of 1 h 57 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are May through October. You'll need to leave pups at home — dogs aren't allowed on this trail.", country: 'United States of America', city: 'Colorado', park_id: 6)


#Arches National Park
t16 = Trail.create!(name:"Delicate Arch Trail", longitude: -109.49926, latitude: 38.74355, length: 5.1, difficulty_level: 'Moderate', elevation_gain: 192, route_type: 'Out & Back', estimated_time: 'Est. 1h 35min', description: "Check out this 5.1-km out-and-back trail near Moab, Utah. Generally considered a moderately challenging route, it takes an average of 1 h 35 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. The trail is open year-round and is beautiful to visit anytime. You'll need to leave pups at home — dogs aren't allowed on this trail.", country: 'United States of America', city: 'Utah', park_id: 7)
t17 = Trail.create!(name:"Devils Garden", longitude: -109.59509, latitude: 38.78237, length: 12.7, difficulty_level: 'Hard', elevation_gain: 331, route_type: 'Loop', estimated_time: 'Est. 3h 23min', description: "Head out on this 12.7-km loop trail near Thompson, Utah. Generally considered a challenging route, it takes an average of 3 h 23 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. You'll need to leave pups at home — dogs aren't allowed on this trail.", country: 'United States of America', city: 'Utah', park_id: 7)


#Mount Rainier National Park
t18 = Trail.create!(name:"Skyline Trail Loop", longitude: -121.73606, latitude: 46.78607, length: 10.0, difficulty_level: 'Hard', elevation_gain: 545, route_type: 'Loop', estimated_time: 'Est. 3h 40min', description: "Experience this 10.0-km loop trail near Paradise Inn, Washington. Generally considered a challenging route, it takes an average of 3 h 40 min to complete. This is a very popular area for backpacking and hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are July through October. You'll need to leave pups at home — dogs aren't allowed on this trail.", country: 'United States of America', city: 'Washington', park_id: 8)
t19 = Trail.create!(name:"Tolmie Peak Trail", longitude: -121.86767, latitude: 46.9374, length: 9.0, difficulty_level: 'Moderate', elevation_gain: 470, route_type: 'Out & Back', estimated_time: 'Est. 3h 15min', description: "Experience this 9.0-km out-and-back trail near Carbonado, Washington. Generally considered a moderately challenging route, it takes an average of 3 h 15 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are June through October. You'll need to leave pups at home — dogs aren't allowed on this trail.", country: 'United States of America', city: 'Washington', park_id: 8)
t20 = Trail.create!(name:"Naches Peak Loop Trail", longitude: -121.51945, latitude: 46.86978, length: 5.3, difficulty_level: 'Easy', elevation_gain: 194, route_type: 'Loop', estimated_time: 'Est. 1h 36min', description: "Explore this 5.3-km loop trail near Goose Prairie, Washington. Generally considered an easy route, it takes an average of 1 h 36 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are July through October. You'll need to leave pups at home — dogs aren't allowed on this trail.", country: 'United States of America', city: 'Washington', park_id: 8)


pht2 = URI.open(purl("t2.png"))
t2.photo.attach(io:pht2, filename: 't2.png')

pht3 = URI.open(purl("t3.png"))
t3.photo.attach(io:pht3, filename: 't3.png')

pht4 = URI.open(purl("t4.png"))
t4.photo.attach(io:pht4, filename: 't4.png')

pht5 = URI.open(purl("t5.png"))
t5.photo.attach(io:pht5, filename: 't5.png')

pht6 = URI.open(purl("t6.png"))
t6.photo.attach(io:pht6, filename: 't6.png')

pht7 = URI.open(purl("t7.png"))
t7.photo.attach(io:pht7, filename: 't7.png')

pht8 = URI.open(purl("t8.png"))
t8.photo.attach(io:pht8, filename: 't8.png')

pht9 = URI.open(purl("t9.png"))
t9.photo.attach(io:pht9, filename: 't9.png')

pht10 = URI.open(purl("t10.png"))
t10.photo.attach(io:pht10, filename: 't10.png')

pht11 = URI.open(purl("t11.png"))
t11.photo.attach(io:pht11, filename: 't11.png')

pht12 = URI.open(purl("t12.png"))
t12.photo.attach(io:pht12, filename: 't12.png')

pht13 = URI.open(purl("t13.png"))
t13.photo.attach(io:pht13, filename: 't13.png')

pht14 = URI.open(purl("t14.png"))
t14.photo.attach(io:pht14, filename: 't14.png')

pht15 = URI.open(purl("t15.png"))
t15.photo.attach(io:pht15, filename: 't15.png')

pht16 = URI.open(purl("t16.png"))
t16.photo.attach(io:pht16, filename: 't16.png')

pht17 = URI.open(purl("t17.png"))
t17.photo.attach(io:pht17, filename: 't17.png')

pht18 = URI.open(purl("t18.png"))
t18.photo.attach(io:pht18, filename: 't18.png')

pht19 = URI.open(purl("t19.png"))
t19.photo.attach(io:pht19, filename: 't19.png')

pht20 = URI.open(purl("t20.png"))
t20.photo.attach(io:pht20, filename: 't20.png')