import React from "react";


const Job = ({title, salary, equity}) => {


    return (
        <div>
            <p>Job Title: {title}</p>
            <p>Job Salary: {salary}</p>
            <p>Job Equity: {equity}</p>
        </div>
    )
}

export default Job;