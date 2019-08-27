import UserCurrentStatus from '../models/userCurrentStatus';
import AzureADUSer from '../../auth/models/azureADUser';

export const FETCH_USER_CURRENT_STATUS = 'FETCH_USER_CURRENT_STATUS';
export const SET_USER_CURRENT_STATUS = 'SET_USER_CURRENT_STATUS';
export const SET_APP_INITIALISED = 'SET_APP_INITIALISED';
export const SET_FETCHING_MISSIONS = 'FETCH_FETCHING_MISSIONS'

export const FETCH_PERSON_DETAIL = 'FETCH_PERSON_DETAIL';
export const STORE_PERSON_DETAIL = 'STORE_PERSON_DETAIL';
export const STORE_PERSON_PHOTO = 'STORE_PERSON_PHOTO';

export const SET_USER = 'SET_USER';

export interface SetUserAction {
    type: typeof SET_USER;
    payload: {
        user: AzureADUSer;
    };
}

export interface SetFetchingMissionsAction {
    type: typeof SET_FETCHING_MISSIONS;
    payload: {
        fetchingMissions: boolean;
    };
}

export interface SetAppInitialisedAction {
    type: typeof SET_APP_INITIALISED;
    payload: {
        appIsInitialised: boolean;
    };
}

export interface SetUserCurrentStatusAction {
    type: typeof SET_USER_CURRENT_STATUS;
    payload: {
        userCurrentStatus: UserCurrentStatus;
    };
}

export interface FetchUserCurrentStatusAction {
    type: typeof FETCH_USER_CURRENT_STATUS;
    payload: {
        userOID: string;
    };
}

export interface FetchPersonDetailAction {
    type: typeof FETCH_PERSON_DETAIL;
    payload: {
        personId: string;
    };
};

export interface StorePersonDetailAction {
    type: typeof STORE_PERSON_DETAIL;
    payload: {
        jobTitle: string;
        photoMediaTag: string;
    }
}

export interface StorePersonPhotoAction {
    type: typeof STORE_PERSON_PHOTO;
    payload: {
        photoBase64: string | undefined;
    }
}