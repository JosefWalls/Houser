import React from 'react'
import {Switch, Route} from 'react-router-dom';
import Form from "./components/form";
import Properties from "./components/properties";
import Image from "./components/image";
import mortgageRent from "./components/mortgageRent";


export default (
    <Switch>
        <Route exact path="/" component={Properties} />
        <Route path="/form" component={Form} />
        <Route path="/image" component={Image} />
        <Route path="/mortgage" component={mortgageRent} />
    </Switch>
)