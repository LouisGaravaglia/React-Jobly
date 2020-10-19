import React from "react";

const CompanyCard = ({name, description, logo}) => {

    return (
        <div>
        <p>{name}</p>
        <p>{description}</p>
        <p>{logo}</p>
        </div>
    ) 
}

export default CompanyCard;