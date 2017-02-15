import React, { Component } from 'react';
import { addBook, getBooks, deleteBook } from "../actions/bookActions";
import { connect } from "react-redux";

@connect((store) => {
    return {
        user: store.user.user,
        books: store.books.books,
        token: store.user.token
    };
})

class Admin extends Component {
    constructor() {
        super();
        this.state = {
            files: [],
            test: '',
        };
    }

    componentWillMount() {
        var data2 = {
            token: localStorage.getItem('token')
        }
        this.props.dispatch(getBooks(data2))
    }

    onClick = (e) => {
        e.preventDefault()
        var data = {
            name: this.refs.name.value,
            author: this.refs.author.value,
            year: this.refs.year.value,
            token: localStorage.getItem('token')
        }
        this.props.dispatch(addBook(data))
    };

    deleteBook(id) {
        // var data3 = {
        //     token: localStorage.getItem('token'),
        //     id : id
        // }
        //
        // this.props.dispatch(deleteBook(data3))
        console.log(this.state)
    }

    tester() {
        this.setState({ test: 'hoiiii' })
    }

    render() {
        const { books } = this.props;
        const listbooks = books.map((book) => <li onClick={this.deleteBook.bind(this, book.id)} key={book.id}>{book.name}</li>)

        return (
            <div>
                <p>{this.state.test}</p>
                <div className="login-container">
                    <h1>Voeg een boek toe</h1>
                    <div className="input-container">
                        <input ref="name" type="text" placeholder="name" />
                    </div>
                    <div className="input-container">
                        <input ref="author" type="text" placeholder="author" />
                    </div>
                    <div className="input-container">
                        <input ref="year" type="text" placeholder="year" />
                    </div>
                    <button onClick={this.onClick}>Voeg toe</button>
                    <button onClick={this.tester.bind(this)}>Test</button>
                    <ul>{listbooks}</ul>
                </div>
            </div>
        );
    }
}

export default Admin;
