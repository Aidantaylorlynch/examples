import React from 'react';
import { Component } from 'react';
import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';
import { userDetailStyles } from './../styles';

interface UserDetailProps {
    userName: string;
    jobTitle: string;
    userPhoto: string;
}

export default class UserDetail extends Component<UserDetailProps> {
    render() {
        return (
            <View style={userDetailStyles.container}>
                <Avatar
                    rounded
                    title={this.getAvatarInitials()}
                    size={'large'}
                    source={this.getAvatarImage()}
                />
                <Text style={userDetailStyles.nameText}>{this.props.userName}</Text>
                <Text style={userDetailStyles.positionText}>{this.props.jobTitle}</Text>
            </View>
        );
    }

    getAvatarInitials(): string {
        const nameSplit = this.props.userName.split(' ', 2);
        return nameSplit[0][0] + (nameSplit.length > 1 ? nameSplit[1][0] : '');
    }

    getAvatarImage() {
        if(this.props.userPhoto) {
            return {
                uri:this.props.userPhoto
            }
        } else {
            return undefined;
        }
    }
}
