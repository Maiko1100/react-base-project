import axios from "axios";
import * as constants from '../constants'
export function login(data) {

    return function (dispatch) {
        dispatch({type: "FETCH_USER", payload: ""})
        axios({
            method: 'post',
            url: 'http://www.loginapi.nl/users/authenticate',
            auth: {
                username: data.username,
                password: data.password
            }
        }).then((response) => {
            dispatch({type: constants.USER_LOGGED_IN, payload: response.data}),
            localStorage.setItem('token', JSON.stringify(response.data.data.token))
        })
            .catch((err) => {
                dispatch({type: "FETCH_USER_REJECTED", payload: err})
            });
    }
}
export function testApi() {

    return function (dispatch) {
        dispatch({type: constants.USER_LOGGING_IN})
        axios({
            method: 'get',
            url: 'http://www.loginapi.nl/albums',
            headers: {'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1c2VybmFtZSIsInN1YiI6IjEiLCJpYXQiOjE0ODQ5NDEwNDEsImV4cCI6MTQ4NTU0NTg0MX0.dYt8ZWuVUhSqGTYNtcIHdWATJvRNOgmWBvLWmNu0yos'}
        }).then((response) => {
            dispatch({type: "FETCH_USER_FULFILLED", payload: response.data})
        })
            .catch((err) => {
                dispatch({type: "FETCH_USER_REJECTED", payload: err})
            });
    }
}
export function logout() {
    console.log("LOGOUT")
    localStorage.removeItem('token')
    localStorage.removeItem('naam')
    return {
        type: constants.USER_LOGGED_OUT
    }
}

export function loadUser() {
    return {
        type: constants.USER_LOAD
    }
}

