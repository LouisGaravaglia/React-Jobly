
import React, { useState, useContext, useRef, useEffect } from "react";
import JoblyApi from "./JoblyApi";
import {useHistory} from "react-router-dom";
import UserContext from "./UserContext";
import Alert from "./Alert";

const MESSAGE_SHOW_PERIOD_IN_MSEC = 3000;

const Profile = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);
    console.log("Username", currentUser);
    const history = useHistory();
    const {setToken} = useContext(UserContext);
    const [userForm, setUserForm] = useState({
        first_name: currentUser.first_name || "",
        last_name: currentUser.last_name || "",
        email: currentUser.email || "",
        photo_url: currentUser.photo_url || "",
        password: "",
        errors: []
    });
    const messageShownRef = useRef(false);
    useEffect(
        function() {
        if (userForm.saveConfirmed && !messageShownRef.current) {
            messageShownRef.current = true;
            setTimeout(function() {
            setUserForm(f => ({ ...f, saveConfirmed: false }));
            messageShownRef.current = false;
            }, MESSAGE_SHOW_PERIOD_IN_MSEC);
        }
        },
        [userForm]
    );
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserForm(f => ({
      ...f,
      [name]: value,
      errors: []
    }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
        first_name: userForm.first_name || undefined,
        last_name: userForm.last_name || undefined,
        email: userForm.email || undefined,
        photo_url: userForm.photo_url || undefined,
        password: userForm.password
      };
        try {
            console.log("entering try/catch");
           const updatedUser = await JoblyApi.updateUser(currentUser.username, data);
            setUserForm(f => ({
        ...f,
        errors: [],
        saveConfirmed: true,
        password: ""
      }));
         setCurrentUser(updatedUser)
        } catch(errors) {
            console.log(e);
            setUserForm(f => ({ ...f, errors }));
        }
    }
    return  (
       <form onSubmit={handleSubmit}>
       <label>Username: </label>
           <p>{currentUser.username}</p>
        <label>First Name: </label>
           <input 
               type="text"
               name="first_name"
               value={userForm.first_name}
               placeholder="first_name"
               onChange={handleChange}
           />
        <div className="input-group">  
        <label>Last Name: </label>
           <input 
               type="text"
               name="last_name"
               value={userForm.last_name}
               placeholder="last_name"
               onChange={handleChange}
           />
           </div> 
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

           {userForm.errors.length ? (
              <Alert type="danger" messages={userForm.errors} />
            ) : null}

            {userForm.saveConfirmed ? (
              <Alert type="success" messages={["User updated successfully."]} />
            ) : null}

           <button>Submit</button>
       </form>
    )
}

export default Profile;
