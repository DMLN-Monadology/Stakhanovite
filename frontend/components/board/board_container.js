import { connect } from 'react-redux';
import Board from './board';
import { fetchBoard } from '../../actions/board_actions';


const mapStateToProps = (state, { params }) => {
  const boardId = parseInt(params.boardId);
  return {
    boardId: boardId,
    boards: state.session.currentUser.owned_boards
  };
};

const mapDispatchToProps = dispatch => ({
  fetchBoard: (id) => dispatch(fetchBoard(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
