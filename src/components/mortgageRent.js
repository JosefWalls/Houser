import React from 'react';
import {HashRouter, Link} from 'react-router-dom';
import axios from 'axios';

class mortgageRent extends React.Component {
    constructor(){
        super()

        this.state = {
            Mortgage: "",
            Rent: ""
        }
    }

    handleMortgage = (e) => {
        this.setState({Mortgage: e.target.value})
    }

    handleRent = (e) => {
        this.setState({Rent: e.target.value})
    }

    handleClick = () => {
        const {Mortgage, Rent} = this.state;
        axios.post("/api/properties/mortgage", {
            Mortgage,
            Rent
        })
        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    render(){
        return (
            <>
            <p>Mortgage and Rent</p>
            <input onChange={this.handleMortgage} placeholder="Monthly Mortgage Amount"></input>
            <input onChange={this.handleRent} placeholder="Desired Monthly Rent"></input>

                <button onClick={this.handleClick}>Complete</button>
            <Link to="/">
                       <button>View properties</button>
            </Link>
            </>
        )
    }
}

export default mortgageRent;