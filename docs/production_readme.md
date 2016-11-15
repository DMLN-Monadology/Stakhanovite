# Stakhanovites

[Stakhanovites live][heroku]

[heroku]: http://stakhanovites.com/#/

Stakhanovites is a full-stack web application inspired by Trello,
Alexey Stakhanov (an exceptionally hardworking miner in the former
Soviet Union), and the Stakhanovites movement. It utilizes Ruby on Rails
on the backend, a PostgreSQL database, and React.js with a Redux
architectural framework on the frontend.


## Features & Implementation

### Boards

Boards are stored in the database with with a title and an owner_id.
Through ActiveRecord associations, each board belongs to an owner through the foreign key owner_id. Similarly, each board has many lists.

Boards are rendered using a boards_index parent component that calls a child functional component, boards_index_item, to render each board as a list item within an unordered list. Appended to the end of this list is the board_form component, which handles new board creations, and is accessible through a pop-up.

### Lists

Lists are stored in the database with a title and a board_id, as well as its current order relative to other lists (used by the frontend to render lists in the correct order). Through ActiveRecord associations, each list belongs to a board through the foreign key board_id. Similarly, each list has many cards.

The lists are rendered using a complicated, nesting structure of lists and slots to handle drag and drop operations.

At the top level, the current_board component renders each of its member lists through the component list_slot. Each list_slot renders a list_index_item, and keeps track of its current ordering to enable drag and drop movements.

The drag and drop operation is thus: When a drag source of type 'list' is dropped onto a drag target of matching type 'list', the list slot component will check the order of the arriving list to that of the resident list.

If the arriving list order is the same as that of the resident list, the user has just dragged a list onto its current slot, and no action will be taken.

However, if the orders do not equal, the component dispatches an action to the backend with params instructing the restructuring of list orderings. Every list of the current_board is re-ordered, and the entire board is re-rendered with the new ordering.


### Cards

Lists are stored in the database with a title and a list_id, as well as its current order relative to other cards (used by the frontend to render cards in the correct order). Through ActiveRecord associations, each card belongs to a list through the foreign key list_id. Cards are the atomic elements of this app.


The cards are rendered using a complicated, nesting structure of card_index_item and card slots similarly to that of lists, but with the added extra complexity of cards being able to move not only within lists, but between lists as well.

The cards are rendered within each list, which passes each member card into a card_slot, which saves the resident card's order. In addition, it will also saves the resident card's list_id.

The drag and drop operation is thus: When a drag source of type 'card' is dropped onto a drag target of matching type 'card' (to ensure one cannot drag and drop a card onto a list slot), the card slot component will check 1) the order and 2)the list_id of the arriving card to that of the resident list.

If both the order and the list_id of the arriving card equals that of the resident card, then the user have dragged a card onto its own slot, and no action is triggered.

Should it be the case that either the list_id or the order of the arriving card is different from that of the resident card, the slot component will dispatch an action to the backend with params of both the arriving card and the resident card. The backend checks these params to discriminate inter and intralists movement of cards, and appropriately updates the cards. The entire board is re-rendered as a result.

## Future Directions for the Project

In addition to the features already implemented, I plan to continue work and implement the following features:

### Adding Members to Boards

Adding Members to Boards is a standard feature of Trello (and thus Stakhanovites). Without it, the app cannot be used for collaboration between different users.

### Comments and Due Dates

Comments will provide users with an additional means of communicating with team members in the context of the cards to which the comments belong.

Due dates will provide a means for a more bureaucratic management of projects, allowing managers to delegate tasks and workflows not only across space, but time as well.
