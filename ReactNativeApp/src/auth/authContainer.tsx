import Auth from './auth';
import { connect } from 'react-redux';
import { AppState } from '../rootReducer';
import AzureADUSer from './models/azureADUser';
import { SET_USER_ACTION_CREATOR } from '../common/store/commonActions';

const mapStateToProps = (state: AppState) => {
    return {
        user: state.persistedReducer.user
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        setUser: (user: AzureADUSer) => dispatch(SET_USER_ACTION_CREATOR(user))
    };
};

const AuthContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth);

export default AuthContainer;
