import { combineReducers } from "redux"

import { routerReducer, syncHistoryWithStore, routerActions, routerMiddleware } from 'react-router-redux'
import users from "./userReducer"

export default combineReducers(Object.assign({}, {
  routing: routerReducer,
  users,
}))
