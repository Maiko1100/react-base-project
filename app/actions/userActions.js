import axios from "axios";
import * as constants from '../constants'
import * as config from '../config'


export function login(data) {



    return function (dispatch) {
        dispatch({type: "FETCH_USER"})
        axios({
            method: 'post',
            url: config.BASE_URL + '/auth/login',
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

export function logout() {
    localStorage.removeItem('token')
    localStorage.removeItem('naam')
    return {
        type: constants.USER_LOGGED_OUT
    }
}

export function loadUser(token) {

    return function (dispatch ) {
        dispatch({type: constants.USER_LOADING})
        axios({
            method: 'get',
            url: config.BASE_URL + '/auth/user/',
            headers: {'Authorization': 'Bearer ' + token}
        }).then((response) => {
            dispatch({type: constants.USER_LOADED, payload: response.data})
        })
            .catch((err) => {
                dispatch({type: constants.USER_LOADED_FAILED, payload: err})
                localStorage.removeItem('token')
                localStorage.removeItem('naam')
            });
    }
}

