import React, {useState} from 'react';


const JobList = ({ jobs}) => {
    return (
        <div>
            <h2>Job List</h2>
            {jobs.length === 0 ? (
                <p>No jobs added yet.</p>
            ) : (
            <ul>
                {jobs.map((job, index) => (
                    <li key={index}>
                        <strong>{job.title}</strong> - {job.category} ({job.status})
                    </li>
                ))}
            </ul>
            )}
        </div>
    );
};


export default JobList;