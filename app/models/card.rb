class Card < ApplicationRecord
  validates :list_id, :title, :order, presence: true

  belongs_to(
    :list,
    primary_key: :id,
    foreign_key: :list_id,
    class_name: "List"
  )

  
end
