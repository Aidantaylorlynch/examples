import Mission from './../models/mission';
import { SET_USER_INCOMPLETE_MISSIONS, REMOVE_COMPLETED_MISSION, SET_SELECTED_MISSION, SET_SCORE_RECEIVED } from './missionActionTypes';
import MissionListItemDetail from '../models/missionListItemDetail';

const initialState = {
    missions: [] as MissionListItemDetail[],
    selectedMission: {} as Mission,
    scoreReceived: null as number | null
};

const missionReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_INCOMPLETE_MISSIONS:
            return {
                ...state,
                missions: action.payload.missions
            };
        case REMOVE_COMPLETED_MISSION:
            return {
                ...state,
                missions: [...state.missions.filter(mission => mission.missionId !== action.payload.missionId)]
            };
        case SET_SELECTED_MISSION:
            return {
                ...state,
                selectedMission: action.payload.mission
            }
        case SET_SCORE_RECEIVED:
            return {
                ...state,
                scoreReceived: action.payload.score
            }
    }
    return state;
};

export default missionReducer;
