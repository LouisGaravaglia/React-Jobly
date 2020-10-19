import React from "react";
import {Link} from "react-router-dom";
import Job from "./Job";

const JobsList = ({jobs=[]}) => {
    return jobs.length ? (
        <div>
            {jobs.map(job => (
               <Job title={job.title} salary={job.salary} equity={job.equity}/>
            ))}
        </div>
    ) : (
        <p>No results were found.</p>
    )
}

export default JobsList;