import React, { useState, useEffect} from "react";
import JoblyApi from "./JoblyApi";
import JobsList from "./JobsList";
import Search from "./Search";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        async function getJobs() {
            const jobResults = await JoblyApi.getJobs();
            setJobs(jobResults);
        }
        getJobs();
    }, []);

    const handleSearch = async (search) => {
        const matchingJobs = await JoblyApi.getJobs(search);
        console.log("MATCHING JOBS", matchingJobs);
        setJobs(matchingJobs);
    }

    return (
        <>
            <Search handleSearch={handleSearch} />
            <JobsList jobs={jobs} />
        </>
    )
}

export default Jobs;