import React from 'react';
import { Component } from 'react';
import { View, Text } from 'react-native';
import styles from '../styles';

interface MissionsLeftDetailProps {
    missions: number;
}

export default class MissionsLeftDetail extends Component<MissionsLeftDetailProps> {
    render() {
        return (
            <View style={styles.scoreDetail}>
                <View style={styles.item}>
                    <Text style={styles.itemValue}>{this.props.missions}</Text>
                    <Text>Missions Left</Text>
                </View>
            </View>
        );
    }
}
