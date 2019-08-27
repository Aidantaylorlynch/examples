import { all, takeEvery, put, call } from 'redux-saga/effects';
import {
    FETCH_LEADERBOARD,
    FetchLeaderboardAction
} from './teamActionTypes';
import { SET_LEADERBOARD_ACTION_CREATOR, SET_LEADERBOARD_LOADING_STATE_ACTION_CREATOR } from './teamActions';
import TeamUser from '../models/teamuser';
import { fetchLeaderboard } from '../../common/teamService';

function* getLeaderboard(action: FetchLeaderboardAction) {
    yield put(SET_LEADERBOARD_LOADING_STATE_ACTION_CREATOR(true));
    const teamUsers: Array<TeamUser> = yield call(fetchLeaderboard);
    yield put(SET_LEADERBOARD_ACTION_CREATOR(teamUsers));
    yield put(SET_LEADERBOARD_LOADING_STATE_ACTION_CREATOR(false));
}

export function* watchFetchLeaderboard() {
    yield takeEvery(FETCH_LEADERBOARD, getLeaderboard);
}

export default function* teamSaga() {
    yield all([watchFetchLeaderboard(),]);
}
