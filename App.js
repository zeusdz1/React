import React, { useState } from 'react';
import JobList from './components/JobList';


const App = () => {
  const [jobs, setJobs] = useState([
    { id: 1, name: 'Email Extractor', status: 'running' },
    { id: 2, name: 'Data Analyzer', status: 'completed' },
    { id: 3, name: 'Report Generator', status: 'running' }
  ]);

  const handleDeleteJob = (id) => {
    setJobs(jobs.filter(job => job.id !== id));
  };

  const handleAddJob = () => {
    const newJob = {
      id: Date.now(),
      name: `New Job ${jobs.length + 1}`,
      status: 'running'
    };
    setJobs([...jobs, newJob]);
  };

  return (
    <div className="app">
      <h1>Job Board</h1>
      <button onClick={handleAddJob}>Add Job</button>
      <JobList jobs={jobs} onDeleteJob={handleDeleteJob} />
      </div>
  );
};

export default App;
