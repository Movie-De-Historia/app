# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_10_22_021620) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "genres", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "logs", force: :cascade do |t|
    t.bigint "user_id"
    t.bigint "review_id"
    t.datetime "look_at"
    t.boolean "like"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["review_id"], name: "index_logs_on_review_id"
    t.index ["user_id"], name: "index_logs_on_user_id"
  end

  create_table "messages", force: :cascade do |t|
    t.bigint "review_id"
    t.string "message"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["review_id"], name: "index_messages_on_review_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.string "movie_title"
    t.string "head_text"
    t.string "comment"
    t.boolean "spoiler"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "genre_id"
    t.index ["genre_id"], name: "index_reviews_on_genre_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "email"
    t.string "password_digest"
    t.string "token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["token"], name: "index_users_on_token", unique: true
  end

  add_foreign_key "logs", "reviews"
  add_foreign_key "logs", "users"
  add_foreign_key "messages", "reviews"
  add_foreign_key "reviews", "genres"
  add_foreign_key "reviews", "users"
end
