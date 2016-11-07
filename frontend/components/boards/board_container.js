import { connect } from 'react-redux';
import { createBoard, deleteBoard } from '../../actions/board_actions';
import BoardsIndex from './boards_index';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  createBoard: (board) => dispatch(createBoard(board)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardsIndex);
