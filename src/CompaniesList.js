import React from "react";
import {Link} from "react-router-dom";
import CompanyCard from "./CompanyCard";

const CompaniesList = ({companies=[]}) => {
    const baseURL = "companies/"
    return companies.length ? (
        <div>
            {companies.map(company => (
                <Link to={baseURL + company.handle} >
                <CompanyCard name={company.name} description={company.description} logo={company.logo_url}/>
            </Link>
            ))}
        </div>
    ) : (
        <p>No results were found.</p>
    )
}

export default CompaniesList;