import React, { useState, useEffect} from "react";
import JoblyApi from "./JoblyApi";
import CompaniesList from "./CompaniesList";
import Search from "./Search";

const Companies = () => {
    const [companies, setCompanies] = useState([]);

    useEffect(() => {
        async function getCompanies() {
            const companyResults = await JoblyApi.getCompanies();
            setCompanies(companyResults);
        }
        getCompanies();
    }, []);

    const handleSearch = async (search) => {
        const matchingCompanies = await JoblyApi.getCompanies(search);
        console.log("MATCHING COMPANIES", matchingCompanies);
        setCompanies(matchingCompanies);

    }

    return (
        <>
            <Search handleSearch={handleSearch} />
            <CompaniesList companies={companies} />
        </>
    )
}

export default Companies;