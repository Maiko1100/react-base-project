import { applyMiddleware, createStore } from "redux"
import { routerReducer, syncHistoryWithStore, routerActions, routerMiddleware } from 'react-router-redux'
import { browserHistory } from 'react-router'
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers"

const baseHistory = browserHistory
const routingMiddleware = routerMiddleware(baseHistory)
const middleware = applyMiddleware(promise(), thunk, logger(), routingMiddleware)

const store =  createStore(reducer, middleware)
export default store