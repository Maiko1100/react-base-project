import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from "react-redux"
import { logout } from '../actions/userActions'
import { styles } from '../style/app.scss'
connect((store) => {
    user: store.user
})
class App extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <div className="header">
                    <div className="companyName">KCPSoftware</div>
                    <ul>
                        <li><Link to="/layout">Layout</Link></li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/Admin">{'Admnin (Login Required)'}</Link></li>
                        <li onClick={() => this.props.dispatch(logout())}>Logout</li>
                    </ul>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default connect(logout)(App)
