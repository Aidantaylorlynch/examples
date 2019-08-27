import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ImageBackground,
    Image,
    SafeAreaView,
    ActivityIndicator,
    BackHandler
} from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import styles, { missionDetailStyles, questionStepStyles, questionDetailStyles, questionImageStyles, optionListStyles, optionStyles } from '../styles';
import MissionComplete from './missionComplete';
import Mission, { QuestionOption } from '../models/mission';
import AzureADUSer from '../../auth/models/azureADUser';
import MissionAnswer, { MissionAnswerSelection } from '../models/missionAnswer';
import { ScrollView } from 'react-native-gesture-handler';
import Analytics from 'appcenter-analytics';
import { createTimeToCompleteMissionPayload, calculateTimeOnPage } from './../../../analytics';

interface QuestionStepProps {
    currentQuestion: number;
    totalQuestions: number;
};

interface QuestionDetailProps {
    selectedMission: Mission;
    currentQuestion: number;
};

interface QuestionImageProps {
    selectedMission: Mission;
    currentQuestion: number;
    getQuestionImage: () => any;
};

interface OptionListProps {
    selectedMission: Mission;
    currentQuestion: number;
    highlightCorrect: boolean;
    handleSelection: (option: QuestionOption) => void;
};

interface OptionProps {
    option: QuestionOption;
    highlightCorrect: boolean;
    handleSelection: (option: QuestionOption) => void;
};

interface MissionDetailsProps {
    user: AzureADUSer;
    selectedMission: Mission;
    scoreReceived: number | null;
    navigation: NavigationScreenProp<any, any>;
    completeMission: (userOID: string, missionAnswers: MissionAnswer) => void;
    fetchMission: (missionId: string) => void;
    setScoreReceived: (score: number | null) => void;
    resetSelectedMission: () => void;
}

interface MissionDetailsState {
    currentQuestion: number;
    selections: MissionAnswerSelection[];
    highlightCorrect: boolean;
    analyticsStartTime: Date;
};

const backgroundImage = '../../../assets/mission-details/Rectangle_purple.png';
const workplaceImage = '../../../assets/mission-details/workload-project-management-transparent.png';

export default class MissionDetails extends Component<MissionDetailsProps,MissionDetailsState> {
    constructor(props: MissionDetailsProps) {
        super(props);
        this.state = {
            currentQuestion: 0,
            selections: [],
            highlightCorrect: false,
            analyticsStartTime: new Date()
        };
        this.setModalInvisible = this.setModalInvisible.bind(this);
        this.handleSelection = this.handleSelection.bind(this);
        this.handleHighlightedSelection = this.handleHighlightedSelection.bind(this);
        this.onBackButtonPressAndroid = this.onBackButtonPressAndroid.bind(this);
        this.getQuestionImage = this.getQuestionImage.bind(this);
        BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
    };

    onBackButtonPressAndroid() {
        this.props.navigation.navigate('Mission', { backButtonAndroid: this.props.navigation.getParam('mission') });
        return true;
    };

