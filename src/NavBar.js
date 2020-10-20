import React, { useContext } from "react";
import {NavLink} from "react-router-dom";
import UserContext from "./UserContext";

const NavBar = ({handleLogOut}) => {
    const { currentUser } = useContext(UserContext);

    const loggedInNav = () => {
        return (
            <>
            <NavLink exact to="/profile">Profile</NavLink>
            <NavLink exact to="/" onClick={handleLogOut}>Logout</NavLink>
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
        { currentUser ? loggedInNav() : publicNav() }
        </>
    )
}

export default NavBar;