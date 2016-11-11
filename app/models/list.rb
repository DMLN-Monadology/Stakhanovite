
class List < ApplicationRecord
  validates :board_id, :title, :order, presence: true

  has_many(
    :cards,
    primary_key: :id,
    foreign_key: :list_id,
    dependent: :destroy,
    class_name: "Card"
  )

  belongs_to(
    :board,
    primary_key: :id,
    foreign_key: :board_id,
    class_name: "Board"
  )

  def self.perestroika(lists_array, prev_location, next_location)
    swap_partner_1 = lists_array[prev_location]    #principal list to be moved
    swap_partner_2 = lists_array[next_location]    #list that will swap spot with principal
    lists_array.delete(swap_partner_1)       #remove principal from array
    lists_array.insert(next_location, swap_partner_1) #re-add principal, but in correct order
    lists_array.delete(swap_partner_2)       #remove list that is supposed to swap
    lists_array.insert(prev_location, swap_partner_2) #re-add partner, but in correct order

    lists_array.each_with_index do |list, idx|
      list.order = idx
      list.save
    end

    lists_array

  end

end