    componentDidMount() {
        this.setModalInvisible();
        const missionId = this.props.navigation.getParam('mission').missionId;
        this.props.fetchMission(missionId);
    };

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.onBackButtonPressAndroid);
    };

    setModalInvisible() {
        this.props.setScoreReceived(null);
    };

    getQuestionImage() {
        if(!this.props.selectedMission.questions[this.state.currentQuestion].imgUri) {
            return null;
        };
        if(this.props.selectedMission.questions[this.state.currentQuestion].imgUri.length === 0) {
            return null;
        };
        switch(this.props.selectedMission.questions[this.state.currentQuestion].imgUri) {
            case "local:workplace":
                return require(workplaceImage);
            default:
                return ({uri: this.props.selectedMission.questions[this.state.currentQuestion].imgUri});
        };
    };

    handleHighlightedSelection() {
        if(this.state.highlightCorrect){
            if(this.state.currentQuestion < this.props.selectedMission.questions.length - 1){
                this.setState({highlightCorrect: false, currentQuestion: this.state.currentQuestion + 1});
            } else {
                this.completeMission(this.state.selections);
            };
        };
    };

    handleSelection(option: QuestionOption) {
        this.handleHighlightedSelection();
        if(!this.state.highlightCorrect) {
            let selections = [...this.state.selections, {question: this.props.selectedMission.questions[this.state.currentQuestion].text, answer: option.text}];
            this.setState({selections});
            if(option.points) {
                if(this.notLastQuestion()) {
                    this.setState({currentQuestion: this.state.currentQuestion + 1});
                } else {
                    this.completeMission(selections);
                };
            } else {
                this.setState({highlightCorrect: true});
            };
        };
    }

    notLastQuestion() {
        return this.state.currentQuestion < this.props.selectedMission.questions.length - 1;
    };

    completeMission(answers: MissionAnswerSelection[]) {
        const mission = this.props.navigation.getParam('mission');
        this.props.completeMission(
            this.props.user.oid,
            {
                missionId: this.props.navigation.getParam('mission').missionId,
                selections: answers
            }
        );
        const timeOnComponent = calculateTimeOnPage(this.state.analyticsStartTime);
        Analytics.trackEvent("Time To Complete Mission", createTimeToCompleteMissionPayload(mission.missionId, mission.title, mission.points, timeOnComponent));
    };

    render() {
        if(!this.props.selectedMission.questions) {
            return (
                <ActivityIndicator size={"large"}/>
            );
        };
        return (
            <ScrollView contentContainerStyle={missionDetailStyles.scrollView}>
                <TouchableWithoutFeedback style={styles.missionDetailsView}
                    onPress={() => {this.handleHighlightedSelection()}}>
                    <SafeAreaView style={styles.missionDetailsView}>
                        <MissionComplete points={this.props.scoreReceived} resetSelectedMission={this.props.resetSelectedMission} setModalInvisible={this.setModalInvisible} navigation={this.props.navigation} selections={this.state.selections} mission={this.props.selectedMission} />
                        <ImageBackground style={styles.missionDetailsTopContainer} source={require(backgroundImage)}>
                            <QuestionStep currentQuestion={this.state.currentQuestion + 1} totalQuestions={this.props.selectedMission.questions.length} />
                            <QuestionDetail selectedMission={this.props.selectedMission} currentQuestion={this.state.currentQuestion} />
                            <QuestionImage selectedMission={this.props.selectedMission} currentQuestion={this.state.currentQuestion} getQuestionImage={this.getQuestionImage}/>
                        </ImageBackground>
                        <OptionList handleSelection={this.handleSelection} selectedMission={this.props.selectedMission} currentQuestion={this.state.currentQuestion} highlightCorrect={this.state.highlightCorrect}/>
                    </SafeAreaView>
                </TouchableWithoutFeedback>
            </ScrollView>
        );
    }
}

const QuestionStep = (props: QuestionStepProps) => {
    return (
        <View style={questionStepStyles.container}>
            <Text style={questionStepStyles.titleText}>PART {props.currentQuestion} OF {props.totalQuestions}</Text>
        </View>
    );
};

const QuestionImage = (props: QuestionImageProps) => {
    if(!props.selectedMission.questions[props.currentQuestion].imgUri) {
        return null;
    };
    if(props.selectedMission.questions[props.currentQuestion].imgUri.length === 0) {
        return null;
    };
    return (
        <View style={questionImageStyles.container}>
            <Image style={questionImageStyles.image} source={props.getQuestionImage()} />
        </View>
    );
};

const QuestionDetail = (props: QuestionDetailProps) => {
    return (
        <View style={questionDetailStyles.container}>
            <Text style={questionDetailStyles.title}>{props.selectedMission.title}</Text>
            <Text style={questionDetailStyles.question}>{props.selectedMission.questions ? props.selectedMission.questions[props.currentQuestion].text : ''} </Text>
        </View>
    );
};

const OptionList = (props: OptionListProps) => {
    return (
        <View style={optionListStyles.container}>
            {props.selectedMission.questions[props.currentQuestion].options.map((option: QuestionOption, index: number) => {
                return (
                    <Option key={index} option={option} highlightCorrect={props.highlightCorrect} handleSelection={props.handleSelection}/>
                );
            })}
        </View>
    );
};

const Option = (props: OptionProps) => {
    return (
        <View style={optionStyles.container}>
            <TouchableOpacity onPress={() => props.handleSelection(props.option)} style={[optionStyles.buttonContainer, props.highlightCorrect && props.option.points ? optionStyles.correctAnswer : null]}>
                <Text style={optionStyles.buttonText}>{props.option.text}</Text>
            </TouchableOpacity>
        </View>
    );
};
