class Board < ApplicationRecord
  validates :owner_id, :title, presence: true

  belongs_to(
    :owner,
    primary_key: :id,
    foreign_key: :owner_id,
    class_name: "User"
  )

  has_many(
    :memberships,
    primary_key: :id,
    foreign_key: :board_id,
    dependent: :destroy
    class_name: "BoardMembership"
  )

  has_many(
    :members,
    through: :memberships,
    source: :member
  )


end
