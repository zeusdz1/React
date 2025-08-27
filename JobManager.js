import React, { useState, useEffect } from 'react';
import JobColumn from './JobColumn'; 
function JobManager() {
  const [jobs, setJobs] = useState(() => {
    const savedJobs = localStorage.getItem('jobs');
    return savedJobs ? JSON.parse(savedJobs) : [];
  });
  const [activity, setActivity] = useState('');
  const [categories, setCategories] = useState([]);
  const [status, setStatus] = useState('Need to Complete');

  
  useEffect(() => {
    localStorage.setItem('jobs', JSON.stringify(jobs));
  }, [jobs]);

  
  const addJob = (e) => {
    e.preventDefault();
    const newJob = { id: Date.now(), activity, categories, status };
    setJobs(prevJobs => [...prevJobs, newJob]);
    resetForm();
  };

 
  const deleteJob = (jobId) => {
    setJobs(prevJobs => prevJobs.filter(job => job.id !== jobId));
  };

  
  const clearAllJobs = () => {
    setJobs([]);
    localStorage.removeItem('jobs');
  };

  
  const resetForm = () => {
    setActivity('');
    setCategories([]);
    setStatus('Need to Complete');
  };

  
  const toggleCategory = (category) => {
    setCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="job-manager">
      <form onSubmit={addJob}>
        <input
          type="text"
          placeholder="Enter activity..."
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
          required
        />

        <div>
          <label>
            <input
              type="checkbox"
              checked={categories.includes('Work')}
              onChange={() => toggleCategory('Work')}
            />
            Work
          </label>
          <label>
            <input
              type="checkbox"
              checked={categories.includes('Personal')}
              onChange={() => toggleCategory('Personal')}
            />
            Personal
          </label>
          <label>
            <input
              type="checkbox"
              checked={categories.includes('Urgent')}
              onChange={() => toggleCategory('Urgent')}
            />
            Urgent
          </label>
        </div>

        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Need to Complete">Need to Complete</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <button type="submit">Add Job</button>
      </form>

      <button onClick={clearAllJobs}>Clear All Jobs</button>

      <div className="job-columns">
        <JobColumn title="Need to Complete" status="Need to Complete" jobs={jobs} deleteJob={deleteJob} />
        <JobColumn title="In Progress" status="In Progress" jobs={jobs} deleteJob={deleteJob} />
        <JobColumn title="Completed" status="Completed" jobs={jobs} deleteJob={deleteJob} />
      </div>
    </div>
  );
}

export default JobManager;
