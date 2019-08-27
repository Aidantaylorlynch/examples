import { SET_SPLASH_SCREEN_LOADING_STATE, SetSplashScreenLoadingStateAction } from './splashActionTypes';

export const SET_SPLASH_SCREEN_LOADING_STATE_ACTION_CREATOR = (loading: boolean): SetSplashScreenLoadingStateAction => {
    return {
        type: SET_SPLASH_SCREEN_LOADING_STATE,
        payload: {
            loading
        }
    };
};