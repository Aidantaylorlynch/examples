import Mission from "../models/mission";
import MissionListItemDetail from "../models/missionListItemDetail";
import MissionAnswer from "../models/missionAnswer";

export const GET_MISSION_SCORE = 'GET_MISSION_SCORE';
export const ADD_MISSION_SCORE = 'ADD_MISSION_SCORE';
export const FETCH_USER_INCOMPLETE_MISSIONS = "FETCH_USER_INCOMPLETE_MISSIONS";
export const SET_USER_INCOMPLETE_MISSIONS = "SET_USER_INCOMPLETE_MISSIONS";

export const COMPLETE_MISSION = "COMPLETE_MISSION";
export const REMOVE_COMPLETED_MISSION = "REMOVE_COMPLETED_MISSION";
export const SET_SCORE_RECEIVED = "SET_SCORE_RECEIVED";

export const FETCH_MISSION = "FETCH_MISSION";
export const SET_SELECTED_MISSION = "SET_SELECTED_MISSION";

export interface SetUserIncompleteMissionsAction {
    type: typeof SET_USER_INCOMPLETE_MISSIONS;
    payload: {
        missions: Array<MissionListItemDetail>;
    };
};

export interface FetchUserIncompleteMissionsAction {
    type: typeof FETCH_USER_INCOMPLETE_MISSIONS;
    payload: {
        userOID: string;
    };
};

export interface AddMissionScoreAction {
    type: typeof ADD_MISSION_SCORE;
    payload: {
        points: number;
    };
};

export interface GetMissionScoreAction {
    type: typeof GET_MISSION_SCORE;
};

export interface CompleteMissionAction {
    type: typeof COMPLETE_MISSION;
    payload: {
        userOID: string;
        missionAnswers: MissionAnswer;
    };
};

export interface RemoveCompletedMissionAction {
    type: typeof REMOVE_COMPLETED_MISSION;
    payload: {
        missionId: string;
    };
};

export interface FetchMissionAction {
    type: typeof FETCH_MISSION;
    payload: {
        missionId: string;
    };
};

export interface SetSelectedMissionAction {
    type: typeof SET_SELECTED_MISSION;
    payload: {
        mission: Mission;
    };
};

export interface SetScoreReceivedAction {
    type: typeof SET_SCORE_RECEIVED;
    payload: {
        score: number | null;
    };
};