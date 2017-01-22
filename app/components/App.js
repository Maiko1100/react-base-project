import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from "react-redux"
import { logout , loadUser} from '../actions/userActions'
import { styles } from '../style/app.scss'
import { UserAuthWrapper } from 'redux-auth-wrapper'
import { UserIsAuthenticated, VisibleOnlyLoggedIn } from '../utils/authWrappers.js'

connect((store) => {
    user: store.user
})



// const logOutLink = VisibleOnlyLoggedIn(() => <li onClick={() => this.props.dispatch(logout())}><a>Logout</a></li>)
class App extends Component {

    constructor(props){
        super(props)
        this.props.dispatch(loadUser())
        }


    render() {

        const loginLink = VisibleOnlyLoggedIn((props) => <li><Link to="/Login">Login</Link></li>)
        return (
            <div>
                <div className="header">
                    <div className="companyName">KCPSoftware</div>
                    <ul>
                        {/*<li><Link to="/Login">Login</Link></li>*/}
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Admin">Admin</Link></li>
                        <li onClick={() => this.props.dispatch(logout())}><a>Logout</a></li>
                        <loginLink />
                    </ul>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default connect()(App)
