import { combineReducers } from "redux"

import { routerReducer, syncHistoryWithStore, routerActions, routerMiddleware } from 'react-router-redux'

import user from './user'
import books from './book'
import adminNav from './adminNav'

export default combineReducers(Object.assign({}, {
  routing: routerReducer,
    user,
    books,
    adminNav

}))
