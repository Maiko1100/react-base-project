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
export default class Layout extends Component {

    componentWillMount() {
        this.props.dispatch(testApi())
    }


    login() {
        console.log("asdfasdfasdfsdfa")
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
