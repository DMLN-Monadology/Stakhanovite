export const CREATE_BOARD = "CREATE_BOARD";
export const DELETE_BOARD = "DELETE_BOARD";
export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const createBoard = (board) => ({
  type: CREATE_BOARD,
  board
});

export const deleteBoard = () => ({
  type: DELETE_BOARD
});

export const receiveBoards = (boards) => ({
  type: RECEIVE_BOARDS,
  boards
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})
