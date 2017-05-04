import { MovieActions } from '../actions';

const initialState = {
    page: 1,
    isLoading: false, 
    results: []
};

export default function(state = initialState, action) {
    switch(action.type) {
        case MovieActions.FETCH_MOVIES:
            return Object.assign({}, state, { isLoading: true });
        case MovieActions.RECEIVE_MOVIES:
            return Object.assign({}, state, { 
                isLoading: false, 
                results: state.results.concat(action.data.results), 
                page: action.data.page 
            });
        default: 
            return state;
    }
}