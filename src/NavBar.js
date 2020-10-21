import React, { useContext } from "react";
import {NavLink} from "react-router-dom";
import UserContext from "./UserContext";

const NavBar = ({handleLogOut}) => {
    const { currentUser } = useContext(UserContext);
    console.log("NavBar says currentUser is: ", currentUser);

    const loggedInNav = () => {
        return (
            <>
                <NavLink exact to="/companies">Companies</NavLink>
                <NavLink exact to="/jobs">Jobs</NavLink>
                <NavLink exact to="/profile">Profile</NavLink>
                <NavLink exact to="/" onClick={handleLogOut}>Logout</NavLink>
            </>
        )
    }

    const publicNav = () => {
        return (
            <>
                <NavLink exact to="/login" className="NavLink">Login</NavLink>
                <NavLink exact to="/register">Register</NavLink>
            </>
        )
    }
    return (
        <div className="NavBar">
            <NavLink exact to="/">Jobly</NavLink>
            { currentUser ? loggedInNav() : publicNav() }
        </div>
    )
}

export default NavBar;