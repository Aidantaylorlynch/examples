import {
    ADD_MISSION_SCORE,
    AddMissionScoreAction,
    FetchUserIncompleteMissionsAction,
    FETCH_USER_INCOMPLETE_MISSIONS,
    SetUserIncompleteMissionsAction,
    SET_USER_INCOMPLETE_MISSIONS,

    CompleteMissionAction,
    COMPLETE_MISSION,
    RemoveCompletedMissionAction,
    REMOVE_COMPLETED_MISSION,

    FetchMissionAction,
    FETCH_MISSION,
    SetSelectedMissionAction,
    SET_SELECTED_MISSION,
    
    SetScoreReceivedAction,
    SET_SCORE_RECEIVED
} from './missionActionTypes';
import Mission from '../models/mission';
import MissionListItemDetail from '../models/missionListItemDetail';
import MissionAnswer from '../models/missionAnswer';

export const SET_USER_INCOMPLETE_MISSIONS_ACTION_CREATOR = (missions: Array<MissionListItemDetail>): SetUserIncompleteMissionsAction => {
    return {
        type: SET_USER_INCOMPLETE_MISSIONS,
        payload: {
            missions
        }
    };
};

export const FETCH_USER_INCOMPLETE_MISSIONS_ACTION_CREATOR = (userOID: string): FetchUserIncompleteMissionsAction => {
    return {
        type: FETCH_USER_INCOMPLETE_MISSIONS,
        payload: {
            userOID: userOID
        }
    };
};

export const ADD_MISSION_SCORE_ACTION_CREATOR = (
    points: number
): AddMissionScoreAction => {
    return {
        type: ADD_MISSION_SCORE,
        payload: {
            points
        }
    };
};

export const COMPLETE_MISSION_ACTION_CREATOR = (userOID:string, missionAnswers: MissionAnswer): CompleteMissionAction => {
    return {
        type: COMPLETE_MISSION,
        payload: {
            userOID,
            missionAnswers
        }
    };
};

export const REMOVE_COMPLETED_MISSION_ACTION_CREATOR = (missionId: string): RemoveCompletedMissionAction => {
    return {
        type: REMOVE_COMPLETED_MISSION,
        payload: {
            missionId
        }
    };
};

export const FETCH_MISSION_ACTION_CREATOR = (missionId: string): FetchMissionAction => {
    return {
        type: FETCH_MISSION,
        payload: {
            missionId: missionId
        }
    };
};

export const SET_SELECTED_MISSION_ACTION_CREATOR = (mission: Mission): SetSelectedMissionAction => {
    return {
        type: SET_SELECTED_MISSION,
        payload: {
            mission: mission
        }
    };
};

export const SET_SCORE_RECEIVED_ACTION_CREATOR = (score: number | null): SetScoreReceivedAction => {
    return {
        type: SET_SCORE_RECEIVED,
        payload: {
            score: score
        }
    };
};