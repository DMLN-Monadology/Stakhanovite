import { connect } from 'react-redux';
import { signin } from '../../actions/session_actions'
import Home from './home';

const mapDispatchToProps = (dispatch) => ({
    guestSignIn: (user) => dispatch(signin(user)),
});

export default connect(
  mapDispatchToProps
)(Home);

//not used atm
