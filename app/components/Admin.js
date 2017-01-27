import React, { Component } from 'react';
import { addBook , getBooks } from "../actions/bookActions";

import { connect } from "react-redux";


@connect((store) => {
    return {
        user: store.user,
        books: store.books.books
    };
})

class Home extends Component {


    componentWillMount() {
        var data2 = {
            token: localStorage.getItem('token')
        }
        this.props.dispatch(getBooks(data2))


    }


    onClick = (e) => {
        e.preventDefault()

        var data = {
            name :  this.refs.name.value,
            author:this.refs.author.value,
            year: this.refs.year.value,
            token: localStorage.getItem('token')
    }
        this.props.dispatch(addBook(data))

    };

    deleteBook(id){
        console.log(id)
    }


    render() {

        const {books} =this.props;

        const listbooks = books.map((book) => <li onClick={this.deleteBook.bind(this)} key={book.id}>{book.name}</li>)

        return (
            <div className="login-container">

                <h1>Voeg een boek toe</h1>
                <div className="input-container">
                    <input ref="name" type="text" placeholder="name"  />
                </div>
                <div className="input-container">
                    <input ref="author" type="text" placeholder="author"  />
                </div>
                <div className="input-container">
                    <input ref="year" type="text" placeholder="year" />
                </div>
                <button onClick={this.onClick}>Voeg toe</button>

                <ul>{listbooks}</ul>
            </div>


        );
    }
}

export default Home;
