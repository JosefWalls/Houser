import React from 'react'
import axios from 'axios'
import store, {UPDATE_IMAGE} from './../store'
import {HashRouter, Link} from 'react-router-dom'

class Image extends React.Component {
    constructor(){
        super()

        this.state = {
            image: ""
        }
    }


    handleImage = (e) => {
        this.setState({image: e.target.value})
    }

    handleClick = () => {
        const {image} = this.state;
        axios.post("/api/properties/image", {
            image
        })
        .then(response => 
            store.dispatch({
                type: UPDATE_IMAGE,
                payload: this.state.image
            })
        )
        .catch(error => {
            console.log("error")
        })
    }

    render(){
        return (
            <>
            <p>Image</p>
            <input onChange={this.handleImage}placeholder="Enter image"></input>
            <Link to="/mortgage">
                <button onClick={this.handleClick}>Next Step</button>
            </Link>
            </>
        )
    }
}

export default Image