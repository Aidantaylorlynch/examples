import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    loginBackground: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    keyboardAvoid: {
        flex: 1,
        backgroundColor: 'white',
        height: '80%',
        width: '90%',
        borderRadius: 10,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexGrow: 4,
        padding: 20
    },
    loginHeader: {
        flex: 1,
        color: 'white',
        fontSize: 30,
        padding: 20
    },
    loginLogoContainer: {
        flex: 1
    },
    loginControl: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loginControlTextInput: {
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    loginControlButton: {
        flex: 0.9,
        borderRadius: 30,
        backgroundColor: '#468BF2',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60
    },
    loginControlButtonText: {
        color: 'white',
        fontSize: 18,
        padding: 10
    },
    loginContainer: {
        flex: 1
    },
    loginHeaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;
