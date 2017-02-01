import axios from "axios";
import * as constants from '../constants'
import * as config from '../config'

export function getBooks(data) {

    return function (dispatch) {
        dispatch({type: constants.GET_BOOKS})
        axios({
            method: 'get',
            url: config.BASE_URL +'/books',
            headers: {
                'Authorization': 'Bearer ' + data.token
            }
        }).then((response) => {
            dispatch({type: constants.GET_BOOKS_SUCCES, payload: response.data})
        })
            .catch((err) => {
                dispatch({type: constants.GET_BOOKS_FAILED, payload: err})
            });
    }
}

export function addBook(data) {

    return function (dispatch) {
        dispatch({type: constants.ADD_BOOK})
        axios({
            method: 'post',
            url: config.BASE_URL +'/books/add',
            headers: {
                'Authorization': 'Bearer ' + data.token
            },
            data: {
                name: data.name,
                author: data.author,
                year: data.year
            }
        }).then((response) => {
            dispatch({type: constants.ADD_BOOK_SUCCES, payload: response.data})
        })
            .catch((err) => {
                dispatch({type: constants.ADD_BOOK_FAILED, payload: err})
            });
    }
}
export function deleteBook(data) {

    return function (dispatch) {
        dispatch({type: constants.DELETE_BOOK})
        axios({
            method: 'post',
            url: config.BASE_URL +'/book/delete',
            headers: {
                'Authorization': 'Bearer ' + data.token
            },
            data: {
                id: data.id,
            }
        }).then((response) => {
            dispatch({type: constants.DELETE_BOOK_SUCCES, payload: response.data})
        })
            .catch((err) => {
                dispatch({type: constants.DELETE_BOOK_FAILED, payload: err})
            });
    }
}