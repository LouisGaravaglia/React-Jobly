import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = () => {

    return (
        <>
        <NavLink exact to="/companies">Companies</NavLink>
        <NavLink exact to="/jobs">Jobs</NavLink>
        <NavLink exact to="/profile">Profile</NavLink>
        <NavLink exact to="/login">Login</NavLink>
        </>
    )
}

export default NavBar;