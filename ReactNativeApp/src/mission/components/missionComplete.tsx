import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { missionCompleteContainerStyles } from '../styles';
import Mission from '../models/mission';
import { MissionAnswerSelection } from '../models/missionAnswer';

interface MissionCompleteProps {
    points: number | null;
    setModalInvisible: () => void;
    navigation: NavigationScreenProp<any, any>;
    mission: Mission;
    selections: MissionAnswerSelection[];
    resetSelectedMission: () => void;
};

interface MissionCompleteFailHeaderProps {
    correctAnswers: number | null;
    totalQuestions: number | null;
};

interface MissionCompletePointsProps {
    points: number | null;
};

interface MissionCompleteButtonProps {
    setModalInvisible: () => void;
    resetSelectedMission: () => void;
    navigation: NavigationScreenProp<any, any>;
};

const pointsImage = '../../../assets/mission-details/points.png';
const backgroundImage = '../../../assets/mission-complete/partyhat.png';

export default class MissionComplete extends Component<MissionCompleteProps> {
    
    calculateMissionResults() {
        let missionResult = {
            correctAnswers: 0,
            totalQuestions: this.props.mission.questions.length
        } as MissionCompleteFailHeaderProps;


        this.props.mission.questions.forEach((question, index) => {
            const correctOptions = question.options.filter((option) => {
                return option.points > 0;
            });
            const selectedAnswer = this.props.selections[index].answer;
            correctOptions.forEach((option) => {
                if (selectedAnswer === option.text) {
                    missionResult.correctAnswers !== null ? missionResult.correctAnswers += 1 : missionResult.correctAnswers = 1;
                };
            });
        });
        return missionResult;
    };

    render() {
        if (this.props.points !== null) {
            const missionResult = this.calculateMissionResults();
            return (
                <Modal animationType='slide'>
                    <View style={missionCompleteContainerStyles.container}>
                        {missionResult.totalQuestions === missionResult.correctAnswers ? (
                            <MissionCompleteSuccessHeader />
                        ):(
                            <MissionCompleteFailHeader totalQuestions={missionResult.totalQuestions} correctAnswers={missionResult.correctAnswers}/>
                        )}
                        <MissionCompleteImage />
                        <MissionCompletePoints points={this.props.points} />
                        <MissionCompleteButton resetSelectedMission={this.props.resetSelectedMission} navigation={this.props.navigation} setModalInvisible={this.props.setModalInvisible}/>
                    </View>
                </Modal>
            );
        };
        return null;
    };
};

const MissionCompleteSuccessHeader = () => {
    return (
        <View style={missionCompleteContainerStyles.header}>
            <Text style={missionCompleteContainerStyles.headerTitle}>Congratulations!</Text>
            <Text style={missionCompleteContainerStyles.headerText}>You have completed the mission.</Text>
        </View>
    );
};

const MissionCompleteFailHeader = (props: MissionCompleteFailHeaderProps) => {
    return (
        <View style={missionCompleteContainerStyles.header}>
            <Text style={missionCompleteContainerStyles.headerTitle}>Better luck next time!</Text>
            <Text style={missionCompleteContainerStyles.headerText}>You got {props.correctAnswers} out of {props.totalQuestions} questions right.</Text>
        </View>
    );
};

const MissionCompleteImage = () => {
    return (
        <View style={missionCompleteContainerStyles.imageContainer}>
            <Image style={missionCompleteContainerStyles.image} source={require(backgroundImage)} />
        </View>
    );
};

const MissionCompletePoints = (props: MissionCompletePointsProps) => {
    return (
        <View style={missionCompleteContainerStyles.points}>
            <View style={missionCompleteContainerStyles.pointsInner}>
                <Text style={missionCompleteContainerStyles.pointsText}>YOU HAVE GOT +{props.points}</Text>
                <Image source={require(pointsImage)} />
            </View>
        </View>
    );
};

const MissionCompleteButton = (props: MissionCompleteButtonProps) => {
    return (
        <View style={missionCompleteContainerStyles.button}> 
            <TouchableOpacity style={missionCompleteContainerStyles.buttonInner} 
                onPress={() => {
                    props.setModalInvisible()
                    props.navigation.navigate('Mission');
                    props.resetSelectedMission();
                }}>
                <Text style={missionCompleteContainerStyles.buttonText}>OK</Text>
            </TouchableOpacity>
        </View>
    );
};
