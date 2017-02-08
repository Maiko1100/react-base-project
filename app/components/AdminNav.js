import React, { Component } from 'react';
import { addBook , getBooks , deleteBook} from "../actions/bookActions";
import { Link } from 'react-router'
import { connect } from "react-redux";
import { styles } from '../style/AdminNav.scss'





class AdminNav extends Component {

constructor() {
    super();
    this.state = {
        selected: '',
        collapse :true,
        class:''

    };
}

    test(state,key) {

        this.setState({collapse:!state})

        if (state){
            this.setState({class:'sideNavChild'})
        }else{
            this.setState({class:'sideNavChildCollapse'})
        }


    }
    test2(){
    console.log(this.state.class)
    }


    render() {



        return (

            <div className="sideNav">

                <ul>
                    <div className="parent" onClick={this.test.bind(this, this.state.collapse)}> Parent
                        <div className={this.state.class} ><a href="default.asp">Child</a></div>
                        <div className={this.state.class} ><a href="default.asp">Child 2</a></div>
                        <div className={this.state.class} ><a href="default.asp">Child 3</a></div>
                    </div>
                    <li><Link to="/Huizen">Huizen</Link></li>
                    <li><a href="contact.asp">Contact</a></li>
                        <li className={this.state.class} ><a href="default.asp">Child</a></li>
                        <li className={this.state.class} ><a href="default.asp">Child 2</a></li>
                        <li className={this.state.class} ><a href="default.asp">Child 3</a></li>
                    <li onClick={this.test2.bind(this)}><a>About</a></li>
                </ul>
            </div>


        );
    }
}

export default AdminNav;
