import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import JoblyApi from "./JoblyApi";
import UserContext from "./UserContext";


const Login = () => {
    const { setToken  } =useContext(UserContext);
    const history = useHistory();
    const INITIAL_VALUE = {
        username:"",
        password:""
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
            token = await JoblyApi.loginUser(data);
        } catch(e) {
            console.log(e);
        }
            localStorage.setItem("jobly-token", token);
            setToken(token);
            history.push("/jobs");


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
        
           <button>Login</button>
       </form>
    )
}

export default Login;
