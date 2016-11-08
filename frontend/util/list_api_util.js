export const createList = (list, success, error) => {
  $.ajax ({
    url: `api/lists`,
    method: "POST",
    data: {list},
    success,
    error
  });
};

export const updateList = (list, success, error) => {
  $.ajax ({
    url: `api/lists/${list.id}`,
    method: "PATCH",
    data: {list},
    success,
    error
  });
};

export const deleteBoard = (id, success, error) => {
  $.ajax ({
    url: `api/lists/${id}`,
    method: "DELETE",
    success,
    error
  });
};
