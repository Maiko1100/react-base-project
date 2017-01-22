import * as constants from '../constants'

const initialState = {
    data: null,
    isLoading: false,
}

export default function userUpdate(state = initialState, {type, payload}) {

    console.log(type)
    switch (type) {

        case constants.USER_LOGGING_IN:
            return {...initialState, isLoading: true}

        case constants.USER_LOGGED_IN:
            return {data: payload, isLoading: false}

        case constants.USER_LOGGED_OUT:
            return initialState

        case constants.USER_LOAD:
            if (localStorage.getItem('token')) {
                return {data:{token: localStorage.getItem('token')}, isLoading: false};
            }

            return {...initialState, isLoading: false}
        default:
            return state
    }
}
