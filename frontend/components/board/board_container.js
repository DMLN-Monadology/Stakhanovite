import { connect } from 'react-redux';
import Board from './board';
import { fetchBoard,
         fetchUsersSearches,
         createMembership,
         deleteMembership
       } from '../../actions/board_actions';

import { createList,
         restructureList,
         deleteList
} from '../../actions/list_actions';

import { createCard,
         restructureCard,
         deleteCard
} from '../../actions/card_actions';

const mapStateToProps = (state, { params }) => {
  const boardId = parseInt(params.boardId);
  return {
    boardId: boardId,
    boards: state.session.currentUser.owned_boards,
    current_board: state.session.current_board,
    current_user_id: state.session.currentUser.id,
    all_users: state.session.all_users
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBoard: (id) => dispatch(fetchBoard(id)),
  createList: (list) => dispatch(createList(list)),
  restructureList: (list) => dispatch(restructureList(list)),
  deleteList: (id) => dispatch(deleteList(id)),
  createCard: (card) => dispatch(createCard(card)),
  restructureCard: (card) => dispatch(restructureCard(card)),
  deleteCard: (id) => dispatch(deleteCard(id)),
  fetchUsersSearches: () => dispatch(fetchUsersSearches()),
  createMembership: (membership) => dispatch(createMembership(membership)),
  deleteMembership: (id) => dispatch(deleteMembership(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
