class Board < ApplicationRecord
  validates :user_id, :title, presence: true 
end
