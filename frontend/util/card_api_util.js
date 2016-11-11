export const createCard = (card, success, error) => {
  $.ajax ({
    url: `api/cards`,
    method: "POST",
    data: {card},
    success,
    error
  });
};

export const updateCard = (card, success, error) => {
  $.ajax ({
    url: `api/cards/${card.id}`,
    method: "PATCH",
    data: {card, perestroika: false},
    success,
    error
  });
};

export const perestroikaInOneList = (card, success, error) => {
  $.ajax ({
    url: `api/cards/${card.id}`,
    method: "PATCH",
    data: {card, perestroikaInOneList: true},
    success,
    error
  });
};

export const perestroikaInTwoLists = (card, fiveyearplan, success, error) => {
  $.ajax ({
    url: `api/cards/${card.id}`,
    method: "PATCH",
    data: {card, fiveyearplan, perestroikaInTwoLists: true},
    success,
    error
  });
};

export const deleteCard = (id, success, error) => {
  $.ajax ({
    url: `api/cards/${id}`,
    method: "DELETE",
    success,
    error
  });
};
