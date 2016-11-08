import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';
import NewBoardItem from './new_board_item';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});


export default connect(
  mapStateToProps,
)(NewBoardItem);
