import { persistReducer } from 'redux-persist';
import { AsyncStorage } from 'react-native';
import { combineReducers } from 'redux';
import commonReducer from './common/store/commonReducer';
import persistentReducer from './common/store/persistent/persistentReducer';
import knowledgeReducer from './knowledge/knowledgeReducer';
import missionReducer from './mission/store/missionReducer';
import teamReducer from './team/store/teamReducer';
import splashReducer from './splash/store/splashReducer';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, persistentReducer);

const rootReducer = combineReducers({
    commonReducer,
    knowledgeReducer,
    missionReducer,
    teamReducer,
    splashReducer,
    persistedReducer
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;
