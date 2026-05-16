// import React from 'react'
import { useParams } from "react-router-dom";


function JobDetails(){
   const {id} = useParams();
    return(
    <div className="details">
        <h1>Job Details Page</h1>
        <p>job ID:{id}</p>
    </div>
    )
}

export default JobDetails;