import * as constants from '../constants'

const initialState = {
    books: [],
    isLoading: false,
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
            console.log('testetse');
            return {
                ...state,
                books : payload.books,
                isLoading: false
            }

        case constants.GET_BOOKS_FAILED:
            return initialState

    }
    return initialState
}
