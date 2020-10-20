import React from "react";
import {Route, Switch} from "react-router-dom";
import Test from "./Test";
import Companies from "./Companies";
import Jobs from "./Jobs";
import CompanyDetails from "./CompanyDetails";
import Register from "./Register";
import Login from "./Login";
import Home from "./Home";
import Profile from "./Profile";

const Routes = () => {


    return (
        <>
        <Switch>
            <Route exact path="/"><Home/></Route>
            <Route exact path="/companies"><Companies/></Route>
            <Route exact path="/companies/:handle"><CompanyDetails/></Route>
            <Route exact path="/jobs"><Jobs/></Route>
            <Route exact path="/profile"><Profile/></Route>
            <Route exact path="/jobs/:"><Test/></Route>
            <Route exact path="/login"><Login/></Route>
            <Route exact path="/register"><Register/></Route>
            <Route><p>Hmmm. I can't seem to find what you want.</p></Route>
        </Switch>
        </>
    )
}

export default Routes;