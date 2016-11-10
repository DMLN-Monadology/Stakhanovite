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
    data: {list, perestroika: false},
    success,
    error
  });
};

export const restructureList = (list, success, error) => {
  $.ajax ({
    url: `api/lists/${list.id}`,
    method: "PATCH",
    data: {list, perestroika: true},
    success,
    error
  });
};

export const deleteList = (id, success, error) => {
  $.ajax ({
    url: `api/lists/${id}`,
    method: "DELETE",
    success,
    error
  });
};
