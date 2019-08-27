import { connect } from 'react-redux';
import { AppState } from '../../rootReducer';
import MissionList from './missionList';

const mapStateToProps = (state: AppState) => {
    return {
        user: state.persistedReducer.user,
        missions: state.missionReducer.missions,
        fetchingMissions: state.commonReducer.fetchingMissions
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
    };
};

const MissionContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MissionList);

export default MissionContainer;
