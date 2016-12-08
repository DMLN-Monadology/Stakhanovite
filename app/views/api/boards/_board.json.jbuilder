json.extract! board, :id, :owner_id, :title

json.lists do
  json.array!(board.lists.sort_by { |list| list.order }) do |list|
    json.partial! "api/lists/list.json.jbuilder", list: list
  end
end

json.members do
  json.array!(board.memberships) do |membership|
    json.extract! membership, :id, :member_id
  end
end
