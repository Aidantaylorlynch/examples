import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    teamListSafeArea: {
        flex: 1
    },
    teamList: {
        flex: 1,
        backgroundColor: '#e5e5e5'
    },
    team: {
        backgroundColor: 'white',
        flexDirection: 'row',
        height: 100,
        padding: 10,
        margin: 3,
        borderRadius: 10,
        alignItems: 'center'
    },
    scoreTextContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    scoreText: {
        paddingBottom: 5
    },
    teamUserName: {
        paddingLeft: 10
    }
});

export default styles;
