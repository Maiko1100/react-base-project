export default function reducer(state = {
    user: {},
    fetchingUser: false,
    fetchedUser: false,
    error: null,
}, action) {

    switch (action.type) {

        case "FETCH_USER": {
            return {...state, fetchingUser: true}
        }
        case "FETCH_USER_REJECTED": {
            return {...state, fetchingUser: false, error: action.payload}
        }
        case "FETCH_USER_FULFILLED": {
            return {
                ...state,
                fetchingUser: false,
                fetchedUser: true,
                user: action.payload,
            }
        }
        case "SET_USER_NAME": {
            return {
                ...state,
                user: {...state.user, name: action.payload},
            }
        }
    }

    return state
}
