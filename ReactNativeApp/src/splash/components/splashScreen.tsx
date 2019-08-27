import React, { Component } from 'react';
import { Text, ImageBackground, TouchableWithoutFeedback, ActivityIndicator, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import styles from '../styles';
import Quote from '../models/quote';
import AzureADUSer from '../../auth/models/azureADUser';

interface SplashScreenProps {
    navigation: NavigationScreenProp<any, any>;
    quotes: Array<Quote>;
    user: AzureADUSer;
    fetchUserCurrentStatus: (userOID: string) => void;
    loading: boolean;
}

interface SplashScreenState {
    quote: string,
    author: string
}

const backgroundImage = './../../../assets/loginBackground.png';

export default class SplashScreen extends Component<SplashScreenProps, SplashScreenState> {
    constructor(props: SplashScreenProps) {
        super(props);
        this.state = {
            quote: "",
            author: ""
        };
    }

    componentDidMount() {
        this.props.fetchUserCurrentStatus(this.props.user.oid);
        const { quote, author } = this.getRandomQuote();
        this.setState({quote, author});
    };

    handleTouch() {
        if (!this.props.loading) {
            this.props.navigation.navigate('App');
        };
    };

    render() {
        return (
            <TouchableWithoutFeedback
                onPress={() => this.handleTouch()}>
                <View style={styles.splashContainer}>
                    <ImageBackground
                        source={require(backgroundImage)}
                        style={styles.splashScreenBackgroud}>
                        <Text style={styles.splashScreenTitleText}>engageMe</Text>
                        <Text style={styles.splashScreenQuoteText}>{this.state.quote}</Text>
                        <Text style={styles.splashScreenQuoteAuthorText}>
                            - {this.state.author}
                        </Text>
                        <View style={styles.splashLoading}>
                            {this.props.loading ? (
                                <ActivityIndicator style={{flex: 1}} size={'large'} color={'azure'}/>
                            ) : (
                                null
                            )}
                        </View>
                    </ImageBackground>
                </View>
            </TouchableWithoutFeedback>
        );
    }

    getRandomQuote(): Quote {
        return this.props.quotes[
            Math.floor(Math.random() * this.props.quotes.length)
        ];
    }
}
