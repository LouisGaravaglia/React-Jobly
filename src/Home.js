import React, { useContext } from "react";
import {Link} from "react-router-dom";
import Job from "./Job";
import UserContext from "./UserContext";

const Home = () => {
    const { currentUser } = useContext(UserContext);
    return currentUser ? (
       <div>
            <h1>Jobly</h1>
            <p>All the jobs in one, convenient place.</p>
            <h3>Welcome Back!</h3>
        </div>
    ) : (
        <div>
            <h1>Jobly</h1>
            <p>All the jobs in one, convenient place.</p>
            <Link to="/login"><button>LogIn</button></Link>
        </div>
    )
}

export default Home;