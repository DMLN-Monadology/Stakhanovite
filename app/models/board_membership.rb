class BoardMembership < ApplicationRecord
  validates :member_id, :board_id, presence: true
  validates :member_id, uniqueness: {scope: :board_id}

  belongs_to(
    :member,
    primary_key: :id,
    foreign_key: :member_id,
    class_name: "User"
  )

  belongs_to(
    :board,
    primary_key: :id,
    foreign_key: :board_id,
    class_name: "Board"
  )

end
