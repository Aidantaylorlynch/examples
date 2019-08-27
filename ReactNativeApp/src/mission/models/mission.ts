export interface QuestionOption {
    text: string;
    points: number;
}

export interface Question {
    text: string;
    options: QuestionOption[];
    imgUri: string;
}

export default interface Mission {
    missionId: string;
    title: string;
    duration: number;
    localImageAsset: string;
    questions: Question[];
}