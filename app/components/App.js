import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from "react-redux"
import { logout, loadUser } from '../actions/userActions'
import { styles } from '../style/app.scss'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import { VisibleNotLoggedIn, VisibleOnlyLoggedIn } from '../utils/authWrappers.js'
import AdminNav from "./AdminNav";
import 'font-awesome/scss/font-awesome.scss';

connect((store) => {
    user: store.user
})

const LoginLink = VisibleNotLoggedIn(() => <li><Link to="/Login">Login</Link></li>)

class App extends Component {
    constructor(props) {
        super(props)
        this.props.dispatch(loadUser(localStorage.getItem('token')))
        this.state = {open: true}
    }


    render() {

        const LogoutLink = VisibleOnlyLoggedIn(() => <li onClick={() => this.props.dispatch(logout())}><a>Logout</a></li>)
        return (
            <div>
                <div className="header">
                    <div className="companyName">KCPSoftware</div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Admin">Admin</Link></li>
                        <li><Link to="/Huizen">huizen</Link></li>
                        <LoginLink />
                        <LogoutLink />
                    </ul>
                </div>
                <AdminNav />
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default connect()(App)
