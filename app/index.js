import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import Login from "./components/Login"
import store from "./store"
import { Router, Route, IndexRoute, hashHistory, browserHistory } from 'react-router'
import { routerReducer, syncHistoryWithStore, routerActions, routerMiddleware } from 'react-router-redux'
import App from './components/App'
import Home from './components/Home'
import Admin from './components/Admin'
import { UserAuthWrapper } from 'redux-auth-wrapper'

const UserIsAuthenticated = UserAuthWrapper({
    authSelector: state => state.user,
    redirectAction: routerActions.replace,
    wrapperDisplayName: 'UserIsAuthenticated',
    failureRedirectPath: '/login',

})

const baseHistory = browserHistory
const history = syncHistoryWithStore(baseHistory, store)
ReactDOM.render(

    <Provider store={store}>
        {/* hashHistory ---> browserHistory when the site is on a server for clean urls*/}
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="/Login" component={Login} />
                <Route path="/Admin" component={UserIsAuthenticated(Admin)} />
            </Route>
        </Router>
    </Provider>, app);

