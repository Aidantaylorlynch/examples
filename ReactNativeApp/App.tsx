import React from 'react';
import Analytics from 'appcenter-analytics';
import { SESSION_START, SESSION_RESUME, SESSION_END, createTimeStampedPayload, createTimeOnScreenPayload, calculateTimeOnPage, createAndroidUserQuitMissionPayload} from './analytics';
import { AppState } from 'react-native';
import { Component } from 'react';
import Navigation from './navigation';
import rootReducer from './src/rootReducer';
import { Provider } from 'react-redux';
import missionScoreSage from './src/mission/store/missionsSagas';
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import commonSaga from './src/common/store/commonSagas';
import teamSaga from './src/team/store/teamSagas';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { NavigationState } from 'react-navigation';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

const persistor = persistStore(store);

sagaMiddleware.run(missionScoreSage);
sagaMiddleware.run(teamSaga);
sagaMiddleware.run(commonSaga);

export default class App extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            analyticsStartTime: new Date()
        }
    };

    componentDidMount() {
        Analytics.trackEvent(SESSION_START, createTimeStampedPayload());
        AppState.addEventListener('change', this.handleAppStateChange);
    }
    
    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
    }
    

    resetAnalyticsStartTime() {
        this.setState({ analyticsStartTime: new Date() });
    };

    handleAppStateChange = (nextAppState: string) => {
        if (nextAppState === "active") {
            Analytics.trackEvent(SESSION_RESUME, createTimeStampedPayload());
            return;
        };
        if (nextAppState === 'background') {
            Analytics.trackEvent(SESSION_END, createTimeStampedPayload());
            return;
        };
    };

    

    getActiveRouteName(navigationState: NavigationState): any {
        return navigationState.routes[navigationState.index];
    };

    onNavigationStateChange(previousState: NavigationState, currentState: NavigationState, action: any) {
        const APP_STACK_INDEX = 1;
        interface missionFromNavigation {
            missionId: string,
            points: number,
            title: string
        }
        // is back button being pressd from mission
        const timeOnComponent = calculateTimeOnPage(this.state.analyticsStartTime);

        if (action.routeName === "App") {
            // previous state was splash screen
            Analytics.trackEvent("Time On Screen", createTimeOnScreenPayload("SplashScreen", timeOnComponent));
        } else if (action.routeName === "Score" || action.routeName === "MissionDetails" || action.routeName === "Team" || action.routeName === "Knowledge" || (action.routeName === "Mission" && previousState.index === APP_STACK_INDEX)) {
            // previous state was a tab
            const previousRouteIndex = previousState.routes[APP_STACK_INDEX].index;
            const previousRouteName = previousState.routes[APP_STACK_INDEX].routes[previousRouteIndex].key;
            Analytics.trackEvent("Time On Screen", createTimeOnScreenPayload(previousRouteName, timeOnComponent));
        } else if (action.routeName === "Mission" && action.params !== undefined) {
            // previous state was mission details but android user pressed back button
            const previouslyAttemptedMission = action.params.backButtonAndroid as missionFromNavigation;
            Analytics.trackEvent("Android User Quit Mission", createAndroidUserQuitMissionPayload(previouslyAttemptedMission.missionId, previouslyAttemptedMission.title, previouslyAttemptedMission.points,));
        }
        this.resetAnalyticsStartTime();
    }

    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Navigation onNavigationStateChange={(previousState, currentState, action) => {this.onNavigationStateChange(previousState, currentState, action)}} />
                </PersistGate>
            </Provider>
        );
    }
}

console.disableYellowBox = true;