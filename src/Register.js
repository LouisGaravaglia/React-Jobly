import React, { useState, useContext } from "react";
import JoblyApi from "./JoblyApi";
import { useHistory } from "react-router-dom";
import UserContext from "./UserContext";


const Register = () => {
    const history = useHistory();
    const {setToken} = useContext(UserContext);

    const INITIAL_VALUE = {
        username:"",
        password:"",
        first_name:"",
        last_name:"",
        email:"",
        photo_url:""
    }

    const [formData, setFormData] = useState(INITIAL_VALUE);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(data => ({
            ...data,
            [name]:value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = formData;
        let token;
        try {
            token = await JoblyApi.registerUser(data);
        } catch(e) {
            console.log(e);
        }
        if (token) {
            localStorage.setItem("jobly-token", token);
            setToken(token);
            history.push("/jobs");
        }
    }


    return (
       <form onSubmit={handleSubmit}>
       <label>Username: </label>
           <input 
               type="text"
               name="username"
               value={formData.username}
               placeholder="password"
               onChange={handleChange}
           />
        <label>Password: </label>
           <input 
               type="text"
               name="password"
               value={formData.password}
               placeholder="password"
               onChange={handleChange}
           />
        <label>First Name: </label>
           <input 
               type="text"
               name="first_name"
               value={formData.first_name}
               placeholder="first_name"
               onChange={handleChange}
           />
        <label>Last Name: </label>
           <input 
               type="text"
               name="last_name"
               value={formData.last_name}
               placeholder="last_name"
               onChange={handleChange}
           />
        <label>Email: </label>
           <input 
               type="text"
               name="email"
               value={formData.email}
               placeholder="email"
               onChange={handleChange}
           />
        <label>Photo: </label>
           <input 
               type="text"
               name="photo_url"
               value={formData.photo_url}
               placeholder="photo_url"
               onChange={handleChange}
           />
           <button>Register</button>
       </form>
    )
}

export default Register;