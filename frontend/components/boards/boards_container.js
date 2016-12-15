import { connect } from 'react-redux';
import { createBoard, deleteBoard } from '../../actions/board_actions';
import BoardsIndex from './boards_index';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  deleteBoard: (id) => dispatch(deleteBoard(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardsIndex);
