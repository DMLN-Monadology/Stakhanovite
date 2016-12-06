import { connect } from 'react-redux';
import Board from './board';
import { fetchBoard, fetchUsersSearches } from '../../actions/board_actions';
import { createList, restructureList } from '../../actions/list_actions';
import { createCard, restructureCard } from '../../actions/card_actions';

const mapStateToProps = (state, { params }) => {
  const boardId = parseInt(params.boardId);
  return {
    boardId: boardId,
    boards: state.session.currentUser.owned_boards,
    current_board: state.session.current_board,
    all_users: state.session.all_users
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBoard: (id) => dispatch(fetchBoard(id)),
  createList: (list) => dispatch(createList(list)),
  restructureList: (list) => dispatch(restructureList(list)),
  createCard: (card) => dispatch(createCard(card)),
  restructureCard: (card) => dispatch(restructureCard(card)),
  fetchUsersSearches: () => dispatch(fetchUsersSearches())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
