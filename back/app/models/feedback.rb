class Feedback < ApplicationRecord
    has_many :feedback_comments, dependent: :destroy
end
