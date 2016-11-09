import { connect } from 'react-redux';
import { createList } from '../../actions/list_actions';
import ListForm from './list_form';

const mapStateToProps = (state) => ({
  current_board: state.session.current_board
});

const mapDispatchToProps = (dispatch) => ({
  createList: (list) => dispatch(createList(list))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListForm);
