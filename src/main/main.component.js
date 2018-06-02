import React from 'react'
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import Nav from "../nav/Nav.container";
import Home from "../home/Home.container";
import Topics from "../topics/Topics.container";

const MainComponent = (props) => {
    return (
        <BrowserRouter>
            <div>
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/topics" component={Topics}/>
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default MainComponent