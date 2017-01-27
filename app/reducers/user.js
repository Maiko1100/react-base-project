import * as constants from '../constants'

const initialState = {
    data: null,
    isLoading: false,
}

export default function userUpdate(state = initialState, {type, payload}) {

    switch (type) {

        case constants.USER_LOGGING_IN:
            return {...initialState, isLoading: true}

        case constants.USER_LOGGED_IN:
            return {data: payload, isLoading: false}

        case constants.USER_LOGGED_OUT:
            return initialState

        case constants.USER_LOADED:
            if (localStorage.getItem('token')) {
                return {
                     data:
                        {
                            token: localStorage.getItem('token'),
                            name: payload.data.name
                        },
                    isLoading: false
                };

            }

            return {...initialState, isLoading: false}
        case constants.USER_LOADED_FAILED:

            return {...initialState, isLoading: false}

        default:
            return state
    }
}
