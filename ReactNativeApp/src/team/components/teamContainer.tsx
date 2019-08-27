import TeamList from './teamList';
import { connect } from 'react-redux';
import { AppState } from './../../rootReducer';
import { FETCH_LEADERBOARD_ACTION_CREATOR } from '../../team/store/teamActions';

const mapStateToProps = (state: AppState) => {
    return {
        teamUsers: state.teamReducer.teamUsers,
        loadingUsers: state.teamReducer.loadingUsers
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchLeaderboard: () => dispatch(FETCH_LEADERBOARD_ACTION_CREATOR())
    };
};

const TeamContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TeamList);

export default TeamContainer;
