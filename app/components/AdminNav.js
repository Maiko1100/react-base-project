import React, { Component } from 'react';
import { addBook, getBooks, deleteBook } from "../actions/bookActions";
import { Link } from 'react-router'
import { connect } from "react-redux";
import { styles } from '../style/AdminNav.scss'

class AdminNav extends Component {
    constructor() {
        super();
        this.state = {
            openSideMenu: true,
            navItems: [
                {
                    text: "test1",
                    href: "#test",
                    showChilds: true,
                    childs: [{
                        text: "test2",
                        href: "#test"
                    }, {
                        text: "test3",
                        href: "#test"
                    }
                    ]
                },
                {
                    text: "test4",
                    href: "#test",
                    showChilds: false,
                    childs: [{
                        text: "test5",
                        href: "#test"
                    }, {
                        text: "test6",
                        href: "#test"
                    }
                    ]
                }
            ]
        };
    }

    setShowChilds(text) {
        let navItems = this.state.navItems.slice();
        for (let i = 0; i < navItems.length; i++) {
            if (navItems[i].text == text) {
                    navItems[i].showChilds = !navItems[i].showChilds
                    this.setState({ navItems: navItems })                
            }
        }
    }

    toggleSideMenu(){
     this.setState({openSideMenu: !this.state.openSideMenu});
     console.log(this.state.openSideMenu);
    }

    render() {
        const _this = this;
        let index = 0;
        return (
            <div className="sideNavContainer">
            <div className={"sideNav " + (this.state.openSideMenu ? '' : 'closed')}>
                <ul>
                    {this.state.navItems.map(function (navItem) {
                        index++
                        return (
                            <div>
                                <li key={index} onClick={_this.setShowChilds.bind(_this, navItem.text)}><span>{navItem.text}</span></li>{
                                    navItem.childs.map(function (subNavItem) {
                                            index++
                                            return <li key={index} className={"childItem " + (navItem.showChilds ? '' : 'hideChild')}>
                                            <span>{subNavItem.text}</span></li>
                                    })}
                            </div>);
                    })}
                </ul>
            </div>
            <div class="toggleNavButton" onClick={this.toggleSideMenu.bind(this)}><i className={this.state.openSideMenu ? 'fa fa-angle-left' : 'fa fa-angle-right'} aria-hidden="true"></i></div>
            </div>


        );
    }
}

export default AdminNav;
