import { StyleSheet, Dimensions } from 'react-native';

export const missionDetailStyles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
        justifyContent: 'space-between'
    }
});

const styles = StyleSheet.create({
    missionListSafeArea: {
        flex: 1
    },
    missionList: {
        flex: 1,
        backgroundColor: '#e5e5e5'
    },
    mission: {
        flex: 1,
        backgroundColor: 'white',
        height: 150,
        padding: 10,
        margin: 3,
        borderRadius: 10,
        justifyContent: 'space-around'
    },
    missionDetailsView: { 
        flex: 1
    },
    missionDetailsTopContainer: {
        flex: 1
    },
    missionListItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    missionListItemIconLeft: {
        flex: 0.2,
        flexDirection: 'row',
        padding: 10
    },
    missionListItemIconRight: {
        flex: 0.2,
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 10
    },
    missionListItemTextContainerLeft: {
        flex: 0.8,
        flexDirection: 'column',
        textAlign: 'left'
    },
    missionListItemTextContainerRight: {
        flex: 0.8,
        flexDirection: 'column',
        alignItems: 'flex-end',
        textAlign: 'right'
    },
    textAlignLeft: {
        textAlign: 'left'
    },
    textAlignRight: {
        textAlign: 'right'
    },
    missionListContainer: {
        flex: 1
    },
    missionListTextContainer: {
        flex: 0.8,
        flexDirection: 'column'
    },
    missionListTitle: {
        fontWeight: 'bold',
        fontSize: 20
    },
    missionListText: {
        fontSize: 20
    },
    missionListIconContainer: {
        flex: 0.2
    },
    missionListIcon: {
        width: 75,
        height: 75
    },
    emptyMissionList: {
        flex: 1,
        justifyContent: 'center'
    },
    emptyMissionListText: {
        flex: 0,
        textAlign: 'center',
        fontSize: 22,
    }
});

export const missionCompleteContainerStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    header: {
        flex: 1,
        minHeight: 80
    },
    headerTitle: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30
    },
    headerText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 20
    },
    imageContainer: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        flex: 1,
        resizeMode: 'contain'
    },
    points: {
        flex: 1
    },
    pointsInner: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pointsText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    button: {
        flex: 1,
        padding: 10,
        width: '98%'
    },
    buttonInner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '98%',
        borderColor: '#4ed9ba',
        borderRadius: 30,
        borderWidth: 2,
        backgroundColor: '#fff'
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
});

export const questionStepStyles = StyleSheet.create({
    container: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontWeight: 'bold',
        color: '#fff',
    }
});

export const questionImageStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    image: {
        flex: 1,
        width: 250,
        height: 250,
        resizeMode: 'contain'
    }
});

export const questionDetailStyles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    question: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    }
});

export const optionListStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 4,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export const optionStyles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: 70,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#4d435c',
        borderRadius: 30,
        width: 300,
        height: 50
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 20,
        color: '#fff',
        fontWeight: 'bold'
    },
    correctAnswer: {
        backgroundColor: '#f5af52',
    }
});


export default styles;
