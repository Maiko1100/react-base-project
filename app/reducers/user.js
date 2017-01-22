/**
 * Created by Maiko on 22-1-2017.
 */
import * as constants from '../constants'

export default function userUpdate(state = {
    name: JSON.parse(localStorage.getItem('naam'))
}, { type, payload }) {
    if(type === constants.USER_LOGGED_IN) {
        return payload
    }
    else if(type === constants.USER_LOGGED_OUT) {
        return {}
    }
    return state
}
