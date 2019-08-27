import { takeEvery, call, put, all, select } from 'redux-saga/effects';
import {
    FETCH_USER_CURRENT_STATUS,
    FetchUserCurrentStatusAction,
    FETCH_PERSON_DETAIL,
    FetchPersonDetailAction
} from './commonActionTypes';
import { fetchUserCurrentStatus, fetchPersonDetail, fetchPersonPhoto } from './../userService';
import UserCurrentStatus from '../models/userCurrentStatus';
import { SET_USER_CURRENT_STATUS_ACTION_CREATOR, STORE_PERSON_DETAIL_ACTION_CREATOR, STORE_PERSON_PHOTO_ACTION_CREATOR } from './commonActions';
import { SET_SPLASH_SCREEN_LOADING_STATE_ACTION_CREATOR } from '../../splash/store/splashActions';

function* getUserCurrentStatus(action: FetchUserCurrentStatusAction) {
    yield put(SET_SPLASH_SCREEN_LOADING_STATE_ACTION_CREATOR(true));
    const userCurrentStatus: UserCurrentStatus = yield call(
        fetchUserCurrentStatus,
        action.payload.userOID
    );
    yield put(SET_USER_CURRENT_STATUS_ACTION_CREATOR(userCurrentStatus));
    yield put(SET_SPLASH_SCREEN_LOADING_STATE_ACTION_CREATOR(false));
}

function* getPersonDetail(action: FetchPersonDetailAction) {
    const personDetail = yield call(fetchPersonDetail, action.payload.personId);
    const currentState = yield select();
    const currentPhotoMediaTag = currentState.persistedReducer.userPhotoMediaTag;
    yield put(STORE_PERSON_DETAIL_ACTION_CREATOR(personDetail.jobTitle, personDetail.photoMediaTag));

    if(currentPhotoMediaTag !== personDetail.photoMediaTag) {
        if(personDetail.photoMediaTag) {
            const personPhoto = yield call(fetchPersonPhoto, action.payload.personId);
            yield put(STORE_PERSON_PHOTO_ACTION_CREATOR(personPhoto));
        } else {
            yield put(STORE_PERSON_PHOTO_ACTION_CREATOR(undefined));
        }
    }
}

export function* watchFetchUserCurrentStatus() {
    yield takeEvery(FETCH_USER_CURRENT_STATUS, getUserCurrentStatus);
}

export function* watchFetchPersonDetail() {
    yield takeEvery(FETCH_PERSON_DETAIL, getPersonDetail);
}

export default function* commonSaga() {
    yield all([
        watchFetchUserCurrentStatus(),
        watchFetchPersonDetail()
    ]);
}
