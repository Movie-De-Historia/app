# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "csv"

5.times do |no|
  User.create(name:"user_#{no}",email:"user_#{no}@mail.com",password:"password",password_confirmation:"password")
end

CSV.foreach('db/review_seed.csv') do |row|
  Review.create(:genre_id => row[0], :user_id => row[1], :movie_title => row[2], :head_text => row[3], :comment => row[4], :spoiler => row[5])
end

CSV.foreach('db/genre_seed.csv') do |row|
  Genre.create(:name => row[0])
end

CSV.foreach('db/log_seed.csv') do |row|
  Log.create(:user_id => row[0], :review_id => row[1], :look_at => Time.now, :like => row[2])
end
