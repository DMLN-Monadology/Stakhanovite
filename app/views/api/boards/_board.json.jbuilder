json.extract! board, :id, :owner_id, :title, :lists

json.lists board.lists, partial: "api/lists/list.json.jbuilder", as: :list
