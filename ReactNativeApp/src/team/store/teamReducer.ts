import TeamUser from "../models/teamuser";
import { SET_LEADERBOARD, SET_LEADERBOARD_LOADING_STATE } from "./teamActionTypes";

const initialState = {
    teamUsers: [] as TeamUser[],
    loadingUsers: false
};

const teamReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_LEADERBOARD:
            return {
                ...state,
                teamUsers: action.payload.teamUsers
            };
        case SET_LEADERBOARD_LOADING_STATE:
            return {
                ...state,
                loadingUsers: action.payload.loading
            };
    }
    return state;
};

export default teamReducer;