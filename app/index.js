import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import Layout from "./components/Layout"
import store from "./store"
import { Router, Route, IndexRoute, Link, hashHistory} from 'react-router'
import { routerReducer, syncHistoryWithStore, routerActions, routerMiddleware } from 'react-router-redux'
import App from './components/App'
import Home from './components/Home'
import { UserAuthWrapper } from 'redux-auth-wrapper'
// import './css/index.css';


const UserIsAuthenticated = UserAuthWrapper({
    authSelector: state => state.user,
    redirectAction: routerActions.replace,
    wrapperDisplayName: 'UserIsAuthenticated'
})

ReactDOM.render(<Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="Layout" component={Layout} />
        </Route>
    </Router>
</Provider>, app);

