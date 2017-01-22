import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import Layout from "./components/Layout"
import store from "./store"
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'
import App from './components/App'
import Home from './components/Home'

ReactDOM.render(<Provider store={store}>
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="Layout" component={Layout} />
        </Route>
    </Router>
</Provider>, app);

