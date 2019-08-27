import React, { Component } from 'react';
import { Text, TouchableOpacity, Image, View } from 'react-native';
import styles from '../styles';
import { NavigationScreenProp } from 'react-navigation';
import MissionListItemDetail from '../models/missionListItemDetail';

interface MissionListItemProps {
    mission: MissionListItemDetail;
    navigation: NavigationScreenProp<any, any>;
    listItemIndex: number;
};

interface MissionTitlePointsDurationProps {
    title: string;
    points: number;
    duration: number;
    styles: any;
    textAlign: any;
};

interface MissionIconProps {
    styles: any;
    imgAsset: string;
};

const assets = '../../../assets';

export default class MissionListItem extends Component<MissionListItemProps> {
    render() {
        return (
            <TouchableOpacity
                style={styles.mission}
                onPress={() =>
                    this.props.navigation.navigate('MissionDetails', {
                        mission: this.props.mission
                    })
                }>
                <View style={styles.missionListContainer}>
                    {this.props.listItemIndex % 2 === 0 ? (
                        <View style={styles.missionListItem}>
                            <MissionIcon imgAsset={this.props.mission.localImageAsset} styles={styles.missionListItemIconLeft} />
                            <MissionTitlePointsDuration textAlign={styles.textAlignRight} styles={styles.missionListItemTextContainerRight} title={this.props.mission.title} duration={this.props.mission.duration} points={this.props.mission.points}/>
                        </View>
                    ) : (
                        <View style={styles.missionListItem}>
                            <MissionTitlePointsDuration textAlign={styles.textAlignLeft} styles={styles.missionListItemTextContainerLeft} title={this.props.mission.title} duration={this.props.mission.duration} points={this.props.mission.points}/>
                            <MissionIcon imgAsset={this.props.mission.localImageAsset} styles={styles.missionListItemIconRight} />
                        </View>
                    )}
                </View>
            </TouchableOpacity>
        );
    }
}

const MissionTitlePointsDuration = (props: MissionTitlePointsDurationProps) => {
    return (
        <View style={props.styles}>
            <Text style={[styles.missionListTitle, props.textAlign]}>
                {props.title}
            </Text>
            <Text style={[styles.missionListText, props.textAlign]}>
                +{props.points} Points
            </Text>
            <Text style={[styles.missionListText, props.textAlign]}>
                {props.duration} Min
            </Text>
        </View>
    );                     
};

const getMissionIcon = (imgAsset: string) => {
    switch(imgAsset) {
        case "make-avatar":
            return require(assets + '/mission-details/make-avatar.png');
        case "profile":
            return require(assets + '/mission-details/profile.png');
        case "pick-your-side":
            return require(assets + '/mission-details/Pick-your-side.png');
        default:
            return require(assets + '/mission-details/quiz.png');
    };
};

const MissionIcon = (props: MissionIconProps) => {
    return (
        <View style={props.styles}>
            <Image source={getMissionIcon(props.imgAsset)} style={styles.missionListIcon} />
        </View>
    );
};
