json.extract! user, :id, :username, :image_url, :member_boards

json.owned_boards user.owned_boards, partial: "api/boards/board.json.jbuilder", as: :board
