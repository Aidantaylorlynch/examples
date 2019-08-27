import { API_URL, LEADERBOARD } from './../constants';
export const fetchLeaderboard = async () => {
    try{
        const url = API_URL + LEADERBOARD;
        const response = await fetch(url);
        const jsonResult = await response.json();
        return jsonResult;
    } catch(error){
        return {};
    }
};