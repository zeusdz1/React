import React from 'react';
import JobStatus from './JobStatus';
import './JobColumn.css';

const JobColumn = ({ title, jobs, deleteJob, updateJobStatus }) => {
  return (
    <div className="job-column">
      <h2>{title}</h2>
      {jobs.length > 0 ? (
        jobs.map((job) => (
          <JobStatus 
            key={job.id} 
            job={job} 
            deleteJob={deleteJob} 
            updateJobStatus={updateJobStatus} 
          />
        ))
      ) : (
        <p className="empty">No jobs here</p>
      )}
    </div>
  );
};

export default JobColumn;
