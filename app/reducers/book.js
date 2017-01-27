import * as constants from '../constants'

const initialState = {
    books: [],
    isLoading: false,
    bookDeleted: false
}

export default function books(
    state = initialState, {
        type, payload
    })
{

    switch (type) {
        case constants.GET_BOOKS:
            return {...initialState, isLoading: true}

        case constants.GET_BOOKS_SUCCES:
            return {
                ...state,
                books : payload.books,
                isLoading: false
            }

        case constants.GET_BOOKS_FAILED:
            return initialState

        case constants.DELETE_BOOK:
            return {...initialState, isLoading: true}

        case constants.DELETE_BOOK_SUCCES:
            return {
                ...state, bookDeleted:true
            }

        case constants.DELETE_BOOK_FAILED:
            return initialState

    }
    return initialState
}
