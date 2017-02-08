import React, {Component} from 'react';

import {addHouse} from "../actions/houseActions";
import {connect} from "react-redux";
import  AdminNav from "./AdminNav";
import {styles} from "../style/houses.scss"
import Dropzone from "react-dropzone"
import {SortableContainer, SortableElement, arrayMove} from 'react-sortable-hoc';


const SortableItem = SortableElement(({value}) => <li>{value}</li>);

const SortableList = SortableContainer(({items}) => {


    return (

        <div className="sortable-container">

            {items.map((value, index) =>

                <SortableItem key={`item-${index}`} index={index} value={<img src={value.preview}></img>}/>
            )}
        </div>
    );
});


@connect((store) => {
    return {
        user: store.user.user,
        house: store.house,
        token: store.user.token

    };
})


class Houses extends Component {


    constructor() {
        super();
        this.state = {
            files: [],
            test: '',
        };
        this.onDrop = this.onDrop.bind(this);

    }


    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
            files: arrayMove(this.state.files, oldIndex, newIndex)
        });
    };


    onDrop(acceptedFiles) {

        if (this.state.files == null) {

            this.setState({
                files: acceptedFiles
            })
        } else {
            var newArray = this.state.files.slice();

            acceptedFiles.map((picture) =>
                newArray.push(picture)
            );

            this.setState({files: newArray});
        }

        console.log(this.state)
    }


    addHouse() {
        // console.log(this.state)
        var data = {
            name: this.refs.name.value,
            price: this.refs.price.value,
            year: this.refs.year.value,
            pictures: this.state.files,
            token: localStorage.getItem('token')
        }
        this.props.dispatch(addHouse(data))
    }


    onSortEnd = ({oldIndex, newIndex}) => {
        this.setState({
            files: arrayMove(this.state.files, oldIndex, newIndex)
        });
    };


    render() {


        return (
            <div>

                <AdminNav/>

                <div className="houses-container">

                    <h1>Voeg een huis toe</h1>

                    <div className="input-container">
                        <label>Naam</label>
                        <input ref="name" type="text" placeholder="naam"/>
                    </div>
                    <div className="input-container">
                        <label>Bouwjaar</label>
                        <input ref="year" type="text" placeholder="Bouwjaar"/>
                    </div>
                    <div className="input-container">
                        <label>test</label>
                        <input ref="price" type="text" placeholder="Prijs"/>
                    </div>

                    <Dropzone className="dropzone" onDrop={this.onDrop}>

                        <p>Sleep hier de foto's heen of klik op het blok om een foto toe te voegen.</p>

                    </Dropzone>


                    <button onClick={this.addHouse.bind(this)}>Voeg toe</button>
                    {/*{pictures.map((picture) => <img src={picture.preview}></img>)}*/}

                        <SortableList helperClass="SortableHelper" items={this.state.files} onSortEnd={this.onSortEnd}/>


                </div>

            </div>

        );
    }
}

export default Houses;
