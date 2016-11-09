class List < ApplicationRecord
  validates :board_id, :title, :order, presence: true

  belongs_to(
    :board,
    primary_key: :id,
    foreign_key: :board_id,
    class_name: "Board"
  )

  def self.perestroika(lists_array, prev_location, next_location)
    current_list = lists_array[prev_location]    #list to be moved
    lists_array.delete_at(prev_location)       #remove it from lists_array
    lists_array.insert(next_location, current_list) #re-add it, but in correct order

    lists_array.each_with_index do |list, idx|
      list.order = idx
      list.save
    end
    
    lists_array

  end

end
