import React from 'react';
import routes from "./routes"
import {HashRouter, Link} from 'react-router-dom';
import './App.css';
import store from "./store"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      header: store.getState().header
    }

  }

    editHeader = () => {

    }
    render(){
      return (
        <>
        <h1>{this.state.header}</h1>
        {routes}
        </>
      )
    }
}

export default App