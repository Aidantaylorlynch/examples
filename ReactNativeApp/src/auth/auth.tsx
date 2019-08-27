import React from 'react';
import { Component } from 'react';
import { WebView } from 'react-native';
import JWTDecode from 'jwt-decode';
import AADConfig from './models/AADConfig';
import AzureADUser from './models/azureADUser';

interface AuthProps {
    setUser: (user: AzureADUser) => void;
    navigation: {
        navigate: (componentName: string) => void;
    };
}

export default class Auth extends Component<AuthProps> {
    AzureConfig: AADConfig = {
        authorizeEndpoint: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
        clientId: '2f4b19ae-c8b6-465b-be6a-d0a348d42434',
        redirectUri: 'https%3A%2F%2Flogin.microsoftonline.com%2Fcommon%2Foauth2%2Fnativeclient',
        scope: 'openid%20profile%20email'
    };

    authSuccess() {
        this.props.navigation.navigate('SplashScreen');
    }

    authFail() {
        this.props.navigation.navigate('Login');
    }

    handleWebViewNavigationStateChange = (newNavState: any) => {
        const { url } = newNavState;
        if (!url) {
            return;
        };

        if (url.includes('#id_token=')) {
            const idTokenRegexResult = /#id_token\=.+\&/.exec(url);
            if (idTokenRegexResult) {
                const encodedIdToken = idTokenRegexResult[0].slice(10, -1);
                const idToken = JWTDecode(encodedIdToken) as AzureADUser;
                this.props.setUser(idToken);
                this.authSuccess();
            } else {
                this.authFail();
            }
        };
        
        if (url.includes('error_subcode=cancel')) {
            this.authFail();
        };
    };

    render() {
        return (
            <WebView
                onNavigationStateChange={this.handleWebViewNavigationStateChange}
                source={{
                    uri: `${this.AzureConfig.authorizeEndpoint}?client_id=${this.AzureConfig.clientId}&redirect_uri=${
                        this.AzureConfig.redirectUri
                    }&scope=${this.AzureConfig.scope}&response_type=id_token&response_mode=fragment&nonce=678910`
                }}
            />
        );
    }
}
