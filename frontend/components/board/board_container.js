import { connect } from 'react-redux';
import Board from './board';
import { fetchBoard } from '../../actions/board_actions';
import { createList, restructureList } from '../../actions/list_actions';
import { createCard, perestroikaInOneList, perestroikaInTwoLists } from '../../actions/card_actions';

const mapStateToProps = (state, { params }) => {
  const boardId = parseInt(params.boardId);
  return {
    boardId: boardId,
    boards: state.session.currentUser.owned_boards,
    current_board: state.session.current_board
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBoard: (id) => dispatch(fetchBoard(id)),
  createList: (list) => dispatch(createList(list)),
  restructureList: (list) => dispatch(restructureList(list)),
  createCard: (card) => dispatch(createCard(card)),
  perestroikaInOneList: (card) => dispatch(perestroikaInOneList(card)),
  perestroikaInTwoLists: (card) => dispatch(perestroikaInTwoLists(card))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
