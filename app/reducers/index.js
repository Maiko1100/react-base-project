import { combineReducers } from "redux"

import { routerReducer, syncHistoryWithStore, routerActions, routerMiddleware } from 'react-router-redux'

import user from './user'

export default combineReducers(Object.assign({}, {
  routing: routerReducer,
    user

}))
