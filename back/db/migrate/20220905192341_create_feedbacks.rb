class CreateFeedbacks < ActiveRecord::Migration[7.0]
  def change
    create_table :feedbacks do |t|
      t.string :title
      t.text :body
      t.string :category
      t.integer :likes
      t.integer :comments
      t.timestamps
    end
  end
end
