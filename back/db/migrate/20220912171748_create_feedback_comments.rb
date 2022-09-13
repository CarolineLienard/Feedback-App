class CreateFeedbackComments < ActiveRecord::Migration[7.0]
  def change
    create_table :feedback_comments do |t|
      t.string :content
      t.string :text
      t.string :feedback_id
      t.string :integer

      t.timestamps
    end
  end
end
