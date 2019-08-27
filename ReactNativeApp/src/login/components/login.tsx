import React from 'react';
import { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    Image,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native';
import styles from './../styles';
import AzureADUSer from '../../auth/models/azureADUser';
import Analytics from 'appcenter-analytics';

interface LoginControlProps {
    login: () => void;
}

interface LoginProps {
    navigation: any;
    user: AzureADUSer;
}

export default class Login extends Component<LoginProps> {
    constructor(props: any) {
        super(props);
        this.login = this.login.bind(this);
        this.singleSignOn();
    }

    singleSignOn() {
        if (this.props.user !== null && this.props.user.oid !== undefined) {
            this.props.navigation.navigate('SplashScreen');
        };
    }

    login() {
        this.props.navigation.navigate('Auth');
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground source={require('./../../../assets/loginBackground.png')} style={styles.loginBackground}>
                    <View style={styles.loginContainer}>
                        <View style={styles.loginHeaderContainer}>
                            <Text style={styles.loginHeader}>engageMe</Text>
                        </View>
                        <KeyboardAvoidingView behavior={'padding'} style={styles.keyboardAvoid}>
                            <Image source={require('./../../../assets/oceanLogo.png')}style={styles.loginLogoContainer} resizeMode={'contain'} />
                            <LoginControl login={this.login} />
                        </KeyboardAvoidingView>
                    </View>
                </ImageBackground>
            </TouchableWithoutFeedback>
        );
    }
}

const LoginControl = (props: LoginControlProps) => {
    return (
        <View style={styles.loginControl}>
            <TouchableOpacity onPress={props.login} style={styles.loginControlButton}>
                <Text style={styles.loginControlButtonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
};
