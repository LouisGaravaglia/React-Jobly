import React, { useState } from "react";

const Search = ({handleSearch}) => {
    const [formData, setFormData] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSearch(formData);
    };
    const handleChange = (e) => {
        setFormData(e.target.value);
    };
    return  (
        <div>
        <form onSubmit={handleSubmit}>
           <input 
                name="search"
                type="text"
                value={formData}
                placeholder="Enter a company to search for"
                onChange={handleChange}
           />

           <button>Submit</button>
          </form> 
        </div>
    )
}

export default Search;