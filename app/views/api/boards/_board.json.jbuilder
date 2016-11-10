json.extract! board, :id, :owner_id, :title

json.lists do
  json.array!(board.lists.sort_by { |list| list.order }) do |list|
    json.partial! "api/lists/list.json.jbuilder", list: list
  end
end
