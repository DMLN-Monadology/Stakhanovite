export const createBoard = (board, success, error) => {
  $.ajax ({
    url: 'api/boards',
    method: "POST",
    data: {board},
    success,
    error
  });
};

export const updateBoard = (board, success, error) => {
  $.ajax ({
    url: `api/boards/${board.id}`,
    method: "PATCH",
    data: {board},
    success,
    error
  });
};

export const deleteBoard = (id, success, error) => {
  $.ajax ({
    url: `api/boards/${id}`,
    method: "DELETE",
    success,
    error
  });
};

export const fetchBoard = (id, success) => {
  $.ajax ({
    url: `api/boards/${id}`,
    method: "GET",
    success
  });
};

export const fetchUsersSearches = (success) => {
  $.ajax ({
    url: 'api/users',
    method: "GET",
    success
  });
};
