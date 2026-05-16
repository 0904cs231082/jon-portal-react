import { useEffect, useState } from "react";
import { fetchJobs } from "../services/api";
import JobCard from "../components/JobCard";
import SearchBar from "../components/SearchBar";
import Loader from "../components/Loader";

function Home(){
 
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const getJobs = async () =>{
            const data = await fetchJobs();
            setJobs(data);
            setLoading(false);
        }
        getJobs();
    }, []);
    const filteredJobs = jobs.filter(job =>
        job.title.toLowerCase().includes(search.toLowerCase())
    );

    return(
        <div className="container">
            <SearchBar search={search} setSearch={setSearch}/>
            {loading ? (
                <Loader/>
            ):(
                <div className="job-grid">
                    {filteredJobs.map(job => (
                        <JobCard key={job.id}
                        job={job} />
                    )
                )}
                </div>
            )}
        </div>
    )
}

export default Home;