import React from 'react';
import './JobStatus.css';

const JobStatus = ({ job, deleteJob, updateJobStatus }) => {
  const handleChange = (e) => {
    updateJobStatus(job.id, e.target.value);
  };

  return (
    <div className="job-status">
      <span>{job.title}</span>

      
      <select value={job.status} onChange={handleChange}>
        <option value="Need to Start">Need to Start</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      
      <button onClick={() => deleteJob(job.id)}>❌</button>
    </div>
  );
};

export default JobStatus;
