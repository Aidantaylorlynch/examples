import React from 'react';
import { Component } from 'react';
import { View } from 'react-native';
import ScoreDetail from './scoreDetail';
import MissionsLeftDetail from './missionsLeftDetail';
import UserDetail from './userDetail';
import styles from './../styles';
import AzureADUser from './../../auth/models/azureADUser';
import UserCurrentStatus from '../../common/models/userCurrentStatus';
import { LevelBox } from './levelBox';

interface ScoreProps {
    appIsInitialised: boolean;
    user: AzureADUser;
    userCurrentStatus: UserCurrentStatus;
    jobTitle: string;
    userPhoto: string;
    fetchUserCurrentStatus: (userOID: string) => void;
    setAppIsInitialised: (appIsInitialised: boolean) => void;
    fetchUserIncompleteMissions: (userOID: string) => void;
    fetchPersonDetail: (personId: string) => void;
}

interface ScoreState {
    intervalTimer: number;
}

export default class Score extends Component<ScoreProps, ScoreState> {
    constructor(props: ScoreProps) {
        super(props);
        this.state = {
            intervalTimer: setInterval(this.getUserStatus, 5000)
        };
    }

    getUserStatus = () => {
        this.props.fetchUserCurrentStatus(this.props.user.oid);
    }

    componentDidMount() {
        if (this.props.user && !this.props.appIsInitialised) {
            this.props.fetchPersonDetail(this.props.user.oid);
            this.getUserStatus();
            this.props.fetchUserIncompleteMissions(this.props.user.oid);
            this.props.setAppIsInitialised(true);
        }
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalTimer);
    }

    render() {
        return (
            <View style={styles.score}>
                <UserDetail userName={this.props.user.name} jobTitle={this.props.jobTitle} userPhoto={this.props.userPhoto} />
                <ScoreDetail score={this.props.userCurrentStatus.score} />
                <LevelBox />
                <MissionsLeftDetail missions={this.props.userCurrentStatus.missionsLeft} />
            </View>
        );
    }
}