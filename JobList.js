import React from 'react';
import JobItem from './JobItem';

const JobList = ({ jobs, onDeleteJob}) => {
    return (
        <div className="job-list">
            {jobs.length > 0 ? (
                jobs.map((job) => (
                    <JobItem
                    key={job.id}
                    job={job}
                    onDelete={onDeleteJob}
                    />
                ))
            ) : (
                <p>No jobs available</p>
            )}
        </div>
    );
};


export default JobList;