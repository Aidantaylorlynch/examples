import {
    FETCH_LEADERBOARD,
    FetchLeaderboardAction,
    SET_LEADERBOARD,
    SetLeaderboardAction,
    SET_LEADERBOARD_LOADING_STATE,
    SetLeaderboardLoadingStateAction
} from './teamActionTypes';
import TeamUser from '../models/teamuser';

export const SET_LEADERBOARD_ACTION_CREATOR = (teamUsers: Array<TeamUser>): SetLeaderboardAction => {
    return {
        type: SET_LEADERBOARD,
        payload: {
            teamUsers
        }
    };
};

export const FETCH_LEADERBOARD_ACTION_CREATOR = (): FetchLeaderboardAction => {
    return {
        type: FETCH_LEADERBOARD
    };
};

export const SET_LEADERBOARD_LOADING_STATE_ACTION_CREATOR = (loading: boolean): SetLeaderboardLoadingStateAction => {
    return {
        type: SET_LEADERBOARD_LOADING_STATE,
        payload: {
            loading
        }
    };
};