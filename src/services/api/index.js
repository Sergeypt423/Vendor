/* global fetch */

import fetchival from 'fetchival';

import apiConfig from './config';

export const exceptionExtractError = (exception) => {
	if (!exception.Errors) return false;
	let error = false;
	const errorKeys = Object.keys(exception.Errors);
	if (errorKeys.length > 0) {
		error = exception.Errors[errorKeys[0]][0].message;
	}
	return error;
};

// export const check = token => fetchApi(`${endPoints.check}?token=${token}`);

export const fetchApi = (endPoint, payload = {}, method = 'get', headers = {}) =>
fetchival(`${apiConfig.url}${endPoint}`, {
	headers,
})[method.toLowerCase()](payload);
	// .catch((e) => {
	// 	if (e.response) {
	// 		e.response.json().then((json) => {
	// 			if (json) throw json;
	// 			throw e;
	// 		});
	// 	} else {
	// 		throw e;
	// 	}
	// });
