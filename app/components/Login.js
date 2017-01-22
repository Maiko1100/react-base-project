import React, {Component, PropTypes} from "react";
import {connect} from "react-redux";
import {login} from "../actions/userActions";
import {routerActions} from "react-router-redux";

function select(state, ownProps) {
    const isAuthenticated = state.token || false
    const redirect = ownProps.location.query.redirect || '/'
    return {
        isAuthenticated,
        redirect
    }
}

@connect((store) => {
    return {
        user: store.user,
    };
})


class Layout extends Component {

    static propTypes = {
        login: PropTypes.func.isRequired,
        replace: PropTypes.func.isRequired
    };

    componentWillMount() {
        const {isAuthenticated, replace, redirect} = this.props
        if (isAuthenticated) {
            replace(redirect)
        }
    }

    componentWillReceiveProps(nextProps) {
        const {isAuthenticated, replace, redirect} = nextProps
        const {isAuthenticated: wasAuthenticated} = this.props

        if (!wasAuthenticated && isAuthenticated) {
            replace(redirect)
        }
    }

    test() {
        console.log("safdasdf")
    }

    onClick = (e) => {
        e.preventDefault()
        this.props.login({
            username: this.refs.username.value,
            password: this.refs.password.value
        })
    };


    render() {

        return <div>

            <input ref="username" type="text" placeholder="Gebruikersnaam" value="demo"/>
            <input ref="password" type="text" placeholder="Wachtwoord" value="test123"/>
            <button onClick={this.onClick}>login</button>
            <button onClick={this.test.bind(this)}>login</button>
        </div>
    }
}

export default connect(select, {login, replace: routerActions.replace})(Layout)