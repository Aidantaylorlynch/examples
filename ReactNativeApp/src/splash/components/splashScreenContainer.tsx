import SplashScreen from './splashScreen';
import { connect } from 'react-redux';
import { AppState } from './../../rootReducer';
import { FETCH_USER_CURRENT_STATUS_ACTION_CREATOR } from '../../common/store/commonActions';

const mapStateToProps = (state: AppState) => {
    return {
        quotes: state.splashReducer.quotes,
        user: state.persistedReducer.user,
        loading: state.splashReducer.loading
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchUserCurrentStatus: (userOID: string) => dispatch(FETCH_USER_CURRENT_STATUS_ACTION_CREATOR(userOID))
    };
};

const SplashScreenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SplashScreen);

export default SplashScreenContainer;
