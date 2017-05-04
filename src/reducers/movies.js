import { MovieActions } from '../actions';

const initialState = {
    page: 0,
    isLoading: false, 
    results: [],
};

export default function(state = initialState, action) {
    switch(action.type) {
        case MovieActions.FETCH_MOVIES:
            return Object.assign({}, state, { isLoading: true });
        case MovieActions.RECEIVE_MOVIES:
            // easy way to shortcut results for pages we already have loaded
            if(action.data.page <= state.page) {
                return Object.assign({}, state, { isLoading: false }); 
            }

            return Object.assign({}, state, { 
                isLoading: false, 
                results: state.results.concat(action.data.results), 
                page: action.data.page 
            });
        default: 
            return state;
    }
}