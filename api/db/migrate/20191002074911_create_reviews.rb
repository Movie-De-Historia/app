class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string :movie_title
      t.string :head_text
      t.string :comment
      t.boolean :spoiler
      t.references :user_id, foreign_key: true

      t.timestamps
    end
  end
end
