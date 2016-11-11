export const CREATE_CARD = "CREATE_CARD";
export const DELETE_CARD = "DELETE_CARD";
export const PERESTROIKA_IN_ONE_LIST = "PERESTROIKA_IN_ONE_LIST";
export const PERESTROIKA_IN_TWO_LISTS = "PERESTROIKA_IN_TWO_LISTS";

export const createCard = (card) => ({
  type: CREATE_CARD,
  card
});

export const deleteCard = (id) => ({
  type: DELETE_CARD,
  id
});

export const perestroikaInOneList = (card) => ({
  type: PERESTROIKA_IN_ONE_LIST,
  card
});

export const perestroikaInTwoLists = (card, fiveyearplan) => ({
  type: PERESTROIKA_IN_TWO_LISTS,
  card,
  fiveyearplan
})
