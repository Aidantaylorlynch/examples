import React, { Component } from 'react';
import TeamUser from '../models/teamuser';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import { Avatar } from 'react-native-elements';
import styles from '../styles';

interface TeamListItemProps {
    teamUser: TeamUser;
}

const pointsImage = '../../../assets/mission-details/points.png';

export default class TeamListItem extends Component<TeamListItemProps> {
    constructor(props: TeamListItemProps) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity style={styles.team}>
                <Avatar rounded title={this.getAvatarInitials()} />
                <Text style={styles.teamUserName}>
                    {this.props.teamUser.displayName}
                </Text>
                <View style={styles.scoreTextContainer}>
                    <Text style={styles.scoreText}>
                        {this.props.teamUser.score}
                    </Text>
                </View>
                <Image source={require(pointsImage)} />
            </TouchableOpacity>
        );
    }

    getAvatarInitials(): string {
        const nameSplit = this.props.teamUser.displayName.split(' ', 2);
        return nameSplit[0][0] + (nameSplit.length > 1 ? nameSplit[1][0] : '');
    }
}
