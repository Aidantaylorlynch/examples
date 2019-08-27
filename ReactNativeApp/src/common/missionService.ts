import { API_URL, USER_INCOMPLETE_MISSIONS, COMPLETE_MISSION, FETCH_MISSION } from './../constants';
import MissionAnswer from '../mission/models/missionAnswer';

export const fetchUserIncompleteMissions = async (userOID: string) => {
    try {
        const url = API_URL + USER_INCOMPLETE_MISSIONS + userOID;
        const response = await fetch(url);
        const jsonResult = await response.json();
        return jsonResult;
    } catch (error) {
        return [];
    };
};

export const postCompleteMission = async (userOID: string, missionAnswers: MissionAnswer) => {
    try {
        const url = API_URL + COMPLETE_MISSION;
        const payload = {
            personId: userOID,
            missionAnswers
        };
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(payload)
        });
        const jsonResult = await response.json();
        return jsonResult;

    } catch (error) {
        return -1;
    };
};

export const fetchMission = async (missionId: string) => {
    try {
        const url = API_URL + FETCH_MISSION.replace("{id}", missionId);
        const response = await fetch(url);
        const jsonResult = await response.json();
        return jsonResult;
    } catch (error) {
        return {};
    };
};