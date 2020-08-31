import axios from 'axios';
import types from './types';

export function loginUser(dataTosubmit) {
    const request = axios.post('/api/auth/login', dataTosubmit)
        // const request = axios.post('http://localhost:4000/api/login', dataTosubmit)
        .then(response => {
            return {
                status: response.status,
                data: response.data,
                headers: response.headers,
                username: response.username
            }
        })
        .catch(err => console.log(err));
    return {
        type: types.LOGIN_USER,
        payload: request
    }
}

export function logoutUser() {
    const request = axios.post('/api/logout')
        .then(response => {
            return {
                status: response.status,
                data: response.data
            }
        }).catch(err => console.log("ERR", err));
    
    return {
        type: types.LOGOUT_USER,
        payload: request
    }
}

export function tokenUser() {
    let username;
    try {
        username = localStorage.getItem('username');
    } catch (error) {
        console.log(error);
        return;
    }
    const request = axios.post('/api/auth/userExist', {username})
        .then(response => {
            return {
                status: response.status,
                data: response.data
            }
        }).catch(err => console.log("ERROR", err));
    
    return {
        type: types.TOKEN_USER,
        payload: request
    };
}