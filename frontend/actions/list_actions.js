export const CREATE_LIST = "CREATE_LIST";
export const DELETE_LIST = "DELETE_LIST";
export const RECEIVE_LIST = "RECEIVE_LIST";
export const RECEIVE_LIST_ERRORS = "RECEIVE_LIST_ERRORS";

export const createList = (list) => ({
  type: CREATE_LIST,
  list
});

export const deleteList = (id) => ({
  type: DELETE_LIST,
  id
});


export const receiveList = (list) => ({
  type: RECEIVE_LIST,
  list
})

export const receiveListErrors = (errors) => ({
  type: RECEIVE_LIST_ERRORS,
  errors
})
