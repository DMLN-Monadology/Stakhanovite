import { connect } from 'react-redux';
import { signin, signup, receiveErrors } from '../../actions/session_actions'
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, { location }) => {
  const formType = location.pathname.slice(1);
  const processForm = (formType === 'signin') ? signin : signup;

  return {
    processForm: user => dispatch(processForm(user)),
    formType,
    clearErrors: () => dispatch(receiveErrors([]))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
