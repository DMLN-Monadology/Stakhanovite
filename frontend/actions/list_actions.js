export const CREATE_LIST = "CREATE_LIST";
export const DELETE_LIST = "DELETE_LIST";
export const RESTRUCTURE_LIST = "RESTRUCTURE_LIST";


export const createList = (list) => ({
  type: CREATE_LIST,
  list
});

export const deleteList = (id) => ({
  type: DELETE_LIST,
  id
});

export const restructureList = (list) => ({
  type: RESTRUCTURE_LIST,
  list
});
