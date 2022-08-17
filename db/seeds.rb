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


Trail.destroy_all
#Glacier National Park
t1 = Trail.create!(name:'Avalanche Lake Trail', longitude: -113.81956, latitude: 48.67945, length: 9.5, difficulty_level: 'Moderate', elevation_gain: 231, route_type: 'Out & Back', estimated_time: 'Est. 2h 28min', description: "Head out on this 9.5-km out-and-back trail near Lake Mc Donald, Montana. Generally considered a moderately challenging route, it takes an average of 2 h 28 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are June through October. You'll need to leave pups at home — dogs aren't allowed on this trail.", country: 'United States of America', city: 'Montana', park_id: 1)
t2 = Trail.create!(name:'Grinnell Glacier Trail', longitude: -113.66872, latitude: 48.79729, length: 18, difficulty_level: 'Hard', elevation_gain: 665, route_type: 'Out & Back', estimated_time: 'Est. 5h 30min', description: "Check out this 18.0-km out-and-back trail near Siyeh Bend, Montana. Generally considered a challenging route, it takes an average of 5 h 30 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are August through October. You'll need to leave pups at home — dogs aren't allowed on this trail.", country: 'United States of America', city: 'Montana', park_id: 1)
t3 = Trail.create!(name:'Iceberg Lake Trail ', longitude: -113.67921, latitude: 48.79961, length: 15, difficulty_level: 'Moderate', elevation_gain: 442, route_type: 'Out & Back', estimated_time: 'Est. 4h 10min', description: "Experience this 15.0-km out-and-back trail near Siyeh Bend, Montana. Generally considered a moderately challenging route, it takes an average of 4 h 10 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are June through October. You'll need to leave pups at home — dogs aren't allowed on this trail.", country: 'United States of America', city: 'Montana', park_id: 1)

#Yosemite National Park
t4 = Trail.create!(name:'Vernal and Nevada Falls via Mist Trail', longitude: -119.55782, latitude: 37.73279, length: 9.7, difficulty_level: 'Hard', elevation_gain: 659, route_type: 'Loop', estimated_time: 'Est. 4h 0min', description: "Check out this 9.7-km loop trail near Yosemite Valley, California. Generally considered a challenging route, it takes an average of 4 h 0 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are May through October. You'll need to leave pups at home — dogs aren't allowed on this trail.", country: 'United States of America', city: 'California', park_id: 2)
t5 = Trail.create!(name:'Upper Yosemite Falls Trail', longitude: -119.60186, latitude: 37.74213, length: 12.2, difficulty_level: 'Hard', elevation_gain: 981, route_type: 'Out & Back', estimated_time: 'Est. 5h 35min', description: "Try this 12.2-km out-and-back trail near Yosemite Valley, California. Generally considered a challenging route, it takes an average of 5 h 35 min to complete. This is a very popular area for backpacking, camping, and hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are April through October. You'll need to leave pups at home — dogs aren't allowed on this trail.", country: 'United States of America', city: 'California', park_id: 2)

#Zion National Park
t6 = Trail.create!(name:'Angels Landing Trail', longitude: -112.95122, latitude: 37.25909, length: 7.1, difficulty_level: 'Hard', elevation_gain: 489, route_type: 'Out & Back', estimated_time: 'Est. 2h 57min', description: "Try this 7.1-km out-and-back trail near Springdale, Utah. Generally considered a challenging route, it takes an average of 2 h 57 min to complete. This is a very popular area for hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are February through October. You'll need to leave pups at home — dogs aren't allowed on this trail.", country: 'United States of America', city: 'Utah', park_id: 3)
t7 = Trail.create!(name:'The Zion Narrows Riverside Walk', longitude: -112.94762, latitude: 37.28516, length: 3.1, difficulty_level: 'Easy', elevation_gain: 59, route_type: 'Out & Back', estimated_time: 'Est. 44min', description: "Check out this 3.1-km out-and-back trail near Springdale, Utah. Generally considered an easy route, it takes an average of 44 min to complete. This is a very popular area for hiking, running, and walking, so you'll likely encounter other people while exploring. The best times to visit this trail are March through October. You'll need to leave pups at home — dogs aren't allowed on this trail.", country: 'United States of America', city: 'Utah', park_id: 3)
