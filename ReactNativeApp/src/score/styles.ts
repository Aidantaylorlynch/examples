import { StyleSheet } from 'react-native';

export const levelBoxStyles = StyleSheet.create({
    container: {
        flex: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFEFE'
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontWeight: 'bold',
        color: '#373333',
        fontSize: 26
    },
    levelText: {
        fontWeight: 'bold',
        color: '#3589EE',
        fontSize: 26
    }
});

export const userDetailStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3f6ed8',
        padding: 25
    },
    nameText: {
        color: 'white',
        fontWeight: 'bold'
    },
    positionText: {
        color: 'white'
    }
});

export const scoreDetailStyles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'space-around',
        backgroundColor: '#3f6ed8',
        padding: 40
    },
    progressChart: {
        height: 200
    },
    scoreTextContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    }   
});

export const scoreTextStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    percentageText: {
        fontSize: 50,
        color: 'white'
    },
    scoreText: {
        color: 'white'
    }
});

export const missionsLeftDetailStyles = StyleSheet.create({

});

const styles = StyleSheet.create({
    score: {
        flex: 1
    },
    scoreDetail: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FFFEFE'
    },
    item: {
        flexDirection: 'column',
        alignItems: 'center'
    },
    itemValue: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#3589EE'
    },
});

export default styles;
