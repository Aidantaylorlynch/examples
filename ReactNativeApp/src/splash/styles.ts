import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    splashScreen: {
        flex: 1,
        justifyContent: 'space-between',
        backgroundColor: '#366ad4'
    },
    splashScreenTitleText: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        paddingTop: 100,
        color: '#fff',
        fontSize: 30
    },
    splashScreenQuoteText: {
        flex: 1,
        textAlign: 'justify',
        justifyContent: 'center',
        paddingTop: 100,
        alignItems: 'center',
        color: '#fff',
        fontSize: 20,
        paddingLeft: 40,
        paddingRight: 40
    },
    splashScreenQuoteAuthorText: {
        flex: 1,
        textAlign: 'right',
        justifyContent: 'flex-end',
        paddingTop: 20,
        paddingRight: 20,
        color: '#fff',
        fontSize: 20
    },
    splashScreenBackgroud: {
        height,
        width,
        flex: 1
    },
    splashContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    splashLoading: {
        flex: 1
    },
    loadingComplete: {
        color: 'white',
        flex: 1,
        textAlign: 'center'
    }
});

export default styles;
