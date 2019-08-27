import UserCurrentStatus from '../models/userCurrentStatus';
import {
    SET_USER_CURRENT_STATUS,
    SET_APP_INITIALISED,
    SET_FETCHING_MISSIONS,
    STORE_PERSON_DETAIL
} from './commonActionTypes';
import { ADD_MISSION_SCORE } from '../../mission/store/missionActionTypes';

const initialUserStatus: UserCurrentStatus = {
    score: 0,
    missionsLeft: 0
};

const initialState = {
    userCurrentStatus: initialUserStatus,
    appIsInitialised: false,
    fetchingMissions: false,
    jobTitle: ''
};

const commonReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_CURRENT_STATUS:
            return {
                ...state,
                userCurrentStatus: action.payload.userCurrentStatus
            };
        case STORE_PERSON_DETAIL:
            return {
                ...state,
                jobTitle: action.payload.jobTitle
            };
        case ADD_MISSION_SCORE:
            return {
                ...state,
                userCurrentStatus: {
                    ...state.userCurrentStatus,
                    score: state.userCurrentStatus.score + action.payload.points
                }
            };
        case SET_APP_INITIALISED:
            return {
                ...state,
                appIsInitialised: action.payload.appIsInitialised
            };
        case SET_FETCHING_MISSIONS:
            return {
                ...state,
                fetchingMissions: action.payload.fetchingMissions
            };
    }
    return state;
};

export default commonReducer;
