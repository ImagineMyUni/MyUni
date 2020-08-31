import axios from 'axios';
import types from './types';

export function loadData(dataToSubmit) {
    const request =
        axios.get(`/api/data/review?startNumber=${dataToSubmit.StartNumber}&endNumber=${dataToSubmit.EndNumber}`,
            {
                headers: {
                    token: localStorage.getItem('x_auth_token'),
                    username: localStorage.getItem('username')
                }
            })
            .then(response => {
                const data = {
                    data : response.data,
                    status: response.status,
                    accumulated: response.accumulated
                }
                return data
            })
            .catch(err => console.log(err));
    console.log(request);
    return {
        type: types.LOAD_DATA,
        payload: request
    }
}

export function validData(dataToSubmit) {
    const request = axios.post('/api/data/validate', dataToSubmit, {
        headers: {
            token: localStorage.getItem('x_auth_token'),
            username:localStorage.getItem('username')
        }
    })
        .then(response => {
            return {
                data: response.data,
                status: response.status,
            }
        })
        .catch(err => console.log(err))
    return {
        type: types.VALID_DATA,
        payload: request
    }
}

export function finishData() {
    const request = axios.get('/api/data/finishData', {
        headers: { token: localStorage.getItem('x_auth_token') }})
        .then(response => {
            return {
                data: response.data,
                status: response.status
            }
        })
        .catch(error => console.log("validData", error));
    return {
        type: types.FINISH_DATA,
        payload: request
    }
}

export function searchTitleData(dataToSubmit) {
    const { SearchTitle, EndNumber } = dataToSubmit;
    const request = axios.get(`/api/data/searchTitle?title=${SearchTitle}&EndNumber=${EndNumber}`, {
        headers: {
            token: localStorage.getItem('x_auth_token'),
        username:localStorage.getItem('username')}
    })
        .then(response => {
            console.log(response);
            return {
                data : response.data
            }
        })
        .catch(error => console.log("searchTitleData", error));
    return {
        type: types.SEARCH_DATA,
        payload: request
    }
}

export function searchResultData() {
    const request = axios.get('/api/data/searchResult', {
        headers: { token: localStorage.getItem('x_auth_token') }
    })
        .then(response => {
            return {
                data: response.data
            }
        }).catch(error => console.log("searchResultData", error));
    return {
        type: types.RESULT_DATA,
        payload :request
    }
}

export function summarizeData(dataToSubmit) {
    const request = axios.post(`/api/data/summarizeData`, dataToSubmit, {
        headers: {token: localStorage.getItem('x_auth_token')}})
        .then(response => {
            return {
                data: response.data
            }
        })
        .catch(error => console.log("summarizeResult", error));
    return {
        type: types.SUMMARIZE_DATA,
        payload: request
    }
}

export function ReverseData(dataToSubmit) {
    const request = axios.post('/api/data/reverseData', dataToSubmit, {
        headers: { token: localStorage.getItem('x_auth_token') }
    }).then(response => {
        return {
            message: response.data
        }
    }).catch(error => console.log("ReverseData", error));
    return {
        type: types.REVERSE_DATA,
        payload: request
    }
}

export function searchCustomizedData() {
    const username = localStorage.getItem('username')
    const request = axios.get(`/api/data/searchCustomizedData?username=${username}`, {
        headers: { token: localStorage.getItem('x_auth_token') }
    }).then(response => {
        return {
            data: response.data,
            status : response.status
        }
    })

    return {
        type: types.CUSTOMIZED_DATA,
        payload: request
    }
}