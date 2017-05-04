'use strict';
import { MovieService } from '../services';

const namespace = 'movie/';

export const FETCH_MOVIES = `${namespace}FETCH_MOVIES`;
export const RECEIVE_MOVIES = `${namespace}RECEIVE_MOVIES`;

let fetchingMovies = () => {
    return {
        type: FETCH_MOVIES
    };
};

let receiveMovies = (data) => {
    return {
        type: RECEIVE_MOVIES,
        data
    };
};

export let fetchMovies = (page) => {
    return dispatch => {
        dispatch(fetchingMovies());
        MovieService.getPopularMoviesByPage(page).then(response => {
            dispatch(receiveMovies(response));
        });
    };
};