import { API_URL, USER_CURRENT_STATUS, FETCH_PERSON_DETAIL, FETCH_PERSON_PHOTO } from './../constants';
import RNFetchBlob from 'rn-fetch-blob';

export const fetchUserCurrentStatus = async (userOID: string) => {
    try {
        const url = API_URL + USER_CURRENT_STATUS + userOID;
        const response = await fetch(url);
        const jsonResult = await response.json();
        return jsonResult;
    } catch (error) {
        return {
            score: 0,
            missionsLeft: 0
        };
    }
};

export const fetchPersonDetail = async (personId: string) => {
    try {
        const url = API_URL + FETCH_PERSON_DETAIL.replace("{id}", personId);
        const response = await fetch(url);
        const jsonResult = await response.json();
        return jsonResult;
    } catch (error) {
        throw error;
    }
};

export const fetchPersonPhoto = async (personId: string) => {
    try {
        const url = API_URL + FETCH_PERSON_PHOTO.replace("{id}", personId);
        const response = await RNFetchBlob.fetch('GET', url);
        const base64Image = await response.base64();
        const imgDataUri = "data:" + response.respInfo.headers['Content-Type'] + ";base64," + base64Image;
        return imgDataUri;
    } catch (error) {
        throw error;
    }
};