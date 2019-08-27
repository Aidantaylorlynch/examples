import Quote from '../models/quote';
import { SET_SPLASH_SCREEN_LOADING_STATE } from './splashActionTypes';

const mockQuotes: Array<Quote> = [
    {
        author: 'Walt Disney',
        quote:
            'All our dreams can come true if we have the courage to pursue them.'
    },
    {
        author: 'Henry Ford',
        quote: `Whether you think you can or you think you can't, you're right.`
    },
    {
        author: 'Albert Einstein',
        quote: 'Creativity is intelligence having fun.'
    }
];

const initialState = {
    quotes: mockQuotes,
    loading: false
};

const splashReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_SPLASH_SCREEN_LOADING_STATE:
            return {
                ...state,
                loading: action.payload.loading
            };
    }
    return state;
};

export default splashReducer;
