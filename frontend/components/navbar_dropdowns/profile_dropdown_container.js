import {connect} from 'react-redux';
import { signout } from '../../actions/session_actions';
import ProfileDropDown from './profile_dropdown';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  signout: () => dispatch(signout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileDropDown);
