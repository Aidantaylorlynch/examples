export const SET_SPLASH_SCREEN_LOADING_STATE = "SET_SPLASH_SCREEN_LOADING_STATE";

export interface SetSplashScreenLoadingStateAction {
    type: typeof SET_SPLASH_SCREEN_LOADING_STATE;
    payload: {
        loading: boolean;
    };
};