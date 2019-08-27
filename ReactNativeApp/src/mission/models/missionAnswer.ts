export interface MissionAnswerSelection {
    question: string;
    answer: string;
}

export default interface MissionAnswer {
    missionId: string;
    selections: MissionAnswerSelection[];
}