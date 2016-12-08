json.extract! user, :id, :username, :image_url

json.owned_boards user.owned_boards, partial: "api/boards/board.json.jbuilder", as: :board
json.member_boards user.member_boards, partial: "api/boards/board.json.jbuilder", as: :board
