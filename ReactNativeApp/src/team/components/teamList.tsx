import React, { Component } from 'react';
import TeamUser from '../models/teamuser';
import { ScrollView } from 'react-native-gesture-handler';
import { RefreshControl, SafeAreaView } from 'react-native';
import styles from '../styles';
import TeamListItem from './teamListItem';

interface TeamListProps {
    teamUsers: Array<TeamUser>;
    loadingUsers: boolean;
    fetchLeaderboard: () => void;
}

export default class TeamList extends Component<TeamListProps> {
    constructor(props: TeamListProps) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchLeaderboard();
    }

    _onRefresh = () => {
        this.props.fetchLeaderboard();
    }
    

    render() {
        return (
            <SafeAreaView style={styles.teamListSafeArea}>
                <ScrollView style={styles.teamList}
                    refreshControl={
                    <RefreshControl
                        refreshing={this.props.loadingUsers}
                        onRefresh={this._onRefresh}
                    />
                    }>
                    {this.sortByScoreDescending().map(
                        (teamUser: TeamUser, index: number) => {
                            return <TeamListItem key={index} teamUser={teamUser} />;
                        }
                    )}
                </ScrollView>
            </SafeAreaView>
        );
    }

    sortByScoreDescending(): Array<TeamUser> {
        return this.props.teamUsers.sort((a, b) =>
            b.score-a.score
        );
    }
}
