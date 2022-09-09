class AddStatusToFeedbacks < ActiveRecord::Migration[7.0]
  def change
    add_column :feedbacks, :status, :string
  end 
end