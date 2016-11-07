class List < ApplicationRecord
  validates :board_id, :title, presence: true

  belongs_to(
    :board,
    primary_key: :id,
    foreign_key: :board_id,
    class_name: "Board"
  )

end
