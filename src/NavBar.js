import React from "react";
import {NavLink} from "react-router-dom";

const NavBar = () => {
    const isLoggedIn = localStorage.getItem("jobly-token");

    const loggedInNav = () => {
        return (
            <>
            <NavLink exact to="/profile">Profile</NavLink>
            <NavLink exact to="/logout">Logout</NavLink>
            </>
        )
    }

    const publicNav = () => {
        return (
            <>
            <NavLink exact to="/login">Login</NavLink>
            <NavLink exact to="/register">Register</NavLink>
            </>
        )
    }
    return (
        <>
        <NavLink exact to="/">Jobly</NavLink>
        <NavLink exact to="/companies">Companies</NavLink>
        <NavLink exact to="/jobs">Jobs</NavLink>
        { isLoggedIn ? loggedInNav() : publicNav() }
        </>
    )
}

export default NavBar;