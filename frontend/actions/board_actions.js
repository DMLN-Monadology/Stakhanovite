export const CREATE_BOARD = "CREATE_BOARD";
export const FETCH_BOARD = "FETCH_BOARD";
export const DELETE_BOARD = "DELETE_BOARD";
export const RECEIVE_BOARD = "RECEIVE_BOARD";
export const RECEIVE_CURRENT_BOARD = "RECEIVE_CURRENT_BOARD";
export const RECEIVE_BOARD_ERRORS = "RECEIVE_BOARD_ERRORS";

export const receiveCurrentBoard = (board) => ({
  type: RECEIVE_CURRENT_BOARD,
  board
});

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

export const FETCH_USERS_SEARCHES = "FETCH_USERS_SEARCHES";

export const fetchUsersSearches = () => ({
  type: FETCH_USERS_SEARCHES
});

export const RECEIVE_USERS_SEARCHES = "RECEIVE_USERS_SEARCHES";

export const receiveUsersSearches = (users) => ({
  type: RECEIVE_USERS_SEARCHES,
  users
});

export const CREATE_MEMBERSHIP = "CREATE_MEMBERSHIP";

export const createMembership = (membership) => ({
  type: CREATE_MEMBERSHIP,
  membership
});

export const DELETE_MEMBERSHIP = "DELETE_MEMBERSHIP";

export const deleteMembership = (id) => ({
  type: DELETE_MEMBERSHIP,
  id
});
