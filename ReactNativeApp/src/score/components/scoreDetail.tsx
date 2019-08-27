import React from 'react';
import { Component } from 'react';
import { View, Text } from 'react-native';
import { scoreDetailStyles, scoreTextStyles } from '../styles';
import { ProgressCircle } from 'react-native-svg-charts';

interface ScoreTextProps {
    score: number;
}

interface ScoreDetailProps {
    score: number
}

export default class ScoreDetail extends Component<ScoreDetailProps> {
    render() {
        return (
            <View style={scoreDetailStyles.container}>
                <ProgressCircle style={scoreDetailStyles.progressChart} progress={1} progressColor={'rgb(245, 175, 82)'} />
                <View style={scoreDetailStyles.scoreTextContainer}>
                    <ScoreText score={this.props.score} />
                </View>
            </View>
        );
    }
}

const ScoreText = (props: ScoreTextProps) => {
    return (
        <View style={scoreTextStyles.container}>
            <Text style={scoreTextStyles.percentageText}>{props.score}</Text>
            <Text style={scoreTextStyles.scoreText}>Your Score</Text>
        </View>
    );
};
