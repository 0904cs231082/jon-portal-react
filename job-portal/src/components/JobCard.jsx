import { Link } from "react-router-dom";

function JobCard({job}){
    return(
        <div className="job-card">
            <img src={job.thumbnail} alt={job.title} />
            <h3>{job.title}</h3>
            <p>{job.description.slice(0, 80)}...</p>
            <Link to={`/job/${job.id}`}>
            <button>View Details </button>
            </Link>
        </div>
    )
}

export default JobCard