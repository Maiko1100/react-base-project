import React, { Component } from "react"
import { connect } from "react-redux"


import {fetchUser} from "../actions/userActions"
import {testApi} from "../actions/userActions"


@connect((store) => {
    return {
        user: store.user,
        // fetchedUser: store.data.fetchedUser,
        // fetchingUser: store.data.fetchingUser
    };
})

function select(state, ownProps) {
    const isAuthenticated = state.user.name || false
    const redirect = ownProps.location.query.redirect || '/'
    return {
        isAuthenticated,
        redirect
    }
}
class Layout extends Component {


    componentWillMount() {
    }


    login() {
        this.props.dispatch(fetchUser(this.refs.username.value, this.refs.password.value))
    }


    render() {

        return <div>

            <input ref="username" type="text" placeholder="Gebruikersnaam" />
            <input ref="password" type="text" placeholder="Wachtwoord" />
            <button onClick={this.login.bind(this)}>login</button>

        </div>
    }
}

export default connect(select, { login, replace: routerActions.replace })(Layout)