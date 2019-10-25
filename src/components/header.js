import React from "react";
import "./../components/css/header.css"
import store from "./../store"

class Header extends React.Component {
    constructor(){
        const reduxState = store.getState();
        super()

        this.state = {
            header: ""
        }
    }

    componentDidMount(){
        store.subscribe(() => {
            const reduxState = store.getState();
            this.setState({header: reduxState.header})
            console.log("vneji")
        })
    }

    render(){
        return (
            <h1>{this.state.header}</h1>
        )
    }
}

export default Header