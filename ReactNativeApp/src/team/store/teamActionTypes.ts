import TeamUser from "../models/teamuser";

export const FETCH_LEADERBOARD = 'FETCH_LEADERBOARD';
export const SET_LEADERBOARD = 'SET_LEADERBOARD';
export const SET_LEADERBOARD_LOADING_STATE = 'SET_LEADERBOARD_LOADING_STATE';

export interface FetchLeaderboardAction {
    type: typeof FETCH_LEADERBOARD;
};

export interface SetLeaderboardAction {
    type: typeof SET_LEADERBOARD;
    payload: {
        teamUsers: Array<TeamUser>
    };
};

export interface SetLeaderboardLoadingStateAction {
    type: typeof SET_LEADERBOARD_LOADING_STATE;
    payload: {
        loading: boolean
    };
};