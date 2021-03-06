import { connect } from 'react-redux';
import { signout } from '../../actions/session_actions';
import NavBar from './navbar';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
