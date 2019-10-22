class CreateMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :messages do |t|
      t.references :review, foreign_key: true
      t.string :message

      t.timestamps
    end
  end
end
