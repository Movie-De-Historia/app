class CreateLogs < ActiveRecord::Migration[5.2]
  def change
    create_table :logs do |t|
      t.references :user, foreign_key: true
      t.references :review, foreign_key: true
      t.timestamp :look_at
      t.boolean :like

      t.timestamps
    end
  end
end
