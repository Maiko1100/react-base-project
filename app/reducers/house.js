import * as constants from '../constants'

const initialState = {
    house: {
        name:null,
        year:null,
        price:null,
        pictures:[]
    },
    message:null,
    succes:null
}

export default function house(
    state = initialState, {
        type, payload
    })
{

    switch (type) {

        case constants.ADD_HOUSE:
            return {...initialState}

        case constants.ADD_HOUSE_SUCCES:
            return {
                ...state,
                succes : true,
                message : payload.message,
            }

        case constants.ADD_HOUSE_FAILED:
            return {
                ...initialState,
                succes:false
            }

    }
    return initialState
}
