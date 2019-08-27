export const createTimeStampedPayload = () => {
    return {
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString()
    }
};
export const calculateTimeOnPage = (startingTime: Date) => {
    const time = (new Date().getTime() - startingTime.getTime()) / 1000;
    return time;
}
export const createTimeOnScreenPayload = (screenName: string, secondsOnScreen: number) => {
    return {
        screenName,
        secondsOnScreen: secondsOnScreen.toString(),
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString()
    };
};
export const createTimeToCompleteMissionPayload = (missionId: string, missionTitle: string, missionPoints: number, secondsToComplete: number) => {
    return {
        missionId,
        missionTitle,
        missionPoints: missionPoints.toString(),
        secondsToComplete: secondsToComplete.toString(),
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString()
    };
};
export const createAndroidUserQuitMissionPayload = (missionId: string, missionTitle: string, missionPoints: number) => {
    return {
        missionId,
        missionTitle,
        missionPoints: missionPoints.toString(),
        time: new Date().toLocaleTimeString(),
        date: new Date().toLocaleDateString()
    };
};
export const SESSION_START = "Session Start";
export const SESSION_RESUME = "Session Resume";
export const SESSION_END = "Session End";