import React from "react";
import {Route, Switch} from "react-router-dom";
import Test from "./Test";
import Companies from "./Companies";

const Routes = () => {

    return (
        <>
        <Switch>
            <Route exact path="/"><Test/></Route>
            <Route exact path="/companies"><Companies/></Route>
            <Route exact path="/companies/:name"></Route>
            <Route exact path="/jobs"><Test/></Route>
            <Route exact path="/profile"><Test/></Route>
            <Route exact path="/jobs/:"><Test/></Route>
            <Route exact path="/login"><Test/></Route>
            <Route><p>Hmmm. I can't seem to find what you want.</p></Route>
        </Switch>
        </>
    )
}

export default Routes;