import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import movies from './movies';

const rootReducer = combineReducers({
	routing: routerReducer,
    movies
});

export default rootReducer;