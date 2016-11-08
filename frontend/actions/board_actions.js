export const CREATE_BOARD = "CREATE_BOARD";
export const FETCH_BOARD = "FETCH_BOARD";
export const DELETE_BOARD = "DELETE_BOARD";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const RECEIVE_BOARD_ERRORS = "RECEIVE_BOARD_ERRORS";

export const fetchBoard = (id) => ({
  type: FETCH_BOARD,
  id
});

export const createBoard = (board) => ({
  type: CREATE_BOARD,
  board
});

export const deleteBoard = (id) => ({
  type: DELETE_BOARD,
  id
});


export const receiveBoard = (board) => ({
  type: RECEIVE_BOARD,
  board
})

export const receiveBoardErrors = (errors) => ({
  type: RECEIVE_BOARD_ERRORS,
  errors
})

export const RECEIVE_BOARD_SHOW = "RECEIVE_BOARD_SHOW";

export const receiveBoardShow = (board) => ({
  type: RECEIVE_BOARD_SHOW,
  board
});
