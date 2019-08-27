import {
    FetchUserCurrentStatusAction,
    FETCH_USER_CURRENT_STATUS,
    SetUserCurrentStatusAction,
    SET_USER_CURRENT_STATUS,
    SetAppInitialisedAction,
    SET_APP_INITIALISED,
    SET_FETCHING_MISSIONS,
    SetFetchingMissionsAction,
    FETCH_PERSON_DETAIL,
    FetchPersonDetailAction,
    STORE_PERSON_DETAIL,
    StorePersonDetailAction,
    STORE_PERSON_PHOTO,
    StorePersonPhotoAction,
    SET_USER
} from './commonActionTypes';
import UserCurrentStatus from '../models/userCurrentStatus';
import AzureADUSer from '../../auth/models/azureADUser';

export const SET_USER_ACTION_CREATOR = (user: AzureADUSer) => {
    return {
        type: SET_USER,
        payload: {
            user
        }
    };
};

export const SET_FETCHING_MISSIONS_ACTION_CREATOR = (fetchingMissions: boolean): SetFetchingMissionsAction => {
    return {
        type: SET_FETCHING_MISSIONS,
        payload: {
            fetchingMissions
        }
    };
};

export const SET_APP_INITIALISED_ACTION_CREATOR = (
    appIsInitialised: boolean
): SetAppInitialisedAction => {
    return {
        type: SET_APP_INITIALISED,
        payload: {
            appIsInitialised
        }
    };
};

export const SET_USER_CURRENT_STATUS_ACTION_CREATOR = (
    userCurrentStatus: UserCurrentStatus
): SetUserCurrentStatusAction => {
    return {
        type: SET_USER_CURRENT_STATUS,
        payload: {
            userCurrentStatus
        }
    };
};

export const FETCH_USER_CURRENT_STATUS_ACTION_CREATOR = (
    userOID: string
): FetchUserCurrentStatusAction => {
    return {
        type: FETCH_USER_CURRENT_STATUS,
        payload: {
            userOID: userOID
        }
    };
};

export const FETCH_PERSON_DETAIL_ACTION_CREATOR = (personId: string): FetchPersonDetailAction => {
    return {
        type: FETCH_PERSON_DETAIL,
        payload: {
            personId: personId
        }
    };
};

export const STORE_PERSON_DETAIL_ACTION_CREATOR = (jobTitle: string, photoMediaTag: string): StorePersonDetailAction => {
    return {
        type: STORE_PERSON_DETAIL,
        payload: {
            jobTitle: jobTitle,
            photoMediaTag: photoMediaTag
        }
    };
};

export const STORE_PERSON_PHOTO_ACTION_CREATOR = (photoBase64: string | undefined): StorePersonPhotoAction => {
    return {
        type: STORE_PERSON_PHOTO,
        payload: {
            photoBase64: photoBase64
        }
    };
};