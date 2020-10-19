import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import JoblyApi from "./JoblyApi";

const CompanyDetails = () => {
    const {handle} = useParams();
    const [company, setCompany] = useState([]);

    useEffect(() => {
        const getCompanyDetails = async () => {
            const companyDetails = await JoblyApi.getCompany(handle);
            console.log("COMPANY DETAILS", companyDetails);
            setCompany(companyDetails)
        }
        getCompanyDetails();
    }, []);

    return company.jobs ? (
        <div>
            {company.jobs.map(job => (
                <div>
                <p>Job Title: {job.title}</p>
                <p>Job Salary: {job.salary}</p>
                <p>Job Equity: {job.equity}</p>
                </div>
            ))}
        </div>
    ) : (
        <p>Loading</p>
    )
}

export default CompanyDetails;

//   "company": {
//     "handle": "anderson-arias-and-morrow",
//     "name": "Anderson, Arias and Morrow",
//     "num_employees": 245,
//     "description": "Somebody program how I. Face give away discussion view act inside. Your official relationship administration here.",
//     "logo_url": "",
//     "jobs": [
//       {
//         "id": 13,
//         "title": "Art gallery manager",
//         "salary": 114000,
//         "equity": 0.19
//       },