import { STORE_PERSON_PHOTO, STORE_PERSON_DETAIL, SET_USER } from "../commonActionTypes";
import AzureADUSer from "../../../auth/models/azureADUser";

const initialUser = {} as AzureADUSer;

const initialState = {
    userPhoto: '',
    userPhotoMediaTag: '',
    user: initialUser
};

const persistentReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case STORE_PERSON_DETAIL:
            return {
                ...state,
                userPhotoMediaTag: action.payload.photoMediaTag
            };
        case STORE_PERSON_PHOTO:
            return {
                ...state,
                userPhoto: action.payload.photoBase64
            };
        case SET_USER:
            return {
                ...state,
                user: action.payload.user
            };
    }
    return state;
};

export default persistentReducer;