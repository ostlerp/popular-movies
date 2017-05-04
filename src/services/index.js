export let MovieService = require('./MovieService');

export let HandleResponse = function (response, resolve, reject) {
    response.text().then((json) => {
        try {
            if (response.ok) {
                if (json) {
                    let r = JSON.parse(json);
                    resolve(r);
                }
                else { resolve() };
            } else {
                reject({ _error: json || `Failed with status code ${response.status}` });
            }
        } catch (err) {
            reject({ _error: `Failed with status code ${response.status}` })
        }
    });
}