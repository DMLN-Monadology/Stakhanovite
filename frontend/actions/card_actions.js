export const CREATE_CARD = "CREATE_CARD";
export const DELETE_CARD = "DELETE_CARD";
export const RESTRUCTURE_CARD = "RESTRUCTURE_CARD";

export const createCard = (card) => ({
  type: CREATE_CARD,
  card
});

export const deleteCard = (id) => ({
  type: DELETE_CARD,
  id
});

export const restructureCard = (card) => ({
  type: RESTRUCTURE_CARD,
  card
});
