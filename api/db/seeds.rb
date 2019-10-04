# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "csv"

users = 5.times.map do |no|
  User.create!(name:"user_#{no}",email:"user_#{no}@mail.com",password:"password",password_confirmation:"password")
end

genres = CSV.foreach('db/genre_seed.csv').map do |row|
  Genre.create!(:name => row[0])
end

reviews = CSV.foreach('db/review_seed.csv').map do |row|
  genre = genres[row[0].to_i - 1]
  user = users[row[1].to_i - 1]
  Review.create!(:genre_id => genre.id, :user_id => user.id, :movie_title => row[2], :head_text => row[3], :comment => row[4], :spoiler => row[5])
end

CSV.foreach('db/log_seed.csv') do |row|
  user = users[row[0].to_i - 1 ]
  review = reviews[row[1].to_i - 1 ]
  Log.create!(:user_id => user.id, :review_id => review.id, :look_at => Time.now, :like => row[2])
end
