import Login from './login';
import { connect } from 'react-redux';
import { AppState } from '../../rootReducer';

const mapStateToProps = (state: AppState) => {
    return {
        user: state.persistedReducer.user
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {};
};

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

export default LoginContainer;
