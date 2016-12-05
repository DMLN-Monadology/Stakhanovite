import { connect } from 'react-redux';
import { createBoard, fetchUsersSearches } from '../../actions/board_actions';
import BoardsIndex from './boards_index';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchUsersSearches: () => dispatch(fetchUsersSearches())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardsIndex);
