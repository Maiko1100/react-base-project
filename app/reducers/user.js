import * as constants from '../constants'

const initialState = {
    user:null,
    isLoading: false,
    token: null
}

export default function userUpdate(state = initialState, {type, payload}) {

    switch (type) {

        case constants.USER_LOGGING_IN:
            return {...initialState, isLoading: true}

        case constants.USER_LOGGED_IN:
            console.log(payload)
            return {...initialState,token: payload.data.token, isLoading: false}

        case constants.USER_LOGGED_OUT:
            return initialState

        case constants.USER_LOADED:

            if (localStorage.getItem('token')) {
                return {
                    ...initialState,
                    user:payload.data,
                    token:localStorage.getItem('token')
                };

            }

            return {...initialState, isLoading: false}
        case constants.USER_LOADED_FAILED:

            return {...initialState, isLoading: false}

        default:
            return state
    }
}
