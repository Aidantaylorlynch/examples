import { all, takeEvery, put, call } from 'redux-saga/effects';

import {
    FETCH_USER_INCOMPLETE_MISSIONS,
    FetchUserIncompleteMissionsAction,
    COMPLETE_MISSION,
    CompleteMissionAction,
    FetchMissionAction,
    FETCH_MISSION
} from './missionActionTypes';
import { ADD_MISSION_SCORE_ACTION_CREATOR, SET_USER_INCOMPLETE_MISSIONS_ACTION_CREATOR, REMOVE_COMPLETED_MISSION_ACTION_CREATOR, SET_SELECTED_MISSION_ACTION_CREATOR, SET_SCORE_RECEIVED_ACTION_CREATOR } from './missionActions';
import Mission from '../models/mission';
import { fetchUserIncompleteMissions, postCompleteMission, fetchMission } from '../../common/missionService';
import MissionListItemDetail from '../models/missionListItemDetail';
import { SET_FETCHING_MISSIONS_ACTION_CREATOR } from '../../common/store/commonActions';

function* completeMissionEffect(action: CompleteMissionAction) {
    yield put(SET_SCORE_RECEIVED_ACTION_CREATOR(null));
    const score: number = yield call(postCompleteMission, action.payload.userOID, action.payload.missionAnswers);
    yield put(REMOVE_COMPLETED_MISSION_ACTION_CREATOR(action.payload.missionAnswers.missionId));
    yield put(ADD_MISSION_SCORE_ACTION_CREATOR(score));
    yield put(SET_SCORE_RECEIVED_ACTION_CREATOR(score));
}

function* getUserIncompeteMissionsEffect(action: FetchUserIncompleteMissionsAction) {
    yield put(SET_FETCHING_MISSIONS_ACTION_CREATOR(true));
    const userIncompleteMissions: Array<MissionListItemDetail> = yield call(fetchUserIncompleteMissions, action.payload.userOID);
    yield put(SET_USER_INCOMPLETE_MISSIONS_ACTION_CREATOR(userIncompleteMissions));
    yield put(SET_FETCHING_MISSIONS_ACTION_CREATOR(false));
}

function* fetchMissionEffect(action: FetchMissionAction) {
    const mission: Mission = yield call(fetchMission, action.payload.missionId);
    yield put(SET_SELECTED_MISSION_ACTION_CREATOR(mission));
}

export function* watchFetchUserIncompleteMissions() {
    yield takeEvery(FETCH_USER_INCOMPLETE_MISSIONS, getUserIncompeteMissionsEffect)
}

export function* watchCompleteMission() {
    yield takeEvery(COMPLETE_MISSION, completeMissionEffect);
}

export function* watchFetchMission() {
    yield takeEvery(FETCH_MISSION, fetchMissionEffect);
}

export default function* missionScoreSage() {
    yield all([
        watchFetchUserIncompleteMissions(),
        watchCompleteMission(),
        watchFetchMission()
    ]);
}
