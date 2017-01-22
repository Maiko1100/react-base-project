import axios from "axios";
import * as constants from '../constants'
export function fetchUser(username, password) {

    return function (dispatch) {
        dispatch({type: "FETCH_USER", payload: ""})
        axios({
            method: 'post',
            url: 'http://www.loginapi.nl/users/authenticate',
            auth: {
                username: username,
                password: password
            }
        }).then((response) => {
            dispatch({type: constants.USER_LOGGED_IN, payload: response.data}),
            localStorage.setItem('token', JSON.stringify(response.data.data.token)),
                localStorage.setItem('naam', JSON.stringify(response.data.data.user.firstName))


        })
            .catch((err) => {
                dispatch({type: "FETCH_USER_REJECTED", payload: err})
            });
    }
}
export function testApi() {

    return function (dispatch) {
        dispatch({type: "FETCH_USER", payload: ""})
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
    localStorage.removeItem('token')
    localStorage.removeItem('naam')
    return {
        type: constants.USER_LOGGED_OUT
    }
}

