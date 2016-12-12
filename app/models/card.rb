
class Card < ApplicationRecord
  validates :list_id, :title, :order, presence: true

  belongs_to(
    :list,
    primary_key: :id,
    foreign_key: :list_id,
    class_name: "List"
  )

  def self.perestroika_in_one_list(cards_array, prev_location, next_location)
    traveling_card = cards_array[prev_location]
    cards_array.delete(traveling_card)
    cards_array.insert(next_location, traveling_card)

    cards_array.each_with_index do |card, idx|
      card.order = idx
      card.save
    end

    cards_array

  end

  def self.perestroika_in_two_lists(traveling_card, departure_list_id, arrival_list_id, arrival_gate)

    departure_list = List.find_by_id(departure_list_id).cards.to_a
    departure_list.delete(traveling_card)
    departure_list.each_with_index do |card, idx|  #restructure departure list's orderings and save
      card.order = idx
      card.save
    end

    traveling_card.list_id = arrival_list_id   #change traveling_card's list_id to arrival_list's id

    arrival_list = List.find_by_id(arrival_list_id).cards.sort_by {|card| card.order}
    arrival_list.insert(arrival_gate, traveling_card)
    arrival_list.each_with_index do |card, idx|
      card.order = idx
      card.save
    end

    arrival_list

  end

  def self.war_perestroika(cards_array, deleted_location)
    cards_array.delete_at(deleted_location)

    cards_array.each_with_index do |card, idx|
      card.order = idx
      card.save
    end

    cards_array

  end
end
