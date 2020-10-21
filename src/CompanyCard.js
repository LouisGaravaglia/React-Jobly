import React from "react";
import './App.css';

const CompanyCard = ({name, description, logo}) => {

    return (
        <div className="CompanyCard has-text-primary">
        <h3>{name}</h3>
        <p>{description}</p>
        <img src={logo}/>
        </div>
    ) 
}

export default CompanyCard;