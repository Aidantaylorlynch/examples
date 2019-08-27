import React from 'react';
import { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './../styles';

export default class KnowledgeContainer extends Component {
    render() {
        return (
            <View style={styles.knowledgeContainer}>
                <Text style={styles.knowledgeText}>Lessons coming soon!</Text>
            </View>
        );
    }
}
