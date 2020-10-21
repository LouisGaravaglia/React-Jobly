import React, { useEffect, useState, useContext } from "react";
import {useParams} from "react-router-dom";
import JoblyApi from "./JoblyApi";
import Job from "./Job";
import UserContext from "./UserContext";

const CompanyDetails = () => {
    const {handle} = useParams();
    const { currentUser } = useContext(UserContext);
    const [company, setCompany] = useState([]);

    useEffect(() => {
        const getCompanyDetails = async () => {
            const { jobs } = currentUser;
            const c = await JoblyApi.getCompany(handle);
            const jobsAppliedTo = new Set(jobs.map(job => job.id));
            console.log("COMPANY DETAILS", c);
            // add key for each job in company if it is applied to ---
            // this let us handle the "apply/applied" button
            c.jobs = c.jobs.map(job => ({
                ...job,
                state: jobsAppliedTo.has(job.id) ? "Applied" : null
            }))
            setCompany(c);
        }
        getCompanyDetails();
    }, [handle, currentUser]);

 async function apply(idx) {
    if (company && Array.isArray(company.jobs) && idx < company.jobs.length) {
      let jobId = company.jobs[idx].id;
      let message = await JoblyApi.applyToJob(jobId);
      setCompany(c => {
        let newCompany = { ...c };
        newCompany.jobs = newCompany.jobs.map(job =>
          job.id === jobId ? { ...job, state: message } : job
        );
        return newCompany;
      });
    }
  }

    return company.jobs ? (
        <div>
            {company.jobs.map((job, idx)=> (
                <Job key={idx} idx={idx} apply={apply} item={job}/>
            ))}
        </div>
    ) : (
        <p>Loading</p>
    )
}

export default CompanyDetails;