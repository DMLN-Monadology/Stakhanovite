import { connect } from 'react-redux';
import { createBoard } from '../../actions/board_actions';
import BoardsIndex from './boards_index';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});



export default connect(
  mapStateToProps
)(BoardsIndex);
