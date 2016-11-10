json.extract! list, :id, :board_id, :title, :order


json.cards do
  json.array!(list.cards.sort_by { |card| card.order }) do |card|
    json.partial! "api/cards/card.json.jbuilder", card: card
  end
end 
