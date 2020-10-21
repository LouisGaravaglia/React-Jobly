import React, { useState, useEffect} from "react";
import JoblyApi from "./JoblyApi";
import JobsList from "./JobsList";
import Search from "./Search";

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
      const [infoLoaded, setInfoLoaded] = useState(false);


    useEffect(() => {
        async function getJobs() {
            try{
                const jobResults = await JoblyApi.getJobs();
                setJobs(jobResults);
            } catch(e) {
                console.log(e);
            }
            setInfoLoaded(true);
        }
        setInfoLoaded(false);
        getJobs();
    }, []);

    async function apply(idx) {
        let jobId = jobs[idx].id;
        let message = await JoblyApi.applyToJob(jobId);
        setJobs(j => j.map(job => 
            job.id === jobId ? { ...job, state: message} : job
        ));
    }

    const handleSearch = async (search) => {
        const matchingJobs = await JoblyApi.getJobs(search);
        console.log("MATCHING JOBS", matchingJobs);
        setJobs(matchingJobs);
    }

    if (!infoLoaded) {
    return (
      <p>Content is loading!</p>
    )
  }

    return (
        <>
            <Search handleSearch={handleSearch} />
            <JobsList jobs={jobs} apply={apply}/>
        </>
    )
}

export default Jobs;