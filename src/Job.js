import React from "react";
import JobCard from "./JobCard";

const Job = ({idx, apply = () => null, item}) => {


    return (
        <JobCard item={item} handleApply={() => apply(idx)} />
    )
}

export default Job;