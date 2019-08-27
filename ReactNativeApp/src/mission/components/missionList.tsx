import React, { Component } from 'react';
import { ScrollView, SafeAreaView, View, Text, ActivityIndicator } from 'react-native';
import MissionListItem from './missionListItem';
import styles from '../styles';
import { NavigationScreenProp } from 'react-navigation';
import MissionListItemDetail from '../models/missionListItemDetail';

interface MissionListProps {
    missions: Array<MissionListItemDetail>;
    navigation: NavigationScreenProp<any, any>;
    fetchingMissions: boolean;
}

export default class MissionList extends Component<MissionListProps> {
    render() {
        if (this.props.fetchingMissions) {
            return (
                <ActivityIndicator size="large" />
            );
        } else {
            if (this.props.missions.length > 0) {
                return (
                    <SafeAreaView style={styles.missionListSafeArea}>
                        <ScrollView style={styles.missionList}>
                            {this.props.missions.map((mission: MissionListItemDetail, index: number) => {
                                return (
                                    <MissionListItem
                                        key={index}
                                        listItemIndex={index}
                                        mission={mission}
                                        navigation={this.props.navigation}
                                    />
                                );
                            })}
                        </ScrollView>
                    </SafeAreaView>
                );
            } else {
                return ( 
                    <View style={styles.emptyMissionList}>
                        <Text style={styles.emptyMissionListText}>Check back later for more missions!</Text>
                    </View>
                );    
            }
        }
    }
}
