import MissionDetails from './missionDetails';
import { connect } from 'react-redux';
import { COMPLETE_MISSION_ACTION_CREATOR, FETCH_MISSION_ACTION_CREATOR, SET_SCORE_RECEIVED_ACTION_CREATOR, SET_SELECTED_MISSION_ACTION_CREATOR } from '../store/missionActions';
import { AppState } from '../../rootReducer';
import MissionAnswer from '../models/missionAnswer';
import Mission from '../models/mission';

const mapStateToProps = (state: AppState) => {
    return {
        user: state.persistedReducer.user,
        selectedMission: state.missionReducer.selectedMission,
        scoreReceived: state.missionReducer.scoreReceived
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchMission: (missionId: string) => dispatch(FETCH_MISSION_ACTION_CREATOR(missionId)),
        completeMission: (userOID: string, missionAnswers: MissionAnswer) => dispatch(COMPLETE_MISSION_ACTION_CREATOR(userOID, missionAnswers)),
        setScoreReceived: (score: number | null) => dispatch(SET_SCORE_RECEIVED_ACTION_CREATOR(score)),
        resetSelectedMission: () => dispatch(SET_SELECTED_MISSION_ACTION_CREATOR({} as Mission))
    };
};

const MissionDetailsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MissionDetails);

export default MissionDetailsContainer;
