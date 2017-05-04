import constants from '../constants';
import { HandleResponse } from '../services';

export function getPopularMoviesByPage(page) {
    page = page || 1;

    return new Promise(
        (resolve, reject) => {
            var url = `${constants.api.BASE_URL}movie/popular`;
            url += `?api_key=${constants.api.KEY}`;
            url += `&page=${page}`;

            fetch(url, { method: 'GET'})
                .then(response => {
                    HandleResponse(response, resolve, reject);
                })
                .catch(reject);
        }
    );
}