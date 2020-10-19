import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import JoblyApi from "./JoblyApi";
import Job from "./Job";

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
                <Job title={job.title} salary={job.salary} equity={job.equity}/>
            ))}
        </div>
    ) : (
        <p>Loading</p>
    )
}

export default CompanyDetails;