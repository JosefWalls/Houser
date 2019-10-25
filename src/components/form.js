import React from 'react';
import {HashRouter, Link} from 'react-router-dom'
import axios from 'axios';
import store, {UPDATE_NAME, UPDATE_ADDRESS, UPDATE_CITY, UPDATE_STATE, UPDATE_ZIP} from "./../store"

class Form extends React.Component {
    constructor(){
        super();

        this.state = {
            name: "",
            address: "",
            city: "",
            state: "",
            zip: 0
        }
    }

    handleName = (e) =>{
        this.setState({name: e.target.value})
    }

    handleAddress = (e) =>{
        this.setState({address: e.target.value})
    }

    handleCity = (e) =>{
        this.setState({city: e.target.value})
    }

    handleState = (e) =>{
        this.setState({state: e.target.value})
    }

    handleZip = (e) =>{
        this.setState({zip: e.target.value})
    }

    handleSubmit = () => {
        const {name, address, city, state, zip} = this.state;
        axios.post("/api/properties", {
            name,
            address,
            city,
            state,
            zip
        })
        .then(response => {
            alert("Property details added")
            store.dispatch({
                type: UPDATE_NAME,
                payload: this.state.name
            })
            store.dispatch({
                type: UPDATE_ADDRESS,
                payload: this.state.address
            })
            store.dispatch({
                type: UPDATE_CITY,
                payload: this.state.city
            })
            store.dispatch({
                type: UPDATE_STATE,
                payload: this.state.state
            })
        })
        .catch(error => {
            console.log("errors")
        })
    }

    render(){
        return (
            <div>
                <input onChange={this.handleName} placeholder="Property Name"></input>
                <input onChange={this.handleAddress} placeholder="Address"></input>
                <input onChange={this.handleCity} placeholder="City"></input>
                <input onChange={this.handleState} placeholder="State"></input>
                <input onChange={this.handleZip} placeholder="Zip"></input>
                <Link to="/image">
                <button onClick={this.handleSubmit}>Next Step</button>
                </Link>
            </div>
        )
    }
}



export default Form;