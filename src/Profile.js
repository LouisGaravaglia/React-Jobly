import React, { useState, useContext } from "react";
import JoblyApi from "./JoblyApi";
import {Link, useHistory} from "react-router-dom";
import UserContext from "./UserContext";

const Profile = () => {
    const { currentUser } = useContext(UserContext);
    console.log("Username", currentUser);
     const history = useHistory();
    const {setToken} = useContext(UserContext);

      const [userForm, setUserForm] = useState({
    first_name: currentUser.first_name || "",
    last_name: currentUser.last_name || "",
    email: currentUser.email || "",
    photo_url: currentUser.photo_url || "",
    username: currentUser.username,
    password: "",
    errors: [],
    saveConfirmed: false
  });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserForm(data => ({
            ...data,
            [name]:value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = userForm;
        let token;
        try {
            token = await JoblyApi.registerUser(data);
        } catch(e) {
            console.log(e);
        }
            localStorage.setItem("jobly-token", token);
            setToken(token);
            history.push("/jobs");

    }

    return  (
       <form onSubmit={handleSubmit}>
       <label>Username: </label>
           <p>{userForm.username}</p>
        <label>First Name: </label>
           <input 
               type="text"
               name="first_name"
               value={userForm.first_name}
               placeholder="first_name"
               onChange={handleChange}
           />
        <label>Last Name: </label>
           <input 
               type="text"
               name="last_name"
               value={userForm.last_name}
               placeholder="last_name"
               onChange={handleChange}
           />
        <label>Email: </label>
           <input 
               type="text"
               name="email"
               value={userForm.email}
               placeholder="email"
               onChange={handleChange}
           />
        <label>Photo URL: </label>
           <input 
               type="text"
               name="photo_url"
               value={userForm.photo_url}
               placeholder="photo_url"
               onChange={handleChange}
           />
        <label>Re-enter Password: </label>
           <input 
               type="text"
               name="password"
               value={userForm.password}
               placeholder="password"
               onChange={handleChange}
           />
           <button>Register</button>
       </form>
    )
}

export default Profile;
