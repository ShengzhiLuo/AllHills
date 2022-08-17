# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"

User.destroy_all
demo = User.create(username: "demo", email: 'demo@user.com', password: "password")
u1 = User.create(username: 'Colin Firth', email: 'handsome@allhill.com', password: 'password')
u2 = User.create(username: 'Tony Stark', email: 'ironman@allhill.com', password: 'password')
u3 = User.create(username: 'Thomas Shelby', email: 'peakyblinder@allhill.com', password: 'password')
u4 = User.create(username: 'Hugh Grant', email: 'maurice@allhill.com', password: 'password')
u5 = User.create(username: 'Shengzhi', email: 'shengzhi@allhill.com', password: 'password')


Trail.destroy_all
#Glacier National Park
