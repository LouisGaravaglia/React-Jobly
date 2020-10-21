import React from "react";
import {Link} from "react-router-dom";
import Job from "./Job";

const JobsList = ({jobs=[], apply = () => null }) => {
    return jobs.length ? (
        <div>
            {jobs.map((job, idx) => (
               <Job key={idx} idx={idx} apply={apply} title={job.title} item={job}/>
            ))}
        </div>
    ) : (
        <p>No results were found.</p>
    )
}

export default JobsList;