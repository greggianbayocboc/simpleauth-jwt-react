
import { authHeader, handleResponse } from '@/_helpers';
const config = {
  apiUrl : "http://localhost:8080"
}
export const userService = {
    getAll,
    getMe
};

function getAll() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/users`, requestOptions);
}

function getMe() {
    const requestOptions = { method: 'GET', headers: authHeader() };
    return fetch(`${config.apiUrl}/api/user/me`, requestOptions);
}
