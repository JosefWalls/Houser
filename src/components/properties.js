import React from 'react'
import {Link} from 'react-router-dom'
import Axios from 'axios';
import store, {UPDATE_PROPERTIES} from "./../store";
import "./css/properties.css"

class Properties extends React.Component {
    constructor(){
        super();
        this.state = {
            properties : []
        }
    }

    componentDidMount(){
        Axios.get("/api/properties")
        .then(response => {
            this.setState({properties: response.data})
        })
        .catch(error => {
            console.log(error)
        })
    }

    getProperties = () => {
        Axios.get("/api/properties")
        .then(response => 
            store.dispatch({
                type: UPDATE_PROPERTIES,
                payload: response.data
            })
        )
        .catch(error => {
            console.log(error)
        })
    }

    deleteProperty = (house_id) => {
        Axios.delete(`api/properties/${house_id}`)
        .then(response => 
            store.dispatch({
                type: UPDATE_PROPERTIES,
                payload: response.data
            })
        )
    }

    render(){
        console.log(this.state.properties)
        const mappedProducts = this.state.properties.map((val, i) => {
            return (
                <div className="card">
                <p>{val.name}</p>
                <p>{val.address}</p>
                <p>{val.city}</p>
                <p>{val.state}</p>
                <p>{val.zip}</p>
                <p>{val.image}</p>
                <p>{val.mortgage}</p>
                <p>{val.rent}</p>
                <button onClick={() => this.deleteProperty(val.house_id)}>Delete Property</button>
                </div>
            )
        })
        return (
            <>
            <p>Properties</p>
            <Link to="/form">
            <button>Add property</button>
            </Link>
            {mappedProducts}
            </>
        )
    }
}


export default Properties;