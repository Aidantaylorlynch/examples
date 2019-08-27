import { connect } from 'react-redux';
import { AppState } from '../../rootReducer';
import Score from './score';
import {
    FETCH_USER_CURRENT_STATUS_ACTION_CREATOR,
    SET_APP_INITIALISED_ACTION_CREATOR,
    FETCH_PERSON_DETAIL_ACTION_CREATOR
} from '../../common/store/commonActions';
import { FETCH_USER_INCOMPLETE_MISSIONS_ACTION_CREATOR } from '../../mission/store/missionActions';

const mapStateToProps = (state: AppState) => {
    return {
        appIsInitialised: state.commonReducer.appIsInitialised,
        user: state.persistedReducer.user,
        userCurrentStatus: state.commonReducer.userCurrentStatus,
        jobTitle: state.commonReducer.jobTitle,
        userPhoto: state.persistedReducer.userPhoto
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchUserCurrentStatus: (userOID: string) =>
            dispatch(FETCH_USER_CURRENT_STATUS_ACTION_CREATOR(userOID)),
        setAppIsInitialised: (appIsInitialised: boolean) =>
            dispatch(SET_APP_INITIALISED_ACTION_CREATOR(appIsInitialised)),
        fetchUserIncompleteMissions: (userOID: string) => dispatch(FETCH_USER_INCOMPLETE_MISSIONS_ACTION_CREATOR(userOID)),
        fetchPersonDetail: (personId: string) => dispatch(FETCH_PERSON_DETAIL_ACTION_CREATOR(personId))
    };
};

const ScoreContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Score);

export default ScoreContainer;
