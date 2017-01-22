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
import Loading from './components/Loading'


const baseHistory = browserHistory
const history = syncHistoryWithStore(baseHistory, store)

const UserIsAuthenticated = UserAuthWrapper({
    authSelector: state => state.user,
    authenticatingSelector: state => state.user.isLoading,
    LoadingComponent: Loading,
    redirectAction: routerActions.replace,
    wrapperDisplayName: 'UserIsAuthenticated',
    predicate: user => user.data !== null && user.isLoading === false,


})
const UserIsAdmin = UserAuthWrapper({
    authSelector: state => state.user.data,
    redirectAction: routerActions.replace,
    failureRedirectPath: '/',
    wrapperDisplayName: 'UserIsAdmin',
    predicate: user => user.isAdmin,
    allowRedirectBack: false
})
const UserIsNotAuthenticated = UserAuthWrapper({
    authSelector: state => state.user,
    redirectAction: routerActions.replace,
    wrapperDisplayName: 'UserIsNotAuthenticated',
    // Want to redirect the user when they are done loading and authenticated
    predicate: user => user.data === null && user.isLoading === false,
    failureRedirectPath: (state, ownProps) => ownProps.location.query.redirect || '/',
    allowRedirectBack: false
})
ReactDOM.render(

    <Provider store={store}>
        {/* hashHistory ---> browserHistory when the site is on a server for clean urls*/}
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="/Login" component={UserIsNotAuthenticated(Login)} />
                <Route path="/Admin" component={UserIsAuthenticated(Admin)} />
            </Route>
        </Router>
    </Provider>, app);

