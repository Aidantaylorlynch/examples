import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { levelBoxStyles } from './../styles';

export class LevelBox extends Component {
    render() {
        return (
            <View style={levelBoxStyles.container}>
                <View style={levelBoxStyles.textContainer}>
                    <Text style={levelBoxStyles.titleText}>Level: </Text>
                    <Text style={levelBoxStyles.levelText}>Apprentice</Text>
                </View>
            </View>
        );
    };
};