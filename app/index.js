import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import Login from "./components/Login"
import store from "./store"
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import App from './components/App'
import Home from './components/Home'
import Admin from './components/Admin'
import Houses from './components/Houses'
import { UserIsAuthenticated, UserIsNotAuthenticated } from './utils/authWrappers.js'

const baseHistory = hashHistory
const history = syncHistoryWithStore(baseHistory, store)

ReactDOM.render(
    <Provider store={store}>
        {/* hashHistory ---> browserHistory when the site is on a server for clean urls*/}
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="Login" component={UserIsNotAuthenticated(Login)} />
                <Route path="Admin" component={UserIsAuthenticated(Admin)} />
                <Route path="huizen" component={UserIsAuthenticated(Houses)} />
            </Route>
        </Router>
    </Provider>, app);

