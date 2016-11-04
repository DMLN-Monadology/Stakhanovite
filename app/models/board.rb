class Board < ApplicationRecord
  validates :user_id, :title, presence: true

  belongs_to(
    :owner,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: "User"
  )

  has_many(
    :memberships,
    primary_key: :id,
    foreign_key: :board_id,
    class_name: "BoardMembership"
  )

  has_many(
    :members,
    through: :memberships,
    source: :member
  )


end
